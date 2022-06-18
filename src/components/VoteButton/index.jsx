import PropTypes from 'prop-types';

import StyledVoteButton from './styles';

export default function VoteButton({ children, buttonColor, funcClick, shadowColor }) {
	return (
		<StyledVoteButton onClick={funcClick} buttonColor={buttonColor} shadowColor={shadowColor}>
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
