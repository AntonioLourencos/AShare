import type ISignIn from "./signIn";

export default interface ISignUp extends ISignIn {
	nickname: string;
}
