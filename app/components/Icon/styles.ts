import styled, { css } from "styled-components";

export const Container = styled.i`
	font-size: 24px;
	user-select: none;

	${({ onClick }) =>
		onClick &&
		css`
			cursor: pointer;
		`}
`;
