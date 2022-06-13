declare global {
	interface Window {
		env: {
			SERVICE_INTERNAL_BASEURL: string;
		};
	}
}

export {};
