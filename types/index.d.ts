import NeoCajaxOptions from './options';
import NeoCajaxError from './error';
import NeoCajaxResponse, { NeoCajaxConvolutedResponse } from './response';
import NeoCajax from '../src/';

declare module '@keimeno/neocajax' {
	export {
		NeoCajaxOptions,
		NeoCajaxError,
		NeoCajaxResponse,
		NeoCajaxConvolutedResponse
	};

	export default NeoCajax;
}
