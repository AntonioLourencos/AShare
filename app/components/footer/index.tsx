import * as Styles from "./styles";
import { Github, Linkedin } from "react-bootstrap-icons";

const Footer = (): JSX.Element => {
	const listOfSocial = [
		{
			props: {
				href: "https://github.com/AntonioLourencos",
			},
			Icon: Github,
		},
		{
			props: {
				href: "https://www.linkedin.com/in/antoniolourencos/",
			},
			Icon: Linkedin,
		},
	];

	return (
		<Styles.Container>
			<span>Developed by Antonio Lourencos</span>
			<div>
				{listOfSocial.map((Social, index) => {
					return (
						<a key={index} {...Social.props} target="_blank">
							<Social.Icon size={24} />
						</a>
					);
				})}
			</div>
		</Styles.Container>
	);
};

export default Footer;
