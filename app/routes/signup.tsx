import React from "react";
import * as Styles from "@Styles/pages/signin";
import NewUser from "@App/assets/NewUser.svg";
import Input from "@Styles/utils/input";
import Button from "@Components/button";
import { Formik, Form, type FormikHelpers } from "formik";
import type ISignUp from "@Types/services/request/signUp";
import signUpValidation from "@Validation/services/signUp";
import { type MetaFunction } from "@remix-run/node";
import Services from "@App/services";
import { useAuth } from "@App/hooks/auth";
import { toast } from "react-toastify";

export const meta: MetaFunction = () => {
	const description = "Are you ready to create your profile and share?";
	return {
		title: "SignUp - AShare",
		charset: "utf-8",
		keywords:
			"AntonioLourencos, Antonio Lourenço, A Share, AShare, Antonio Share, Divulgar Conta, Clone Linktree, GitHub, RemixJS, Remix, React, SWR, Login, SignUp, Registrar, compartilhar",
		description: description,
	};
};
const SignIn: React.FC = () => {
	const { setAuth } = useAuth();

	const handleSubmit = async (
		data: ISignUp,
		formikHelper: FormikHelpers<ISignUp>
	) => {
		try {
			const dataValidated = await signUpValidation.validate(data);
			const response = await Services.Internal.Auth.SignUp(dataValidated);

			setAuth({ data: response });

			return formikHelper.resetForm();
		} catch (error: any) {
			if (error.errors[0]) {
				return toast.error(error.errors[0]);
			}
		}
	};

	const initialValues: ISignUp = {
		nickname: "",
		email: "",
		password: "",
	};

	return (
		<Styles.Container>
			<Styles.RightSide>
				<span>Are You Ready to Create Your Profile?</span>
				<Formik
					onSubmit={async (data, formikHelper) =>
						await handleSubmit(data, formikHelper)
					}
					initialValues={{ ...initialValues }}
				>
					<Form autoComplete="on">
						<div>
							<label htmlFor="email">Email:</label>
							<Input name="email" type="email" autoComplete="on" />
						</div>
						<div>
							<label htmlFor="nickname">Nickname:</label>
							<Input name="nickname" type="text" autoComplete="on" />
						</div>
						<div>
							<label htmlFor="password">Password:</label>
							<Input name="password" type="password" autoComplete="on" />
						</div>
						<div>
							<Button ghost extend={{ type: "submit" }}>
								Confirm
							</Button>
						</div>
					</Form>
				</Formik>
			</Styles.RightSide>
			<Styles.LeftSide>
				<img src={NewUser} alt="" loading="lazy" />
			</Styles.LeftSide>
		</Styles.Container>
	);
};

export default SignIn;
