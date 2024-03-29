import { Card, CardBody, HStack, Heading, Image } from '@chakra-ui/react'
import { Game } from '../hooks/useGames'
import getCroppedImgUrl from '../services/image-url'
import CriticScore from './CriticScore'
import Emoji from './Emoji'
import PlatformIconsList from './PlatformIconsList'

interface Props {
	game: Game
}

const GameCard = ({ game }: Props) => {
	return (
		<Card>
			<Image src={getCroppedImgUrl(game.background_image)} />
			<CardBody>
				<HStack marginBottom={3} justifyContent='space-between'>
					<PlatformIconsList
						platforms={game.parent_platforms.map(p => p.platform)}
					/>
					<CriticScore score={game.metacritic} />
				</HStack>
				<Heading fontSize='2xl'>
					{game.name}
					<Emoji rating={game.rating_top} />
				</Heading>
			</CardBody>
		</Card>
	)
}

export default GameCard
