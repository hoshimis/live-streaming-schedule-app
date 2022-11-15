import { Box, Divider, Flex, Text } from '@chakra-ui/react'
import { memo } from 'react'
import StreamCard from './StreamCard'

type Props = {
  hour: number
}

const StreamRow = memo((props: Props) => {
  const { hour } = props

  return (
    <>
      <Box>
        <Flex id={String(hour)}>
          <Flex>
            <Text
              fontSize={{ base: 'lg', md: 'lg', lg: 'xl' }}
              p={{ base: 2, md: 4 }}
              mr={{ base: 5, md: 10 }}
              h="80px"
            >
              {hour}
            </Text>
            <Divider orientation="vertical" />
          </Flex>

          {/* TODO: 取得した配信情報をStreamCardに渡す */}
          <Flex
            overflowY="auto"
            sx={{
              '&::-webkit-scrollbar': {
                width: '4px'
              },
              '&::-webkit-scrollbar-track': {
                width: '6px'
              },
              '&::-webkit-scrollbar-thumb': {
                borderRadius: '24px'
              }
            }}
          >
            <Box ml={{ base: 2, md: 3 }} p={{ base: 2, md: 4 }}>
              <StreamCard
                cardImage="https://source.unsplash.com/random"
                userImage="https://source.unsplash.com/random"
                title="sample"
              />
            </Box>
          </Flex>
        </Flex>
        <Divider />
      </Box>
    </>
  )
})

export default StreamRow
