import styled from "styled-components";

export const Container = styled.div`
	display: grid;
	align-items: center;
	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: auto;
	margin: 0px 100px;

	min-height: 95vh;
	border-radius: 36px;
	background-color: #407bff;

	@media (max-width: 900px) {
		display: grid;
		align-items: center;
		grid-template-columns: 1fr;
		grid-template-rows: auto;

		border-radius: 24px;
		margin: 0px;
	}
`;

export const RightSide = styled.div`
	color: #fff;
	padding: 0px 50px;

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

export const LeftSide = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	padding: 0px 50px;

	img {
		width: 90%;
		user-select: none;
	}

	@media (max-width: 900px) {
		display: none;
	}
`;
