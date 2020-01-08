import http from 'http';
import cors from 'cors';
import Neojax from '../src';
import express, { Request, Response } from 'express';

describe('http request tests', () => {
	test('get request 200', async () => {
		const router = express();
		router.use(cors({ origin: '*' }));
		router.get('/', (req: Request, res: Response) => {
			res.status(200).json({ page: 1 });
		});

		http.createServer(router).listen(4444);

		const url = 'http://localhost:4444/';
		try {
			const response = await Neojax['manageRequest']('GET', url);
			expect(response).toMatchObject({
				page: 1
			});
		} catch (error) {}
	});

	test('get request 404', async () => {
		const router = express();
		router.use(cors({ origin: '*' }));
		router.get('/', (req: Request, res: Response) => {
			res.status(404).json({ page: 1 });
		});

		http.createServer(router).listen(3000);

		const url = 'http://localhost:3000/';
		try {
			const response = await Neojax['manageRequest']('GET', url);
			response;
		} catch (error) {
			expect(error).toMatchObject({
				response: {
					status: 404
				}
			});
		}
	});
});
