export const VALID_FILE = 'VALID_FILE';
export const SPINNER = 'SPINNER';
export const FILE = 'FILE';

export function fileName(file) {
	return {
		type: FILE,
		data: file
	};
}

export function validFile(valid) {
	return {
		type: VALID_FILE,
		data: valid
	};
}

export function spinner() {
	return {
		type: SPINNER
	};
}