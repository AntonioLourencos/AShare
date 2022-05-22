import styled, { css } from "styled-components";
import { Field } from "formik";

type IField = typeof Field;
interface IProps extends IField {
	reverseColor?: boolean;
}

const Input = styled<IProps>(Field)`
	font-size: 18px;
	font-weight: 500;
	padding: 5px 10px;
	border: 1.5px solid #ffffff;
	border-radius: 12px;
	outline: none;

	color: #ffffffc9;
	background-color: transparent;

	${({ reverseColor }) =>
		reverseColor &&
		css`
			border-color: #000000;
			color: #000000c9;
		`}
`;

export default Input;
