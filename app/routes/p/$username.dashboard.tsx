import React from "react";
import { useLoaderData } from "@remix-run/react";
import * as Styles from "@App/styles/pages/p/$username.dashboard";
import Working from "@App/assets/Working.svg";
import SocialMidia from "@App/components/socialMidia";

export function loader({ params }: { params: { username: string } }) {
	const { username } = params;
	return {
		username,
	};
}

const Settings = () => {
	const data = useLoaderData();

	return (
		<Styles.Container>
			<Styles.RightSide>
				<h1>Welcome, @{data.username}</h1>
				<SocialMidia />
			</Styles.RightSide>
			<Styles.Line />
			<Styles.LeftSide>
				<img src={Working} alt="" loading="lazy" />
			</Styles.LeftSide>
		</Styles.Container>
	);
};

export default Settings;
