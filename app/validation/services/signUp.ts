import * as Yup from "yup";

const signUpValidation = Yup.object().shape({
	nickname: Yup.string()
		.min(3, "Nickname too short!")
		.max(36, "Nickname too long!")
		.required("Nickname is required"),
	email: Yup.string()
		.email("Invalid email")
		.lowercase()
		.required("Email is required"),
	password: Yup.string()
		.min(8, "Password too short")
		.max(48, "Password  too long!")
		.required("Password is required"),
});

export default signUpValidation;
