import React from "react";
import Button from "@Components/button";
import * as Styles from "@Styles/pages/home";
import PhoneWorld from "@App/assets/PhoneWorld.svg";
import { type MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
	const description = "In Few Clicks Share your midias!";
	return {
		title: "Home - AShare",
		charset: "utf-8",
		keywords:
			"AntonioLourencos, Antonio Lourenço, A Share, AShare, Antonio Share, Divulgar Conta, Clone Linktree, GitHub, RemixJS, Remix, React, SWR",
		description: description,
	};
};

const Home: React.FC = () => {
	return (
		<Styles.Container>
			<Styles.Landing>
				<Styles.RightSide>
					<div>
						<span>Sharing</span>
						<span>Social Media.</span>
					</div>
					<span>
						In a few clicks you set up a page to share all your networks.
					</span>
					<Button ghost to={{ path: "/signup" }}>
						CREATE AN ACCOUNT
					</Button>
				</Styles.RightSide>
				<Styles.LeftSide>
					<img src={PhoneWorld} alt="" loading="lazy" />
				</Styles.LeftSide>
			</Styles.Landing>

			<Styles.BoxInfo id="about">
				<span>About</span>
				<section>
					<p>
						We know that working with the internet is complicated. We were born
						with the goal of helping you to promote your social media.
					</p>
					<p>
						Our goal is that in a few clicks, you can set up a page and place
						your social networks there with a customizable link, thus gaining
						greater visibility on several networks with just one page.
					</p>
				</section>
			</Styles.BoxInfo>

			<Styles.BoxInfo>
				<span>Who Developed The Project?</span>
				<section>
					<p>
						Hello, I'm Antonio Lourenço or AntonioLourencos, I'm a Full Stack
						developer.
					</p>
					<p>
						Initially the project had the goal of helping my aunt to promote her
						social networks, since she works as a freelance saleswoman, so I
						thought that if there was a place where she could share her networks
						in only one place with the option to customize would be ideal and so{" "}
						<b>AShare</b> was born.
					</p>
				</section>
			</Styles.BoxInfo>
		</Styles.Container>
	);
};

export default Home;
