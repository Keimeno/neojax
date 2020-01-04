declare module '@keimeno/neocajax' {
	abstract class NeoCajaxRequest {
		xhr: XMLHttpRequest;
		method: string;
		contenttype: string;
		data: object | string;

		abstract contstructor(
			url: string,
			method: string,
			data?: object | string,
			options?: object
		): void;

		abstract response(func: void): XMLHttpRequest | NeoCajaxRequest;
		abstract then(func: void): XMLHttpRequest | NeoCajaxRequest;
		abstract catch(func: void): XMLHttpRequest | NeoCajaxRequest;
		abstract custom(func: void): XMLHttpRequest | NeoCajaxRequest;
		abstract send(func: void): NeoCajaxRequest;
	}

	abstract class NeoPrajaxPromise {
		xhr: XMLHttpRequest;
		method: string;
		contenttype: string;
		data: object | string;

		abstract contstructor(
			url: string,
			method: string,
			data?: object | string,
			options?: object
		): void;

		abstract response(
			func: void
		): Promise<XMLHttpRequest | NeoCajaxRequest>;
		abstract then(func: void): Promise<XMLHttpRequest | NeoCajaxRequest>;
		abstract catch(func: void): Promise<XMLHttpRequest | NeoCajaxRequest>;
		abstract custom(func: void): Promise<XMLHttpRequest | NeoCajaxRequest>;
		abstract send(func: void): Promise<NeoCajaxRequest>;
	}

	export class NeoCajax {
		public static post(
			url: string,
			data?: object | string,
			options?: object,
			usinginput?: boolean
		): NeoCajaxRequest;
		public static get(
			url: string,
			data?: object | string,
			options?: object,
			usinginput?: boolean
		): NeoCajaxRequest;
		public static put(
			url: string,
			data?: object | string,
			options?: object,
			usinginput?: boolean
		): NeoCajaxRequest;
		public static delete(
			url: string,
			data?: object | string,
			options?: object,
			usinginput?: boolean
		): NeoCajaxRequest;
		public static trace(
			url: string,
			data?: object | string,
			options?: object,
			usinginput?: boolean
		): NeoCajaxRequest;
		public static connect(
			url: string,
			data?: object | string,
			options?: object,
			usinginput?: boolean
		): NeoCajaxRequest;
		public static options(
			url: string,
			data?: object | string,
			options?: object,
			usinginput?: boolean
		): NeoCajaxRequest;
		public static ajax(json: object): NeoCajaxRequest;
	}

	export class NeoPrajax {
		public static post(
			url: string,
			data?: object | string,
			options?: object,
			usinginput?: boolean
		): NeoPrajaxPromise;
		public static get(
			url: string,
			data?: object | string,
			options?: object,
			usinginput?: boolean
		): NeoPrajaxPromise;
		public static put(
			url: string,
			data?: object | string,
			options?: object,
			usinginput?: boolean
		): NeoPrajaxPromise;
		public static delete(
			url: string,
			data?: object | string,
			options?: object,
			usinginput?: boolean
		): NeoPrajaxPromise;
		public static trace(
			url: string,
			data?: object | string,
			options?: object,
			usinginput?: boolean
		): NeoPrajaxPromise;
		public static connect(
			url: string,
			data?: object | string,
			options?: object,
			usinginput?: boolean
		): NeoPrajaxPromise;
		public static options(
			url: string,
			data?: object | string,
			options?: object,
			usinginput?: boolean
		): NeoPrajaxPromise;
		public static ajax(json: object): NeoPrajaxPromise;
	}

	export default NeoCajax;
}
