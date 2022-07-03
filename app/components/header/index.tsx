import { Link } from "@remix-run/react";
import Button from "../button";
import * as Styles from "./styles";
import Logo from "../../assets/Logo.svg";
import { useAuth } from "@App/hooks/auth";

const Header = (): JSX.Element => {
	const { auth } = useAuth();

	return (
		<Styles.Container>
			<Link to={auth ? `p/${auth.data.profile.nickname}/dashboard` : "/"}>
				<img src={Logo} alt="" />
			</Link>
			<nav>
				<Link to="/#about">About</Link>

				{auth
					? [
							<Link
								to={`p/${auth.data.profile.nickname}/dashboard`}
								key="dashboard"
							>
								Dashboard
							</Link>,
							<Link
								to={`p/${auth.data.profile.nickname}/dashboard/settings`}
								key="settings"
							>
								Settings
							</Link>,
					  ]
					: [
							<Link to="/signin" key="signIN">
								SignIn
							</Link>,
							<Button to={{ path: "/signup" }} key="signup">
								SignUp
							</Button>,
					  ]}
			</nav>
		</Styles.Container>
	);
};

export default Header;
