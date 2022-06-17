import Urna from '../../containers/UrnaContainer';
import AppProvider from '../../contexts/AppProvider';
import StyledApp from './styles';

export default function App() {
	return (
		<AppProvider>
			<StyledApp>
				<Urna />
			</StyledApp>
		</AppProvider>
	);
}
