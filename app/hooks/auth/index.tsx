import React from "react";
import { type IAuth, type IMethods } from "@App/interfaces/hooks/auth";

const AuthContext = React.createContext<IMethods>({} as IMethods);

const AuthProvider = ({
	children,
}: {
	children: React.ReactNode;
}): JSX.Element => {
	const [auth, setAuth] = React.useState<IAuth | null>(null);

	return (
		<AuthContext.Provider value={{ auth, setAuth }}>
			{children}
		</AuthContext.Provider>
	);
};

const useAuth = (): IMethods => {
	const dataContext = React.useContext(AuthContext);
	return dataContext;
};
export { useAuth, AuthProvider };
