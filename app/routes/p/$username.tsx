import React from "react";
import { useLoaderData } from "@remix-run/react";
import * as Styles from "@App/styles/pages/p/$username";
import Icon from "@App/components/Icon";
import CardPreview from "@App/components/cardPreview";

export function loader({ params }: { params: { username: string } }) {
	const { username } = params;
	return {
		username,
		description: "Sou desenvolvedor de software",
		buttons: [
			{
				name: "portifolio design",
				path: "https://github.com/antoniolourencos",
			},
		],
		socials: [
			{
				name: "facebook",
				path: "https://github.com/antoniolourencos",
			},
			{
				name: "instagram",
				path: "https://github.com/antoniolourencos",
			},
		],
	};
}

const PublicProfile = () => {
	const data = useLoaderData();

	return (
		<Styles.Container>
			<h1>@{data.username}</h1>
			<span>{data.description}</span>
			<Styles.Buttons>
				{data.buttons.map((social: any, key: number) => {
					return <CardPreview name={social.name} to={social.path} key={key} />;
				})}
			</Styles.Buttons>
			<Styles.Socials>
				{data.socials.map((social: any, key: number) => {
					return (
						<Icon
							name={social.name}
							to={{
								path: social.path,
								target: "_blank",
							}}
							key={key}
						/>
					);
				})}
			</Styles.Socials>
		</Styles.Container>
	);
};

export default PublicProfile;
