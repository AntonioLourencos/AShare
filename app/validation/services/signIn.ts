import * as Yup from "yup";

const signInValidation = Yup.object().shape({
	email: Yup.string()
		.email("Invalid email")
		.lowercase()
		.required("Email is required"),
	password: Yup.string()
		.min(8, "Password too short")
		.max(48, "Password  too long!")
		.required("Password is required"),
});

export default signInValidation;
