import { Box, Text, Center } from '@chakra-ui/react'

const ScheduleList = () => {
  return (
    <>
      <Box>
        <Box height="100vh">
          <Center as="h1" height="100%">
            <Text
              as="b"
              fontSize={{ base: '4xl', md: '4xl' }}
              textAlign="center"
              letterSpacing={5}
            >
              ScheduleList
            </Text>
          </Center>
        </Box>
      </Box>
    </>
  )
}

export default ScheduleList
