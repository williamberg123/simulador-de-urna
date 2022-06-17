import PropTypes from 'prop-types';

export default function Image({ source = '', className = '' }) {
	return (
		<img className={className} src={source} alt="img" />
	);
}

Image.propTypes = {
	source: PropTypes.string.isRequired,
	className: PropTypes.string,
};
