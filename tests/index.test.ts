import Neojax from '../src/';

process.on('unhandledRejection', (err, p) => {});

describe('Neojax entry tests', () => {
	test('Can change options', async () => {
		const baseUrl = 'http://localhost:3000/api/v1/';
		const neojax = Neojax.create({
			baseUrl
		});

		expect(neojax.options).toMatchObject({
			baseUrl
		});
	});

	test('Can override options', async () => {
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

	test('Can perform GET request', async () => {
		const baseUrl = 'http://localhost:3000/api/v1/';
		const neojax = Neojax.create({
			baseUrl,
			headers: {
				'Content-Type': 'text/css'
			}
		});

		expect(neojax.get('information')).resolves.toBeFalsy();
	});

	test('Can perform POST request', async () => {
		const baseUrl = 'http://localhost:3000/api/v1/';
		const neojax = Neojax.create({
			baseUrl,
			headers: {
				'Content-Type': 'text/css'
			}
		});

		expect(neojax.post('information')).resolves.toBeFalsy();
	});

	test('Can perform PUT request', async () => {
		const baseUrl = 'http://localhost:3000/api/v1/';
		const neojax = Neojax.create({
			baseUrl,
			headers: {
				'Content-Type': 'text/css'
			}
		});

		expect(neojax.put('information')).resolves.toBeFalsy();
	});

	test('Can perform DELETE request', async () => {
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
			'Content-Type': 'application/json; charset=utf8'
		});
	});
});
