import React from "react";
import * as Styles from "../styles/pages/signin";
import NewUser from "../assets/NewUser.svg";
import signUpValidation from "../validation/signup";
import Input from "~/styles/utils/Input";
import Button from "~/components/button";
import { Formik, Form } from "formik";
import type ISignUp from "../interfaces/services/signUp";

const SignIn: React.FC = () => {
	const initialValues: ISignUp = {
		nickname: "",
		email: "",
		password: "",
	};

	return (
		<Styles.Container>
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
							<label htmlFor="nickname">Nickname:</label>
							<Input name="nickname" type="text" />
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
			</Styles.RightSide>
			<Styles.LeftSide>
				<img src={NewUser} alt="" loading="lazy" />
			</Styles.LeftSide>
		</Styles.Container>
	);
};

export default SignIn;
