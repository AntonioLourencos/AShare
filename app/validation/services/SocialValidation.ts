import optionsSocial from "@App/helpers/socials";
import * as Yup from "yup";

const socialValidation = Yup.object().shape({
	id: Yup.string().required("ID NOT FOUND!"),
	name: Yup.string()
		.lowercase()
		.equals(optionsSocial)
		.required("Choose an Icon before"),
	url: Yup.string()
		.url("The value is not an URL")
		.required("The URL is required"),
});

export default socialValidation;
