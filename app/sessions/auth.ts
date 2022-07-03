import { createCookieSessionStorage } from "@remix-run/node";

const SessionAuth = createCookieSessionStorage({
	cookie: {
		name: "@AuthAShare",
		secrets: ["secret_cool"],
		sameSite: "lax",
	},
});

export default SessionAuth;
