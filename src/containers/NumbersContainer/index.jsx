import PropTypes from 'prop-types';

import StyledNumbersContainer from './styles';

export default function NumbersContainer({ children }) {
	return (
		<StyledNumbersContainer>
			{ children }
		</StyledNumbersContainer>
	);
}

NumbersContainer.propTypes = {
	children: PropTypes.node.isRequired,
};
