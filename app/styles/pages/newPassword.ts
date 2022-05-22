import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	margin: 0px 100px;

	min-height: 70vh;

	span {
		font-size: 48px;
	}

	form {
		display: flex;
		flex-direction: column;

		div {
			display: flex;
			flex-direction: column;
			margin-top: 20px;
		}

		div:last-child {
			display: block;
			button {
				font-size: 24px;
				padding: 10px 25px;
			}
		}
	}
`;
