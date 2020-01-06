import NeojaxResponse from './response';

type NeojaxError = {
	response: NeojaxResponse;
	message: string;
};

export default NeojaxError;
