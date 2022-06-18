import { useMemo, useState, useCallback } from 'react';
import PropTypes from 'prop-types';

import AppContext from './AppContext';
import candidatesList from './data';

import confirmVoteAudio from '../../audios/confirm.mp3';
import clickButtonAudio from '../../audios/click.mp3';

export default function AppProvider({ children }) {
	const [ candidateNumber, setCandidateNumber ] = useState('');
	const [ isLoadingVote, setIsLoadingVote ] = useState(false);
	const [ candidates ] = useState(candidatesList);

	const handleClickNumber = useCallback((e) => {
		if (candidateNumber.length >= 2) return;
		const number = e.target.value;
		setCandidateNumber((last) => `${last}${number}`);

		const audio = new Audio(clickButtonAudio);
		audio.play();
	}, [candidateNumber]);

	const toConfirmVote = useCallback(() => {
		if (candidateNumber.length < 2) {
			alert('Por favor, digite um número de candidato completo');
			return;
		}

		setIsLoadingVote(true);

		const audio = new Audio(confirmVoteAudio);
		audio.play();

		setTimeout(() => {
			setIsLoadingVote(false);
			setCandidateNumber('');
		}, 3000);
	}, [candidateNumber]);

	const toCorrectVote = useCallback(() => {
		setCandidateNumber('');
	}, []);

	const memoizedContext = useMemo(
		() => (
			{
				candidates, candidateNumber, handleClickNumber, toConfirmVote, toCorrectVote,
				isLoadingVote,
			}
		),
			[
				candidateNumber, isLoadingVote,
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
