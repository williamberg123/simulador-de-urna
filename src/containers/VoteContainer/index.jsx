import { useContext } from 'react';
import VoteButton from '../../components/VoteButton';
import StyledVoteContainer from './styles';

import AppContext from '../../contexts/AppProvider/AppContext';

export default function VoteContainer() {
	const { toConfirmVote, toCorrectVote, blankVote } = useContext(AppContext);

	return (
		<StyledVoteContainer>
			<VoteButton funcClick={blankVote} buttonColor="white" shadowColor="rgb(216, 216, 216)">Branco</VoteButton>
			<VoteButton funcClick={toCorrectVote} buttonColor="darkorange" shadowColor="rgb(221, 122, 0)">Corrige</VoteButton>
			<VoteButton funcClick={toConfirmVote} buttonColor="green" shadowColor="darkgreen">Confirma</VoteButton>
		</StyledVoteContainer>
	);
}
