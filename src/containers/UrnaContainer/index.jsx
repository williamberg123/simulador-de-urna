import UrnaVisor from '../../components/UrnaVisor';
import ButtonsContainer from '../ButtonsContainer';

import StyledUrna from './styles';

export default function Urna() {
	return (
		<StyledUrna>
			<UrnaVisor />
			<ButtonsContainer />
		</StyledUrna>
	);
}
