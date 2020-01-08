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

	test('retrieve data', () => {
		nodefetch('https://api.kanye.rest/').then((response: Response) => {
			// eslint-disable-next-line
			// @ts-ignore
			expect(Util['retrieveData'](response)).toBeInstanceOf(Object); // if it couldn't retrieve the data it would return a string
		});
	});
});
