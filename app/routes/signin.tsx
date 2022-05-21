import React from "react";
import * as Styles from "../styles/pages/signin";
import NewUser from "../assets/NewUser.svg";
import signUpValidation from "../validation/signup";
import Input from "~/styles/utils/Input";
import Button from "~/components/button";
import { Formik, Form } from "formik";
import Modal from "~/components/modal";
import type ISignIn from "~/interfaces/services/request/signIn";

const SignIn: React.FC = () => {
	const [resetPasswordModal, setResetPasswordModal] =
		React.useState<boolean>(false);

	const handleModal = () => {
		setResetPasswordModal(true);
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
			>
				<p>
					Hey, we are sending you an email with a token so you can change your
					password, so you don't have to worry.
				</p>
			</Modal>

			<Styles.RightSide>
				<span>Are You Ready to Edit?</span>
				<Formik
					onSubmit={(e) => console.log(e)}
					initialValues={{ ...initialValues }}
					validationSchema={signUpValidation}
				>
					<Form autoComplete="off">
						<div>
							<label htmlFor="email">Email:</label>
							<Input name="email" type="email" />
						</div>
						<div>
							<label htmlFor="password">Password:</label>
							<Input name="password" type="password" />
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
