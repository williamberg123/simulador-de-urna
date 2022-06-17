import styled from 'styled-components';

const StyledUrnaVisor = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
	height: 100%;
	background-color: white;
	border-radius: 10px;

	& > img {
		width: 100%;
		height: auto;
		box-shadow: 2px 2px 7px #777;
		border-radius: 5px;
	}

	& > img.jtf-image {
		height: 100%;
	}

	& > figure {
		width: 150px;
		aspect-ratio: 1/1;
	}

	& > figure > img {
		width: 100%;
		height: inherit;
		border-radius: 10px;
	}
`;
export default StyledUrnaVisor;
