import NeoCajaxHeaders from './headers';

type NeoCajaxResponse = {
	status: number;
	headers: NeoCajaxHeaders;
	url: string;
	data: any;
};

type NeoCajaxConvolutedResponse = NeoCajaxResponse & {
	success: boolean;
	message: string;
};

export { NeoCajaxConvolutedResponse, NeoCajaxResponse };

export default NeoCajaxResponse;
