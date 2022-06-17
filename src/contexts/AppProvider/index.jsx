import { useMemo, useState, useCallback } from 'react';
import PropTypes from 'prop-types';

import AppContext from './AppContext';
import candidatesList from './data';

export default function AppProvider({ children }) {
	const [ candidateNumber, setCandidateNumber ] = useState('');
	const [ candidates ] = useState(candidatesList);

	const handleClickNumber = useCallback((e) => {
		if (candidateNumber.length >= 2) return;
		const number = e.target.value;
		setCandidateNumber((last) => `${last}${number}`);
	}, [candidateNumber]);

	const memoizedContext = useMemo(
		() => (
			{
				candidates, candidateNumber, handleClickNumber,
			}
		),
			[
				candidateNumber,
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
