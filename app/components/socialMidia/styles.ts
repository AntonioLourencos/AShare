import type IShowDashboard from "@App/interfaces/helpers/IShowDashboard";
import { Form } from "formik";
import styled from "styled-components";

export const Container = styled.div<IShowDashboard>`
	margin-top: 10px;

	.headerAll {
		display: flex;
		align-items: center;

		cursor: pointer;
	}

	.bodyAll {
		/* height: ${({ show }) => (show ? "10px" : "0px")}; */
	}

	.arrowAll {
		transform: rotate(${({ show }) => (show ? 180 : 0)}deg);
		transition: 300ms;
	}
`;

export const Socials = styled.div<IShowDashboard>`
	margin-top: 10px;

	.headerListAdded {
		display: flex;
		align-items: center;

		cursor: pointer;
	}

	.bodyListAdded {
		/* height: ${({ show }) => (show ? "10px" : "0px")}; */
	}

	.arrowListAdded {
		transform: rotate(${({ showAdded }) => (showAdded ? 180 : 0)}deg);
		transition: 300ms;
	}
`;

export const NewSocial = styled.div`
	display: flex;
	flex-direction: column;

	margin-top: 7px;
`;

export const FormCard = styled(Form)`
	display: flex;
	align-items: center;
	justify-content: space-between;

	border-radius: 7px;
	background-color: #f9f1f1;
	padding: 10px;
	margin: 7px 0px;

	width: 370px;

	box-shadow: 1px 2px 2px rgba(0, 0, 0, 0.25);

	select,
	button {
		border: none;
		outline: none;
		cursor: pointer;
		background-color: transparent;
	}

	option {
		appearance: none;
		padding: 5px;
	}

	div {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	input {
		display: flex;
		flex: 1;
		border: none;
		outline: none;
		background-color: #e8e1e1;
		padding: 10px;
		margin: 0px 7px;
		border-radius: 7px;

		color: #000;
	}
`;

export const Card = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	border-radius: 7px;
	background-color: #f9f1f1;
	padding: 10px;
	margin: 7px 0px;

	width: 370px;

	box-shadow: 1px 2px 2px rgba(0, 0, 0, 0.25);

	button {
		border: none;
		outline: none;
		cursor: pointer;
		background-color: transparent;
	}

	input {
		display: flex;
		flex: 1;

		border: none;
		outline: none;
		background-color: #e8e1e1;
		color: #000;
		padding: 10px;
		margin: 0px 7px;
		border-radius: 7px;
	}
`;
