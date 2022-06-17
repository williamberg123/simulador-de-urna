import styled from 'styled-components';

const StyledCandidateInfo = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;

	& p {
		display: flex;
		align-items: center;
	}

	& span.candidate-number {
		font-size: 3rem;
		margin-left: 10px;
	}
`;
export default StyledCandidateInfo;
