import http from 'http';
import cors from 'cors';
import Neojax from '../src';
import express, { Request, Response } from 'express';

const router = express();
let server: http.Server;

describe('http request tests', () => {
	beforeAll(() => {
		router.use(cors({ origin: '*' }));
		router.get('/:status', (req: Request, res: Response) => {
			res.status(+req.params.status).json({package: +req.params.status});
		});

		server = http.createServer(router).listen(3000);
	})

	afterAll(() => {
		server.close();
	})

	test('get request 200', async () => {
		const url = 'http://localhost:3000/200';
		try {
			const response = await Neojax['manageRequest']('GET', url);
			expect(response).toMatchObject({
				status: 200
			});
		} catch (error) {}
	});

	test('get request 400', async () => {
		const url = 'http://localhost:3000/400';
		try {
			const response = await Neojax['manageRequest']('GET', url);
			response;
		} catch (error) {
			expect(error).toMatchObject({
				response: {
					status: 400
				}
			});
		}
	});
});
