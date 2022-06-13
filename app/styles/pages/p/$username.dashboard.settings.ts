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
`;
