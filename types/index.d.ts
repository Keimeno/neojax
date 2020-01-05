import NeoCajaxOptions from './options';
import NeoCajaxError from './error';
import NeoCajaxHeaders from './headers';
import NeoCajaxResponse, { NeoCajaxConvolutedResponse } from './response';
import NeoCajax from '../src/';

export {
	NeoCajaxOptions,
	NeoCajaxError,
	NeoCajaxResponse,
	NeoCajaxHeaders,
	NeoCajaxConvolutedResponse,
	NeoCajax
};

declare module 'neocajax' {
	// @ts-ignore
	export = NeoCajax;
}
