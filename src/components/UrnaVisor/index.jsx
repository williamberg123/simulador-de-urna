import { useContext } from 'react';

import RenderIf from '../RenderIf';
import Image from '../Image';

import AppContext from '../../contexts/AppProvider/AppContext';
import jtfImage from '../../images/justica-eleitoral.jpeg';

import StyledUrnaVisor from './styles';
import CandidateInfo from '../CandidateInfo';

export default function UrnaVisor() {
	const { candidates, candidateNumber } = useContext(AppContext);
	const candidateVoted = candidates.find(({ number }) => number == candidateNumber);
	console.log(candidateVoted);

	return (
		<StyledUrnaVisor>
			<RenderIf isTrue={ !candidateNumber }>
				<Image className="jtf-image" source={jtfImage} />
			</RenderIf>

			<RenderIf isTrue={ !!candidateNumber }>
				<CandidateInfo candidate={candidateVoted || {}} />
				<RenderIf isTrue={ !!candidateVoted }>
					<figure>
						<Image source={candidateVoted?.imageSource || ''} />
					</figure>
				</RenderIf>
			</RenderIf>
		</StyledUrnaVisor>
	);
}
