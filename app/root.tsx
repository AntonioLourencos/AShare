/* eslint-disable react-hooks/exhaustive-deps */
import {
	json,
	type LinksFunction,
	type LoaderFunction,
	type MetaFunction,
} from "@remix-run/node";
import {
	Links,
	LiveReload,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
	useLoaderData,
} from "@remix-run/react";
import GlobalStyles from "./styles/global";
import Header from "./components/header";
import Footer from "./components/footer";
import { ToastContainer } from "react-toastify";
import Modal from "react-modal";
import { useEffect } from "react";

Modal.setAppElement("body");

export const links: LinksFunction = () => {
	return [
		{ rel: "preconnect", href: "https://fonts.googleapis.com" },
		{ rel: "preconnect", href: "https://fonts.gstatic.com" },
		{
			rel: "stylesheet",
			href: "https://fonts.googleapis.com/css2?family=Work+Sans&display=swap",
		},
		{
			rel: "stylesheet",
			href: "https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css",
		},
		{
			rel: "stylesheet",
			href: "https://cdn.jsdelivr.net/npm/react-toastify@9.0.4/dist/ReactToastify.css",
		},
	];
};

export const meta: MetaFunction = () => ({
	charset: "utf-8",
	title: "AShare",
	viewport: "width=device-width,initial-scale=1",
});

export const loader: LoaderFunction = async () => {
	return json({
		ENV: {
			SERVICE_INTERNAL_BASEURL: process.env.SERVICE_INTERNAL_BASEURL,
		},
	});
};

export default function App() {
	const data = useLoaderData();

	useEffect(() => {
		window.env = data.ENV;
	}, []);

	return (
		<html lang="en">
			<head>
				<title>AShare</title>
				<Meta />
				<Links />
				{typeof document === "undefined" ? "__STYLES__" : null}
			</head>
			<body>
				<GlobalStyles />
				<Header />
				<Outlet />
				<ScrollRestoration />
				<Footer />
				<ToastContainer
					position="top-left"
					autoClose={3000}
					newestOnTop={true}
					closeOnClick={true}
					limit={3}
					pauseOnHover={false}
					pauseOnFocusLoss={false}
				/>
				<Scripts />
				<LiveReload />
			</body>
		</html>
	);
}
