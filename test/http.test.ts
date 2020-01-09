import http from 'http';
import cors from 'cors';
import bodyParser from 'body-parser';
import express, { Request, Response } from 'express';
import Neojax from '../src';
import NeojaxResponse, { NeojaxConvolutedResponse } from '../types/response';
import Util from '../src/util';

const router = express();
let server: http.Server;

const baseUrl = 'http://localhost:3000/';
Neojax.options.baseUrl = baseUrl;

const expectedReturnBody = {
	query: {
		this: 'works'
	},
	body: {
		this: 'works'
	}
};

// to avoid duplicate code in testing
const retrieveQueryBodyObject = (req: Request): object => {
	return { query: req.query, body: req.body };
};

describe('http request tests', () => {
	beforeAll(() => {
		router.use(cors({ origin: '*' }));
		router.use(bodyParser.json());

		// get method endpoint
		router.get('/:status', (req: Request, res: Response) => {
			res.status(+req.params.status).json({
				method: 'GET',
				query: req.query
			});
		});

		// post method endpoint
		router.post('/:status', (req: Request, res: Response) => {
			res.status(+req.params.status).json({
				method: 'POST',
				...retrieveQueryBodyObject(req)
			});
		});

		// put method endpoint
		router.put('/:status', (req: Request, res: Response) => {
			res.status(+req.params.status).json({
				method: 'PUT',
				...retrieveQueryBodyObject(req)
			});
		});

		// put method endpoint
		router.delete('/:status', (req: Request, res: Response) => {
			res.status(+req.params.status).json({
				method: 'DELETE',
				...retrieveQueryBodyObject(req)
			});
		});

		server = http.createServer(router).listen(3000);
	});

	afterAll(() => {
		server.close();
	});

	//! private methods tests
	test('get request 200', async () => {
		try {
			const response = await Neojax['manageRequest']('GET', '200');
			expect(response).toMatchObject({
				status: 200
			});
		} catch (error) {}
	});

	test('get request 400', async () => {
		try {
			const response = await Neojax['manageRequest']('GET', '400');
			response;
		} catch (error) {
			expect(error).toMatchObject({
				response: {
					status: 400
				}
			});
		}
	});

	//! index tests
	test('can perform get request', async () => {
		Neojax.get('200?this=works').then((response: NeojaxResponse) => {
			expect(response.status).toBe(200);
			expect(response.data).toMatchObject({
				method: 'GET',
				query: {
					this: 'works'
				}
			});
		});
	});

	test('can perform post request', async () => {
		Neojax.post('200?this=works', { this: 'works' }).then(
			(response: NeojaxResponse) => {
				expect(response.status).toBe(200);
				expect(response.data).toMatchObject({
					method: 'POST',
					...expectedReturnBody
				});
			}
		);
	});

	test('can perform put request', async () => {
		Neojax.put('200?this=works', { this: 'works' }).then(
			(response: NeojaxResponse) => {
				expect(response.status).toBe(200);
				expect(response.data).toMatchObject({
					method: 'PUT',
					...expectedReturnBody
				});
			}
		);
	});

	test('can perform delete request', async () => {
		Neojax.delete('200?this=works', { this: 'works' }).then(
			(response: NeojaxResponse) => {
				expect(response.status).toBe(200);
				expect(response.data).toMatchObject({
					method: 'DELETE',
					...expectedReturnBody
				});
			}
		);
	});

	//! utility tests
	test('can send direct request', async () => {
		Util.sendRequest(`${baseUrl}200?util=works`, 'GET', null, {}, {}).then(
			(response: NeojaxConvolutedResponse) => {
				expect(response.status).toBe(200);
				expect(response.data).toMatchObject({
					method: 'GET',
					query: {
						util: 'works'
					}
				});
			}
		);
	});
});
