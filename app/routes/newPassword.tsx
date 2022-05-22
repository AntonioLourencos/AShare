import React from "react";
import * as Styles from "../styles/pages/newPassword";
import Input from "~/styles/utils/input";
import Button from "~/components/button";
import { Formik, Form } from "formik";
import type IPassword from "~/interfaces/services/request/newPassword";
import newPasswordValidation from "~/validation/services/newPassword";
import { useSearchParams } from "@remix-run/react";

const NewPassword: React.FC = () => {
	const [searchParams] = useSearchParams();
	const token = searchParams.get("token");
	const initialValues: IPassword = {
		password: "",
	};

	if (token === null) {
		return (
			<Styles.Container>
				<h1>Token not found</h1>
				<Button to="/">Back</Button>
			</Styles.Container>
		);
	}

	return (
		<Styles.Container>
			<span>New Password</span>
			<Formik
				onSubmit={(e) => console.log(e)}
				initialValues={{ ...initialValues }}
				validationSchema={newPasswordValidation}
			>
				<Form autoComplete="off">
					<div>
						<label htmlFor="password">Password:</label>
						<Input name="password" type="password" reverseColor />
					</div>
					<div>
						<Button ghost reverseColor extend={{ type: "submit" }}>
							Confirm
						</Button>
					</div>
				</Form>
			</Formik>
		</Styles.Container>
	);
};

export default NewPassword;
