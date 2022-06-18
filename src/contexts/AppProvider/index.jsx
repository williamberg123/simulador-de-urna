import { useMemo, useState, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';

import AppContext from './AppContext';
import candidatesList from './data';
import emitAudio from '../../utils/emitAudio';

import confirmVoteAudio from '../../audios/confirm.mp3';
import clickButtonAudio from '../../audios/click.mp3';

export default function AppProvider({ children }) {
	const [ candidateNumber, setCandidateNumber ] = useState('');
	const [ isLoadingVote, setIsLoadingVote ] = useState(false);
	const [ voteWasConfirmed, setVoteWasConfirmed ] = useState(false);
	const [ isStartedTheVotation, setIsStartedTheVotation ] = useState(false);
	const [ isVoteBlank, setIsVoteBlank ] = useState(false);
	const [ isNullVote, setIsNullVote ] = useState(false);
	const [ candidates ] = useState(candidatesList);

	useEffect(() => {
		const candidateVoted = candidates.find(({ number }) => number == candidateNumber);

		if (candidateNumber.length === 2 && !candidateVoted) setIsNullVote(true);
	}, [candidateNumber]);

	const handleClickNumber = useCallback((e) => {
		if (candidateNumber.length >= 2) return;
		const number = e.target.value;
		setCandidateNumber((last) => `${last}${number}`);

		emitAudio(clickButtonAudio);

		setVoteWasConfirmed(false);
		setIsStartedTheVotation(true);
	}, [candidateNumber]);

	const toConfirmVote = useCallback(() => {
		if (candidateNumber.length < 2 && !isVoteBlank) {
			alert('Por favor, digite um número de candidato completo');
			return;
		}

		emitAudio(clickButtonAudio);

		setIsLoadingVote(true);
		setIsVoteBlank(false);
		setIsNullVote(false);

		emitAudio(confirmVoteAudio);

		setTimeout(() => {
			setIsLoadingVote(false);
			setCandidateNumber('');
			setVoteWasConfirmed(true);

			setTimeout(() => {
				setIsStartedTheVotation(false);
			}, 2000);
		}, 3000);
	}, [candidateNumber, isVoteBlank]);

	const toCorrectVote = useCallback(() => {
		emitAudio(clickButtonAudio);
		setCandidateNumber('');
		setIsVoteBlank(false);
		setIsNullVote(false);
	}, []);

	const blankVote = useCallback(() => {
		emitAudio(clickButtonAudio);
		setIsVoteBlank(true);
		setIsStartedTheVotation(true);
		setVoteWasConfirmed(false);
		setIsNullVote(false);
	}, []);

	const memoizedContext = useMemo(
		() => (
			{
				candidates, candidateNumber, handleClickNumber, toConfirmVote, toCorrectVote,
				isLoadingVote, isStartedTheVotation, voteWasConfirmed, isVoteBlank, blankVote,
				isNullVote,
			}
		),
			[
				candidateNumber, isLoadingVote, isStartedTheVotation, voteWasConfirmed, isVoteBlank,
				isNullVote,
			],
		);

	return (
		<AppContext.Provider value={memoizedContext}>
			{ children }
		</AppContext.Provider>
	);
}

AppProvider.propTypes = {
	children: PropTypes.node.isRequired,
};
