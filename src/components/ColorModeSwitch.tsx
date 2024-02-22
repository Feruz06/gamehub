import { HStack, Switch, Text, useColorMode } from '@chakra-ui/react'

const ColorModeSwitch = () => {
	const { toggleColorMode, colorMode } = useColorMode()
	return (
		<HStack padding='10px'>
			<Switch
				isChecked={colorMode === 'dark'}
				onChange={toggleColorMode}
				colorScheme='green'
			/>
			<Text whiteSpace='nowrap'>
				{colorMode === 'dark' ? 'Dark Mode' : 'Light Mode'}
			</Text>
		</HStack>
	)
}

export default ColorModeSwitch
