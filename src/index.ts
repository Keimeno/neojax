import { version } from '../package.json';

// types import
import NeoCajaxOptions from '../types/options';
import NeoCajaxHeaders from '../types/headers';
import NeoCajaxResponse, {
	NeoCajaxConvolutedResponse
} from '../types/response.js';
import NeoCajaxError from '../types/error.js';

// import fetch api
import fetch, { RequestInit, Response, Headers } from 'node-fetch';

/**
 * NeoCajax class
 */
class NeoCajax {
	private readonly _options: NeoCajaxOptions = {};
	private readonly _version: string = version;
	private readonly _defaultHeaders: NeoCajaxHeaders = {
		'Content-Type': 'application/json; charset=utf8',
		'Powered-By': 'neocajax; v' + this._version
	};

	/**
	 * NeoCajax constructor, can take an options parameter
	 *
	 * @param options
	 */
	constructor(options?: NeoCajaxOptions) {
		let headers: NeoCajaxHeaders = {};

		if (options) {
			this._options = options;
			headers = options.headers;
		}

		// Set default headers
		this._options.headers = {
			...this._defaultHeaders,
			...headers
		};
	}

	/**
	 * Create a new NeoCajax instance out of your existing one.
	 *
	 * @param options
	 */
	public create(options?: NeoCajaxOptions) {
		return new NeoCajax(options);
	}

	/**
	 * This is the function, that sends out every request.
	 *
	 * NeoCajaxOptions priority:
	 *  1. NeoCajaxOptions specified in every single request
	 *  2. NeoCajaxOptions set when creating a new instance through the create method
	 *  3. Defaultoptions specified in class
	 *
	 * @param url
	 * @param method
	 * @param data
	 * @param options
	 */
	private async sendRequest(
		url: string,
		method: string,
		data?: object,
		options?: NeoCajaxOptions
	): Promise<NeoCajaxConvolutedResponse> {
		let finalUrl: string;
		let headers: NeoCajaxHeaders = this._options.headers;

		if (this._options.baseUrl) {
			finalUrl = this._options.baseUrl + url;
		}

		if (options) {
			if (options.baseUrl) {
				finalUrl = options.baseUrl + url;
			}

			if (options.headers) {
				headers = {
					...headers,
					...options.headers
				};
			}
		}

		const init: RequestInit = {
			method,
			headers: {
				...headers
			}
		};

		if (data) {
			init.body = JSON.stringify(data);
		}

		const response: Response = await fetch(finalUrl, init);
		let body: object | string | number | boolean;

		if (
			response.headers.get('Content-Type').match(/.*application\/json.*/)
		) {
			body = await response.json();
		} else {
			body = await response.text();
		}

		return {
			status: response.status,
			headers: this.parseHeadersToNeoCajaxHeaders(response.headers),
			url: response.url,
			success: response.ok,
			message: response.statusText,
			data: body
		};
	}

	/**
	 * Manages all incoming requests,
	 * returns neocajaxerror or neocajaxresponse as promise
	 *
	 * @param method
	 * @param url
	 * @param data
	 * @param options
	 */
	private async manageRequest(
		method: string,
		url: string,
		data: object = null,
		options?: NeoCajaxOptions
	): Promise<NeoCajaxResponse | NeoCajaxError> {
		return new Promise(async (resolve, reject) => {
			const response = await this.sendRequest(url, method, data, options);

			if (response.success) {
				resolve(response as NeoCajaxResponse);
			} else {
				reject({
					response: response as NeoCajaxResponse,
					message: response.message
				} as NeoCajaxError);
			}
		});
	}

	/**
	 * Parses node-fetch headers into useable NeoCajaxHeaders
	 *
	 * @param headers
	 */
	private parseHeadersToNeoCajaxHeaders(headers: Headers): NeoCajaxHeaders {
		let newHeaders: NeoCajaxHeaders = {};
		headers.forEach((value: string, name: string) => {
			newHeaders[name] = value;
		});

		return newHeaders;
	}

	/**
	 * sends a get request
	 *
	 * @param url
	 * @param options
	 */
	public get(
		url: string,
		options?: NeoCajaxOptions
	): Promise<NeoCajaxResponse | NeoCajaxError> {
		return this.manageRequest('GET', url, null, options);
	}

	/**
	 * sends a post request
	 *
	 * @param url
	 * @param data
	 * @param options
	 */
	public post(
		url: string,
		data: object = null,
		options?: NeoCajaxOptions
	): Promise<NeoCajaxResponse | NeoCajaxError> {
		return this.manageRequest('POST', url, data, options);
	}

	/**
	 * sends a put request
	 *
	 * @param url
	 * @param data
	 * @param options
	 */
	public put(
		url: string,
		data: object = null,
		options?: NeoCajaxOptions
	): Promise<NeoCajaxResponse | NeoCajaxError> {
		return this.manageRequest('PUT', url, data, options);
	}

	/**
	 * sends a delete request
	 *
	 * @param url
	 * @param data
	 * @param options
	 */
	public delete(
		url: string,
		data: object = null,
		options?: NeoCajaxOptions
	): Promise<NeoCajaxResponse | NeoCajaxError> {
		return this.manageRequest('DELETE', url, data, options);
	}

	/**
	 * returns the configured options
	 */
	public get options(): NeoCajaxOptions {
		return this._options;
	}

	/**
	 * returns the package version
	 */
	public get version(): string {
		return this._version;
	}

	/**
	 * returns the default headers
	 */
	public get defaultHeaders(): NeoCajaxHeaders {
		return this._defaultHeaders;
	}
}

export default new NeoCajax();
