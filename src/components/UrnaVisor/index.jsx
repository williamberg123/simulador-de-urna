import { useContext } from 'react';

import RenderIf from '../RenderIf';
import Image from '../Image';

import AppContext from '../../contexts/AppProvider/AppContext';
import jtfImage from '../../images/justica-eleitoral.jpeg';

import StyledUrnaVisor from './styles';
import CandidateInfo from '../CandidateInfo';

export default function UrnaVisor() {
	const {
		candidates, candidateNumber, isLoadingVote, isStartedTheVotation,
		voteWasConfirmed, isVoteBlank, isNullVote,
	} = useContext(AppContext);

	const candidateVoted = candidates.find(({ number }) => number == candidateNumber);

	return (
		<StyledUrnaVisor>
			<RenderIf isTrue={ !isStartedTheVotation}>
				<Image className="jtf-image" source={jtfImage} />
			</RenderIf>

			<RenderIf isTrue={ isLoadingVote }>
				Processando voto ...
			</RenderIf>

			<RenderIf isTrue={
				!isLoadingVote && isStartedTheVotation && !voteWasConfirmed && !isVoteBlank
				&& !isNullVote
			}
			>
				<CandidateInfo candidate={candidateVoted || {}} />
				<RenderIf isTrue={ !!candidateVoted }>
					<figure>
						<Image source={candidateVoted?.imageSource || ''} />
					</figure>
				</RenderIf>
			</RenderIf>

			<RenderIf isTrue={ voteWasConfirmed && isStartedTheVotation }>
				<div className="votation-ended">
					<h1>FIM</h1>
				</div>
			</RenderIf>

			<RenderIf isTrue={ isVoteBlank }>
				<div className="votation-ended">
					<h1>VOTO BRANCO</h1>
				</div>
			</RenderIf>

			<RenderIf isTrue={ isNullVote }>
				<div className="votation-ended">
					<h1>VOTO NULO</h1>
				</div>
			</RenderIf>
		</StyledUrnaVisor>
	);
}
