export default interface ISignIn {
	profile: {
		avatar: string;
		nickname: string;
	};
	session: {
		token: string;
		expiressAt: string;
	};
}
