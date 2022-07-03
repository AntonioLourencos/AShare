export interface ISignUp {
	profile: {
		avatar: string;
		nickname: string;
	};
	session: {
		token: string;
		expiressAt: string;
	};
}

export default ISignUp;
