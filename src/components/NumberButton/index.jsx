import PropTypes from 'prop-types';
import { useContext } from 'react';
import AppContext from '../../contexts/AppProvider/AppContext';

import StyledNumberButton from './styles';

export default function NumberButton({ number }) {
	const { handleClickNumber, isDisabled } = useContext(AppContext);

	return (
		<StyledNumberButton disabled={isDisabled} value={number} onClick={handleClickNumber}>
			{number}
		</StyledNumberButton>
	);
}

NumberButton.propTypes = {
	number: PropTypes.number.isRequired,
};
