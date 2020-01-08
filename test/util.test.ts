import nodefetch, { Response } from 'node-fetch';
import Util from '../src/util';
import { NeojaxConvolutedResponse } from '../types/response';

describe('utility tests', () => {
	test('direct request working', () => {
		const url = 'https://api.kanye.rest/';
		Util.sendRequest(url, 'GET', null, {}, {}).then(
			(res: NeojaxConvolutedResponse) => {
				expect(res).toMatchObject({ status: 200, url });
			}
		);
	});

	test('parse headers to neojax headers', () => {
		// entered a fake Headers object
		const headers = Util['parseHeadersToNeojaxHeaders']({
			append(name: string, value: string) {
				name;
				value;
			},
			delete(name: string) {
				name;
			},
			forEach(cb) {
				cb('application/json', 'content-type', this);
			},
			get(name: string) {
				name;
				return null;
			},
			has(name: string) {
				name;
				return true;
			},
			set(name: string, value: string) {
				name;
				value;
			}
		});

		expect(headers).toMatchObject({ 'content-type': 'application/json' });
	});

	test('default headers overrideable', () => {
		const headers = Util['retrieveHeaders'](
			{
				'content-type': 'application/json'
			},
			{
				'content-type': 'text/css'
			}
		);

		expect(headers).toMatchObject({ 'content-type': 'text/css' });
	});

	test('retrieve url', () => {
		const fullUrl = 'http://test.com/api/one';
		const baseUrl = 'http://test.com/api/';
		const uri = 'one';

		const endUrl = Util['retrieveUrl']('', baseUrl, uri);
		expect(endUrl).toBe(fullUrl);
	});

	test('retrieve data object', () => {
		nodefetch('https://api.kanye.rest/').then(
			async (response: Response) => {
				// eslint-disable-next-line
				// @ts-ignore
				expect(await Util['retrieveData'](response)).toBeTruthy(); // if it couldn't retrieve the data it would return a string
			}
		);
	});

	test('retrieve data string', async () => {
		let response: Response;
		try {
			response = await nodefetch('https://reqres.in/');
		} catch (e) {
			// eslint-disable-next-line
			// @ts-ignore
			response;
			expect(await Util['retrieveData'](e)).toBeTruthy();
		}
	});

	test('retrieve data err', () => {
		nodefetch('https://wikipedia.org/').then(async (response: Response) => {
			// eslint-disable-next-line
			// @ts-ignore
			expect(await Util['retrieveData'](response)).toBe(false); // if it couldn't retrieve the data it would return an empty string
		});
	});
});
