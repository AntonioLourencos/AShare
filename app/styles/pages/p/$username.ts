import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 50px 100px;
	min-height: 63vh;

	@media (max-width: 900px) {
		margin: 0px;
	}

	span {
		margin-top: 20px;
	}
`;

export const Buttons = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	margin-top: 30px;
`;

export const Socials = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;

	margin-top: 30px;

	i {
		margin: 0px 6px;
	}
`;
