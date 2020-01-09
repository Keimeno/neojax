import Neojax from '../src/';
import 'unfetch/polyfill';

describe('Neojax entry tests', () => {
	test('can change options', () => {
		const baseUrl = 'http://localhost:3000/';
		const neojax = Neojax.create({
			baseUrl
		});

		expect(neojax.options).toMatchObject({
			baseUrl
		});
	});

	test('can override options', () => {
		const neojax = Neojax.create({
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

	test('can return defined options', () => {
		const baseUrl = 'http://localhost:3000/';
		const neojax = Neojax.create({
			baseUrl
		});

		expect(neojax.options).toMatchObject({ baseUrl });
	});

	test('can return default headers', () => {
		const neojax = Neojax.create();

		expect(neojax.defaultHeaders).toMatchObject({
			'Content-Type': 'application/json; charset=utf-8'
		});
	});

	test('can set options after instance creation', () => {
		const startUrl = 'test';
		const newUrl = 'test1';
		const neojax = Neojax.create({
			baseUrl: startUrl
		});

		neojax.options = {
			baseUrl: newUrl
		};

		expect(neojax.options.baseUrl).toBe(newUrl);
	});

	test('can set global options', () => {
		const newUrl = 'test1';

		Neojax.options = {
			baseUrl: newUrl
		};

		expect(Neojax.options.baseUrl).toBe(newUrl);
	});
});
