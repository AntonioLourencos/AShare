import * as Yup from "yup";

const signInValidation = Yup.object().shape({
	email: Yup.string().email("Invalid email").lowercase().required("Required"),
	password: Yup.string()
		.min(8, "Too Short!")
		.max(48, "Too Long!")
		.required("Please"),
});

export default signInValidation;
