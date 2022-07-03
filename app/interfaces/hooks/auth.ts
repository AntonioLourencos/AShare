import type ISignUp from "../services/response/signUp";

export interface IAuth {
	data: ISignUp;
}

export interface IMethods {
	auth: IAuth | null;
	setAuth: React.Dispatch<React.SetStateAction<IAuth | null>>;
}
