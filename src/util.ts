import 'unfetch/polyfill';
import NeojaxHeaders from 'types/headers';
import { NeojaxConvolutedResponse } from 'types/response';
import NeojaxOptions from 'types/options';

class Util {
	/**
	 * Parses fetch headers into useable NeojaxHeaders
	 *
	 * @param headers
	 */
	public static parseHeadersToNeojaxHeaders(headers: Headers): NeojaxHeaders {
		const newHeaders: NeojaxHeaders = {};

		headers.forEach((value: string, name: string) => {
			newHeaders[name] = value;
		});

		return newHeaders;
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
	public static async sendRequest(
		url: string,
		method: string,
		data: object | null,
		defaultOptions: NeojaxOptions,
		options?: NeojaxOptions,
	): Promise<NeojaxConvolutedResponse> {
		const finalUrl = this.retrieveUrl(defaultOptions.baseUrl || '', (options || {}).baseUrl || '', url);
		const headers = this.retrieveHeaders(defaultOptions.headers || {}, (options || {}).headers || {});

		// builds init
		const init: RequestInit = {
			method,
			headers: {
				...headers
			}
		};

		if (data) {
			init.body = JSON.stringify(data);
		}

		// get back the response
		const response = await fetch(finalUrl, init);

		// get the headers
		const resHeaders = Util.parseHeadersToNeojaxHeaders(response.headers);

		return {
			status: response.status,
			headers: resHeaders,
			url: response.url,
			success: response.ok,
			message: response.statusText,
			data: await this.retrieveData(response)
		};
	}

	/**
	 * retrieves the data from the response object
	 * 
	 * @param response 
	 */
	private static async retrieveData(response: Response): Promise<object | string> {
		try {
			return await response.json();
		} catch (e) {
			try {
				return await response.text();
			} catch (e) {
				// return an empty string, so that users can check
				// if it's falsy or not.
				return '';
			}
		}
	}

	/**
	 * retrieve the requested url.
	 * this depends on the options priority
	 * 
	 * @param defaultUrl 
	 * @param optionsUrl 
	 * @param url 
	 */
	private static retrieveUrl(defaultUrl: string, optionsUrl: string, url: string): string {
		if (optionsUrl) return optionsUrl + url;
		return defaultUrl + url;
	}

	/**
	 * returns the headers, that are set for this request
	 * this as well depends on the headers priority
	 * 
	 * @param defaultHeaders 
	 * @param optionsHeaders 
	 */
	private static retrieveHeaders(defaultHeaders: NeojaxHeaders, optionsHeaders: NeojaxHeaders): NeojaxHeaders {
		return {
			...defaultHeaders,
			...optionsHeaders
		};
	}
}

export default Util;
