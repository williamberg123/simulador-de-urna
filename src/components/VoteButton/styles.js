import styled from 'styled-components';

const StyledVoteButton = styled.button`
	padding: 20px;
	background-color: ${({ buttonColor }) => buttonColor};
	border: 1px solid #222;
	box-shadow: 5px -5px ${({ buttonColor }) => buttonColor};
	margin-top: 20px;
	border-radius: 5px;
	font-weight: bold;
	text-transform: uppercase;
	user-select: none;
	cursor: pointer;

	&:active {
		box-shadow: none;
		transform: translateX(5px) translateY(-5px);
	}
`;

export default StyledVoteButton;
