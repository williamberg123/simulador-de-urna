import PropTypes from 'prop-types';
import { useContext } from 'react';
import AppContext from '../../contexts/AppProvider/AppContext';

import StyledCandidateInfo from './styles';

export default function CandidateInfo({ candidate }) {
	const { candidateNumber } = useContext(AppContext);
	const { name, partido, number } = candidate;

	return (
		<StyledCandidateInfo>
			<h1>
				Seu voto para <br />
				presidente
			</h1>
			<p>Número: <span className="candidate-number">{number || candidateNumber || '--'}</span></p>
			<p>Nome: {name || '---- -----'}</p>
			<p>Partido: {partido || '---'}</p>
		</StyledCandidateInfo>
	);
}

CandidateInfo.propTypes = {
	candidate: PropTypes.shape({
		name: PropTypes.string,
		partido: PropTypes.string,
		number: PropTypes.string,
	}),
};
