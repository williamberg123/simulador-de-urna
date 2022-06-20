import styled from 'styled-components';

const StyledUrna = styled.div`
	width: 800px;
	aspect-ratio: 16/9;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-gap: 20px;
	padding: 20px;
	background-color: white;
	margin: 50px auto;
	border-radius: 5px;
	border: 1px solid #333;
	box-shadow: 20px -20px #222;

	@media (max-width: 801px) {
		& {
			height: calc(100vh - 45px);
			grid-template-columns: repeat(1, 1fr);
			grid-template-rows: repeat(2, 1fr);
			width: 100%;
			box-shadow: none;
			margin: 0 auto;
		}
	}
`;
export default StyledUrna;
