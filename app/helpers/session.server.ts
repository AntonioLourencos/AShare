import { createCookieSessionStorage, redirect } from "@remix-run/node";

const storage = createCookieSessionStorage({
	cookie: {
		name: "@AshareAuth",
	},
});

export function getUserSession(request: Request) {
	return storage.getSession(request.headers.get("Cookie"));
}

export async function createUserSession(userId: string, redirectTo: string) {
	const session = await storage.getSession();
	session.set("userId", userId);
	return redirect(redirectTo, {
		headers: {
			"Set-Cookie": await storage.commitSession(session),
		},
	});
}
