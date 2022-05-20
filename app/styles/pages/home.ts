import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	margin: 0px 100px;

	@media (max-width: 900px) {
		margin: 0px;
	}
`;

export const Landing = styled.div`
	display: grid;
	align-items: center;
	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: auto;

	min-height: 95vh;
	border-radius: 36px;
	background-color: #407bff;

	@media (max-width: 900px) {
		display: grid;
		align-items: center;
		grid-template-columns: 1fr;
		grid-template-rows: auto;

		border-radius: 24px;
	}
`;

export const RightSide = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding: 0px 50px;

	span {
		color: #fff;
		font-size: 24px;
		margin-bottom: 20px;
	}

	button {
		font-size: 24px;
		padding: 10px 30px;
	}

	div {
		display: flex;
		flex-direction: column;

		span {
			font-size: 72px;
			font-weight: 500;
			margin: 0px;

			:last-child {
				font-size: 54px;
				margin-bottom: 20px;
			}
		}
	}

	@media (max-width: 900px) {
		display: flex;
		flex-direction: column;
		justify-content: center;
		grid-row: 2;

		button {
			font-size: 24px;
			padding: 5px 20px;
		}

		div {
			display: flex;
			flex-direction: column;

			span {
				font-size: 62px;
				font-weight: 500;
				margin: 0px;

				:last-child {
					font-size: 44px;
					margin-bottom: 20px;
				}
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
		width: 80%;
		user-select: none;
	}

	@media (max-width: 900px) {
		display: flex;
		justify-content: center;
		grid-row: 1;

		img {
			width: 100%;
		}
	}
`;

export const BoxInfo = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 100px;

	span {
		font-size: 54px;
		font-weight: 500;
	}

	section {
		text-align: justify;
		p {
			font-size: 20px;
			color: rgba(0, 0, 0, 0.85);

			b {
				color: #407bff;
			}
		}
	}

	@media (max-width: 900px) {
		margin: 100px 50px 0px 50px;

		span {
			font-size: 38px;
		}
	}
`;
