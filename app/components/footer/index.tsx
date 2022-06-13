import { type LinksFunction } from "@remix-run/node";
import Icon from "../Icon";
import * as Styles from "./styles";

export const links: LinksFunction = () => {
	return [
		{
			rel: "stylesheet",
			href: "https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css",
		},
	];
};
const Footer = (): JSX.Element => {
	const listOfSocial = [
		{
			path: "https://github.com/AntonioLourencos",
			name: "github",
		},
		{
			path: "https://www.linkedin.com/in/antoniolourencos/",
			name: "linkedin",
		},
	];

	return (
		<Styles.Container>
			<span>Developed by Antonio Lourencos</span>
			<div>
				{listOfSocial.map((Social, key) => {
					return (
						<Icon
							key={key}
							name={Social.name}
							to={{
								path: Social.path,
								target: "_blank",
							}}
						/>
					);
				})}
			</div>
		</Styles.Container>
	);
};

export default Footer;
