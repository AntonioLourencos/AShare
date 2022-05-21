import styled, { css } from "styled-components";

export const Container = styled.button<any>`
	background-color: #407bff;
	color: #ffffff;
	padding: 5px 10px;
	border-radius: 12px;
	font-size: 18px;
	transition: ease-in-out 300ms all;

	cursor: pointer;
	border: none;
	outline: none;

	:hover {
		transform: scale(1.05);
		transition: ease-in-out 300ms all;
	}

	${({ ghost }) =>
		ghost &&
		css`
			border: 1.5px solid #ffffff;
			background-color: transparent;
		`}

	${({ reverseColor }) =>
		reverseColor &&
		css`
			border-color: #000000;
			color: #000000;
		`}
`;
