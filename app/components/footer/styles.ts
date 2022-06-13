import styled from "styled-components";

export const Container = styled.footer`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	margin-top: 50px;

	div:last-child {
		display: flex;
		align-items: center;
		justify-content: center;
		margin-top: 7px;

		* {
			margin: 0px 5px;
		}
	}
`;
