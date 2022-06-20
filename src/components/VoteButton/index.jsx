import { useContext } from 'react';
import PropTypes from 'prop-types';
import AppContext from '../../contexts/AppProvider/AppContext';

import StyledVoteButton from './styles';

export default function VoteButton({ children, buttonColor, funcClick, shadowColor }) {
	const { isDisabled } = useContext(AppContext);

	return (
		<StyledVoteButton
			disabled={isDisabled}
			onClick={funcClick}
			buttonColor={buttonColor}
			shadowColor={shadowColor}
		>
			{children}
		</StyledVoteButton>
	);
}

VoteButton.propTypes = {
	children: PropTypes.node.isRequired,
	buttonColor: PropTypes.string.isRequired,
	funcClick: PropTypes.func,
	shadowColor: PropTypes.string.isRequired,
};
