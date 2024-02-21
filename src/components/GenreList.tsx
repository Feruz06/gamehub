import {
	Button,
	HStack,
	Image,
	List,
	ListItem,
	Spinner,
} from '@chakra-ui/react'
import useGenres, { Genre } from '../hooks/useGenres'
import getCroppedImgUrl from '../services/image-url'

interface Props {
	onSelectGenre: (genre: Genre) => void
}

const GenreList = ({ onSelectGenre }: Props) => {
	const { isLoading, data } = useGenres()

	if (isLoading) return <Spinner color='green.500' size='md' />
	return (
		<List>
			{data.map(genre => (
				<ListItem paddingY={'5px'} key={genre.id}>
					<HStack>
						<Image
							boxSize={'32px'}
							borderRadius={8}
							src={getCroppedImgUrl(genre.image_background)}
						/>
						<Button
							onClick={() => onSelectGenre(genre)}
							fontSize='lg'
							variant='link'
						>
							{genre.name}
						</Button>
					</HStack>
				</ListItem>
			))}
		</List>
	)
}

export default GenreList
