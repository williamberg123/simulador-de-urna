import PropTypes from 'prop-types';

export default function RenderIf({ children, isTrue }) {
	return isTrue ? children : null;
}

RenderIf.propTypes = {
	children: PropTypes.node.isRequired,
	isTrue: PropTypes.bool.isRequired,
};
