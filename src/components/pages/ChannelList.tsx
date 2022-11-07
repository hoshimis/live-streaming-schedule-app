import { Box, Text, Center } from '@chakra-ui/react'
export const ChannelList = () => {
  return (
    <>
      <Box>
        <Box height="100vh">
          <Center as="h1" height="100%">
            <Text
              as="b"
              color={'black'}
              fontSize={{ base: '4xl', md: '4xl' }}
              textAlign="center"
              letterSpacing={5}
            >
              ChannelList
            </Text>
          </Center>
        </Box>
      </Box>
    </>
  )
}
