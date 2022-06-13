import optionsSocial from "@App/helpers/socials";
import * as Yup from "yup";

const newSocialValidation = Yup.object().shape({
	name: Yup.string()
		.lowercase()
		.equals(optionsSocial)
		.required("Choose an Icon before"),
	url: Yup.string()
		.url("The value is not an URL")
		.required("The URL is required"),
});

export default newSocialValidation;
