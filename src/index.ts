import Util from './util';

// types import
import NeojaxOptions from '../types/options';
import NeojaxHeaders from '../types/headers';
import NeojaxResponse from '../types/response.js';

/**
 * Neojax class
 */
class Neojax {
	private _options: NeojaxOptions = {};
	private readonly _defaultHeaders: NeojaxHeaders = {
		'Content-Type': 'application/json; charset=utf-8'
	};

	/**
	 * Neojax constructor, can take an options parameter
	 *
	 * @param options
	 */
	constructor(options?: NeojaxOptions) {
		let headers: NeojaxHeaders = {};

		if (options) {
			this._options = options;
			headers = options.headers || {};
		}

		// Set default headers
		this._options.headers = {
			...this._defaultHeaders,
			...headers
		};
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
			const response = await Util.sendRequest(
				url,
				method,
				data,
				this._options,
				options
			);

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
		data?: object,
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
		data?: object,
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
		data?: object,
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

	/**
	 * makes it possible to change options
	 */
	public set options(options: NeojaxOptions) {
		this._options = options;
	}

	/**
	 * returns the default headers
	 */
	public get defaultHeaders(): NeojaxHeaders {
		return this._defaultHeaders;
	}
}

export default new Neojax();
