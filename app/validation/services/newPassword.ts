import * as Yup from "yup";

const newPasswordValidation = Yup.object().shape({
	password: Yup.string()
		.min(8, "Too Short!")
		.max(48, "Too Long!")
		.required("Please"),
});

export default newPasswordValidation;
