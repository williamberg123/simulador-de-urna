import { useContext } from 'react';
import AppContext from '../../contexts/AppProvider/AppContext';
import StyledCandidateNumber from './styles';

export default function CandidateNumber() {
	const { candidateNumber } = useContext(AppContext);

	return (
		<StyledCandidateNumber>{candidateNumber}</StyledCandidateNumber>
	);
}
