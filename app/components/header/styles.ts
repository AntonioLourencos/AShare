import styled from "styled-components";

export const Container = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;

	padding: 20px 150px;
	width: 100%;
	min-height: 10vh;

	nav {
		display: flex;
		align-items: center;
	}

	img,
	nav a,
	nav button {
		font-size: 18px;
		font-weight: 550;

		transition: ease-in-out 300ms all;
		cursor: pointer;

		:hover {
			transform: scale(1.05);
			transition: ease-in-out 300ms all;
		}
	}

	nav a {
		margin-left: 20px;
	}

	@media (max-width: 900px) {
		padding: 20px;
	}
`;
