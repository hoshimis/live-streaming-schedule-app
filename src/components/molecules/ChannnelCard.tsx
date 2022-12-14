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
      bg={'#EEEEF0'}
      w={{ base: '100%', md: '100%' }}
      h={{ base: '220px', md: '240px' }}
      _hover={{ opacity: 0.8, cursor: 'pointer', transform: 'scale(1.1, 1.1)' }}
    >
      <CardImage cardImage={cardImage} />
      <Flex justifyContent="space-between">
        <CardTitle>{title}</CardTitle>
        <UserImage
          userImage={userImage}
          IconSize={{ base: '60px', md: '70px', lg: '80px' }}
        />
      </Flex>
    </Box>
  )
})

export default ChannelCard
