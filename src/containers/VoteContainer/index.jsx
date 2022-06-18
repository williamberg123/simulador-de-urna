import { useContext } from 'react';
import VoteButton from '../../components/VoteButton';
import StyledVoteContainer from './styles';

import AppContext from '../../contexts/AppProvider/AppContext';

export default function VoteContainer() {
	const { toConfirmVote, toCorrectVote } = useContext(AppContext);

	return (
		<StyledVoteContainer>
			<VoteButton buttonColor="white">Branco</VoteButton>
			<VoteButton funcClick={toCorrectVote} buttonColor="darkorange">Corrigir</VoteButton>
			<VoteButton funcClick={toConfirmVote} buttonColor="green">Confirmar</VoteButton>
		</StyledVoteContainer>
	);
}
