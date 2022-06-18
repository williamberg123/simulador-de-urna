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
		border-radius: 5px;
	}

	& > img.jtf-image {
		height: 100%;
		border: 1px solid #999;
	}

	& > figure {
		width: 120px;
		aspect-ratio: 1/1;
		margin-top: 20px;
	}

	& > figure > img {
		width: 100%;
		height: inherit;
		border-radius: 10px;
	}
`;
export default StyledUrnaVisor;
