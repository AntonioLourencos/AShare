import { Link } from "@remix-run/react";
import Button from "../button";
import * as Styles from "./styles";
import Logo from "../../assets/Logo.svg";

const Header = (): JSX.Element => {
	return (
		<Styles.Container>
			<Link to="/">
				<img src={Logo} alt="" />
			</Link>
			<nav>
				<Link to="/#about">About</Link>
				<Link to="/signin">SignIn</Link>
				<Button to="/signup">SignUp</Button>
			</nav>
		</Styles.Container>
	);
};

export default Header;
