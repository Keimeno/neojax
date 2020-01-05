import NeoCajax from '../src/';

process.on('unhandledRejection', (err, p) => {});

describe('NeoCajax entry tests', () => {
	test('Can change options', async () => {
		const baseUrl = 'http://localhost:3000/api/v1/';
		const neocajax = NeoCajax.create({
			baseUrl
		});

		expect(neocajax.options).toMatchObject({
			baseUrl
		});
	});

	test('Can override options', async () => {
		const baseUrl = 'http://localhost:3000/api/v1/';
		const neocajax = NeoCajax.create({
			baseUrl,
			headers: {
				'Content-Type': 'text/css'
			}
		});

		expect(neocajax.options).toMatchObject({
			headers: {
				'Content-Type': 'text/css'
			}
		});
	});

	test('Can perform GET request', async () => {
		const baseUrl = 'http://localhost:3000/api/v1/';
		const neocajax = NeoCajax.create({
			baseUrl,
			headers: {
				'Content-Type': 'text/css'
			}
		});

		expect(neocajax.get('information')).resolves.toBeFalsy();
	});

	test('Can perform POST request', async () => {
		const baseUrl = 'http://localhost:3000/api/v1/';
		const neocajax = NeoCajax.create({
			baseUrl,
			headers: {
				'Content-Type': 'text/css'
			}
		});

		expect(neocajax.post('information')).resolves.toBeFalsy();
	});

	test('Can perform PUT request', async () => {
		const baseUrl = 'http://localhost:3000/api/v1/';
		const neocajax = NeoCajax.create({
			baseUrl,
			headers: {
				'Content-Type': 'text/css'
			}
		});

		expect(neocajax.put('information')).resolves.toBeFalsy();
	});

	test('Can perform DELETE request', async () => {
		const baseUrl = 'http://localhost:3000/api/v1/';
		const neocajax = NeoCajax.create({
			baseUrl,
			headers: {
				'Content-Type': 'text/css'
			}
		});

		expect(neocajax.delete('information')).resolves.toBeFalsy();
	});

	test('Can return defined options', () => {
		const baseUrl = 'http://localhost:3000/api/v1';
		const neocajax = NeoCajax.create({
			baseUrl
		});

		expect(neocajax.options).toMatchObject({ baseUrl });
	});

	test('Can return default headers', () => {
		const baseUrl = 'http://localhost:3000/api/v1';
		const neocajax = NeoCajax.create({
			baseUrl
		});

		expect(neocajax.defaultHeaders).toMatchObject({
			'Content-Type': 'application/json; charset=utf8'
		});
	});
});
