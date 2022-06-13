import Axios from "axios";

const InternalAPI = Axios.create({
	baseURL: window.env.SERVICE_INTERNAL_BASEURL,
});

InternalAPI.interceptors.request.use((request) => {
	const token = "";

	if (token) {
		request.headers = {
			Authorization: token,
		};
	}

	return request;
});

export default InternalAPI;
