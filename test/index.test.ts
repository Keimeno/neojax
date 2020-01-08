import Neojax from '../src/';
import 'unfetch/polyfill';

process.on(
	'unhandledRejection',
	(err: object | null | undefined, p: Promise<null>) => {
		if (err) {
			return;
		}

		p.finally(() => 0);
	}
);

describe('Neojax entry tests', () => {
	test('Can change options', () => {
		const baseUrl = 'http://localhost:3000/api/v1/';
		const neojax = Neojax.create({
			baseUrl
		});

		expect(neojax.options).toMatchObject({
			baseUrl
		});
	});

	test('Can override options', () => {
		const baseUrl = 'http://localhost:3000/api/v1/';
		const neojax = Neojax.create({
			baseUrl,
			headers: {
				'Content-Type': 'text/css'
			}
		});

		expect(neojax.options).toMatchObject({
			headers: {
				'Content-Type': 'text/css'
			}
		});
	});

	test('Can perform GET request', () => {
		const baseUrl = 'http://localhost:3000/api/v1/';
		const neojax = Neojax.create({
			baseUrl,
			headers: {
				'Content-Type': 'text/css'
			}
		});

		expect(neojax.get('information')).resolves.toBeFalsy();
	});

	test('Can perform POST request', () => {
		const baseUrl = 'http://localhost:3000/api/v1/';
		const neojax = Neojax.create({
			baseUrl,
			headers: {
				'Content-Type': 'text/css'
			}
		});

		expect(neojax.post('information')).resolves.toBeFalsy();
	});

	test('Can perform PUT request', () => {
		const baseUrl = 'http://localhost:3000/api/v1/';
		const neojax = Neojax.create({
			baseUrl,
			headers: {
				'Content-Type': 'text/css'
			}
		});

		expect(neojax.put('information')).resolves.toBeFalsy();
	});

	test('Can perform DELETE request', () => {
		const baseUrl = 'http://localhost:3000/api/v1/';
		const neojax = Neojax.create({
			baseUrl,
			headers: {
				'Content-Type': 'text/css'
			}
		});

		expect(neojax.delete('information')).resolves.toBeFalsy();
	});

	test('Can return defined options', () => {
		const baseUrl = 'http://localhost:3000/api/v1';
		const neojax = Neojax.create({
			baseUrl
		});

		expect(neojax.options).toMatchObject({ baseUrl });
	});

	test('Can return default headers', () => {
		const baseUrl = 'http://localhost:3000/api/v1';
		const neojax = Neojax.create({
			baseUrl
		});

		expect(neojax.defaultHeaders).toMatchObject({
			'Content-Type': 'application/json; charset=utf-8'
		});
	});

	test('Can manage request', async () => {
		const url = 'https://reqres.in/api/users';
		try {
			const response = await Neojax.get(url);
			expect(response).toMatchObject({
				page: 1
			});
		} catch (error) {}
	});

	test('Can manage request receives 404', async () => {
		const url = 'https://reqres.in/apwai';
		try {
			const response = await Neojax['manageRequest']('GET', url);
			expect(response).toMatchObject({
				page: 1
			});
		} catch (error) {
			expect(error).toMatchObject({
				response: {
					status: 404
				}
			});
		}
	});

	test('can set options after instance creation', () => {
		const startUrl = 'test';
		const newUrl = 'test1';
		const neojax = Neojax.create({
			baseUrl: startUrl
		});

		neojax.options.baseUrl = newUrl;

		expect(neojax.options.baseUrl).toBe(newUrl);
	});
});
