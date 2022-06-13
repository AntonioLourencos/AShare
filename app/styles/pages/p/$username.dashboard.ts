import styled from "styled-components";

export const Container = styled.div`
	display: grid;
	align-items: center;
	grid-template-columns: 49.5% 1px 49.5%;
	grid-template-rows: auto;

	margin: 50px 100px;
	min-height: 63vh;

	@media (max-width: 900px) {
		display: grid;
		align-items: center;
		grid-template-columns: 1fr;
		grid-template-rows: auto;

		margin: 0px;
	}
`;

export const Line = styled.div`
	width: 1px;
	height: 100%;

	background-color: #000000;
	border-radius: 2px;

	@media (max-width: 900px) {
		display: none;
	}
`;

export const RightSide = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;

	height: 100%;
`;

export const LeftSide = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	height: 100%;

	img {
		width: 80%;
	}

	@media (max-width: 900px) {
		display: none;
	}
`;
