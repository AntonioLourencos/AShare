import * as Yup from "yup";

const signUpValidation = Yup.object().shape({
	nickname: Yup.string()
		.min(3, "Too Short!")
		.max(36, "Too Long!")
		.required("Please"),
	email: Yup.string().email("Invalid email").lowercase().required("Required"),
	password: Yup.string()
		.min(8, "Too Short!")
		.max(48, "Too Long!")
		.required("Please"),
});

export default signUpValidation;
