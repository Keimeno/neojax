import NeojaxOptions from './options';
import NeojaxError from './error';
import NeojaxHeaders from './headers';
import NeojaxResponse, { NeojaxConvolutedResponse } from './response';
import Neojax from '../src/';

export {
	NeojaxOptions,
	NeojaxError,
	NeojaxResponse,
	NeojaxHeaders,
	NeojaxConvolutedResponse,
	Neojax
};

declare module 'neojax' {
	// @ts-ignore
	export = Neojax;
}
