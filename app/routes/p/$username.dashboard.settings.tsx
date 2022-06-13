import React from "react";
import { useLoaderData } from "@remix-run/react";
import * as Styles from "@App/styles/pages/p/$username.dashboard.settings";
import Button from "@App/components/button";

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
			<h1>Settings @{data.username}</h1>
			<Button ghost reverseColor>
				Delete Account
			</Button>
		</Styles.Container>
	);
};

export default Settings;
