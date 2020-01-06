import NeojaxHeaders from './headers';

type NeojaxResponse = {
	status: number;
	headers: NeojaxHeaders;
	url: string;
	data: any;
};

type NeojaxConvolutedResponse = NeojaxResponse & {
	success: boolean;
	message: string;
};

export { NeojaxConvolutedResponse, NeojaxResponse };

export default NeojaxResponse;
