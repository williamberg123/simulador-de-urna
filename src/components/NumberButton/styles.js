import styled from 'styled-components';

const StyledNumberButton = styled.button`
	padding: 20px;
	border-radius: 5px;
	background-color: #111;
	color: white;
	border: none;
	box-shadow: 5px -5px black;
	border: 1px solid black;
	user-select: none;
	cursor: pointer;
	font-weight: bold;

	&:active {
		box-shadow: none;
		transform: translateX(5px) translateY(-5px);
	}

	@media (max-width: 801px) {
		& {
			background-color: rgb(26, 26, 26);
		}
	}
`;
export default StyledNumberButton;
