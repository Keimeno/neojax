import NeoCajaxOptions from './options';
import NeoCajaxError from './error';
import NeoCajaxHeaders from './headers';
import NeoCajaxResponse, { NeoCajaxConvolutedResponse } from './response';
import NeoCajax from '../src/';

declare module '@keimeno/neocajax' {
	export {
		NeoCajaxOptions,
		NeoCajaxError,
		NeoCajaxResponse,
		NeoCajaxHeaders,
		NeoCajaxConvolutedResponse
	};

	export default NeoCajax;
}
