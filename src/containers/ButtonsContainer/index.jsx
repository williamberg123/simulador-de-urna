import NumberButton from '../../components/NumberButton';
import NumbersContainer from '../NumbersContainer';
import StyledButtonsContainer from './styles';

export default function ButtonsContainer() {
	const numberButtons = Array(10).fill('').map((item, index, array) => {
	return index === array.length - 1
	? <NumberButton key={`number-${index}`} number={0} />
	: <NumberButton key={`number-${index}`} number={index + 1} />;
});

	return (
		<StyledButtonsContainer>
			<NumbersContainer>
				{numberButtons}
			</NumbersContainer>
		</StyledButtonsContainer>
	);
}
