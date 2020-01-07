// types import
import NeojaxOptions from '../types/options';
import NeojaxHeaders from '../types/headers';
import NeojaxResponse, { NeojaxConvolutedResponse } from '../types/response.js';

// import fetch api
import 'unfetch/polyfill';

/**
 * Neojax class
 */
class Neojax {
	private readonly _options: NeojaxOptions = {};

	/**
	 * Neojax constructor, can take an options parameter
	 *
	 * @param options
	 */
	constructor(options?: NeojaxOptions) {
		if (options) {
			this._options = options;
		}
	}

	/**
	 * Create a new Neojax instance out of your existing one.
	 *
	 * @param options
	 */
	public create(options?: NeojaxOptions): Neojax {
		return new Neojax(options);
	}

	/**
	 * This is the function, that sends out every request.
	 *
	 * NeojaxOptions priority:
	 *  1. NeojaxOptions specified in every single request
	 *  2. NeojaxOptions set when creating a new instance through the create method
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
		data: object | null,
		options?: NeojaxOptions
	): Promise<NeojaxConvolutedResponse> {
		let finalUrl = url;
		let headers: NeojaxHeaders = this._options.headers || {};

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

		const response = await fetch(finalUrl, init);
		let body: object | string | number | boolean;

		headers = this.parseHeadersToNeojaxHeaders(response.headers);
		try {
			body = await response.json();
		} catch (e) {
			try {
				body = await response.text();
			} catch (err) {
				body = {};
			}
		}

		return {
			status: response.status,
			headers,
			url: response.url,
			success: response.ok,
			message: response.statusText,
			data: body
		};
	}

	/**
	 * Manages all incoming requests,
	 * returns neojaxerror or neojaxresponse as promise
	 *
	 * @param method
	 * @param url
	 * @param data
	 * @param options
	 */
	private async manageRequest(
		method: string,
		url: string,
		data: object | null = null,
		options?: NeojaxOptions
	): Promise<NeojaxResponse> {
		return new Promise<NeojaxResponse>(async (resolve, reject) => {
			const response = await this.sendRequest(url, method, data, options);

			if (response.success) {
				resolve(response);
			} else {
				reject({
					response: response as NeojaxResponse,
					message: response.message
				});
			}
		});
	}

	/**
	 * Parses fetch headers into useable NeojaxHeaders
	 *
	 * @param headers
	 */
	private parseHeadersToNeojaxHeaders(headers: Headers): NeojaxHeaders {
		const newHeaders: NeojaxHeaders = {};

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
	public get(url: string, options?: NeojaxOptions): Promise<NeojaxResponse> {
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
		data: object | null = null,
		options?: NeojaxOptions
	): Promise<NeojaxResponse> {
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
		data: object | null = null,
		options?: NeojaxOptions
	): Promise<NeojaxResponse> {
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
		data: object | null = null,
		options?: NeojaxOptions
	): Promise<NeojaxResponse> {
		return this.manageRequest('DELETE', url, data, options);
	}

	/**
	 * returns the configured options
	 */
	public get options(): NeojaxOptions {
		return this._options;
	}
}

// export { Neojax };

export default new Neojax();
