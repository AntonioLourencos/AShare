import React from "react";
import * as Styles from "@Styles/pages/signin";
import NewUser from "@App/assets/NewUser.svg";
import Button from "@Components/button";
import Modal from "@Components/modal";
import signInValidation from "@Validation/services/signIn";
import Input from "@Styles/utils/input";
import { Formik, Form, type FormikHelpers } from "formik";
import type ISignIn from "@Types/services/request/signIn";
import { type MetaFunction } from "@remix-run/node";
import Services from "@App/services";
import { useAuth } from "@App/hooks/auth";
import { toast } from "react-toastify";
import SessionAuth from "@App/sessions/auth";

export const meta: MetaFunction = () => {
	const description = "Are you ready to edit your profile and share?";
	return {
		title: "SignIn - AShare",
		charset: "utf-8",
		keywords:
			"AntonioLourencos, Antonio Lourenço, A Share, AShare, Antonio Share, Divulgar Conta, Clone Linktree, GitHub, RemixJS, Remix, React, SWR, Login, SignIn, Logar, compartilhar",
		description: description,
	};
};

const SignIn: React.FC = () => {
	const { setAuth } = useAuth();
	const [resetPasswordModal, setResetPasswordModal] =
		React.useState<boolean>(false);

	const handleModal = () => setResetPasswordModal(!resetPasswordModal);

	const handleConfirmResetPassword = async () => {
		return handleModal();
	};

	const handleSubmit = async (
		data: ISignIn,
		formikHelper: FormikHelpers<ISignIn>
	) => {
		try {
			const dataValidated = await signInValidation.validate(data);
			const response = await Services.Internal.Auth.SignIn(dataValidated);

			setAuth({ data: response });

			return formikHelper.resetForm();
		} catch (error: any) {
			if (error.errors[0]) {
				return toast.error(error.errors[0]);
			}
		}
	};

	const initialValues: ISignIn = {
		email: "",
		password: "",
	};

	return (
		<Styles.Container>
			<Modal
				setShow={setResetPasswordModal}
				show={resetPasswordModal}
				title="Forget Password"
				handles={[
					<Button
						key="confirm"
						reverseColor
						ghost
						action={handleConfirmResetPassword}
					>
						Confirm
					</Button>,
				]}
			>
				<p>
					Hey, we are sending you an email with a token so you can change your
					password, so you don't have to worry.
				</p>
			</Modal>
			<Styles.RightSide>
				<span>Are You Ready to Edit?</span>
				<Formik onSubmit={handleSubmit} initialValues={{ ...initialValues }}>
					<Form autoComplete="on">
						<div>
							<label htmlFor="email">Email:</label>
							<Input name="email" type="email" autoComplete="on" />
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
				<span className="forgotPassword" onClick={handleModal}>
					Forget Password
				</span>
			</Styles.RightSide>
			<Styles.LeftSide>
				<img src={NewUser} alt="" loading="lazy" />
			</Styles.LeftSide>
		</Styles.Container>
	);
};

export default SignIn;
