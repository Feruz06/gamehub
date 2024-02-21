import { HStack, Image, List, ListItem, Spinner, Text } from '@chakra-ui/react'
import useGenres from '../hooks/useGenres'
import getCroppedImgUrl from '../services/image-url'

const GenreList = () => {
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
						<Text fontSize='lg'>{genre.name}</Text>
					</HStack>
				</ListItem>
			))}
		</List>
	)
}

export default GenreList
