import type ISignInRequest from "@Types/services/request/signIn";
import type ISignInResponse from "@Types/services/response/signIn";
import type ISignUpRequest from "@Types/services/request/signUp";
import type ISignUpResponse from "@Types/services/response/signUp";
import useSWR from "swr";
import InternalAPI from "../config/internal.client";

const Auth = {
	async SignIn(data: ISignInRequest) {
		const { data: response } = await InternalAPI.post<ISignInResponse>(
			"signIn",
			data
		);

		return response;
	},
	async SignUp(data: ISignUpRequest) {
		const { data: response } = await InternalAPI.post<ISignUpResponse>(
			"signUp",
			data
		);

		return response;
	},
};

export default Auth;
