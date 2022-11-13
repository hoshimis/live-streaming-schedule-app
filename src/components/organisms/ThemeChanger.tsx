import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { Box, Switch, useColorMode } from '@chakra-ui/react'

const ThemeChanger = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const isDark = colorMode === 'dark'
  return (
    <Box>
      <Switch
        size="lg"
        colorScheme="teal"
        isChecked={isDark}
        onChange={() => {
          toggleColorMode()
        }}
      ></Switch>
      {colorMode === 'light' ? (
        <SunIcon ml={5} boxSize={6} />
      ) : (
        <MoonIcon ml={5} boxSize={6} />
      )}
    </Box>
  )
}

export default ThemeChanger
