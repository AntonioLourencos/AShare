export default interface ISignUp {
	profile: {
		avatar: string;
		nickname: string;
	};
	session: {
		token: string;
		expiressAt: string;
	};
}
