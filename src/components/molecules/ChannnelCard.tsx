import { Box, Flex } from '@chakra-ui/react'
import { memo, FC } from 'react'
import CardImage from '../atoms/Image/CardImage'
import UserImage from '../atoms/Image/UserImage'
import CardTitle from '../atoms/Text/CardTitle'

type Props = {
  cardImage: string
  userImage: string
  title: string
}

/**
 * @author [hoshimi](https://github.com/hoshimis)
 */

const ChannelCard: FC<Props> = memo((props) => {
  const { cardImage, userImage, title } = props
  return (
    <Box
      p={2}
      shadow="lg"
      borderWidth="1px"
      borderRadius="20px"
      bg={'gray.50'}
      w={{ base: '100%', md: '100%' }}
      h={{ base: '240px', md: '280px' }}
      _hover={{ opacity: 0.8, cursor: 'pointer', transform: 'scale(1.1, 1.1)' }}
    >
      <CardImage cardImage={cardImage} />
      <Flex justifyContent="space-between">
        <CardTitle>{title}</CardTitle>
        <UserImage userImage={userImage} />
      </Flex>
    </Box>
  )
})

export default ChannelCard
