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

const StreamCard: FC<Props> = memo((props) => {
  const { cardImage, userImage, title } = props
  return (
    <Box
      p={2}
      shadow="lg"
      borderWidth="1px"
      borderRadius="20px"
      bg={'#EEEEF0'}
      w={{ base: '100%', md: '250px' }}
      h={{ base: '190px', md: '190px' }}
      _hover={{ opacity: 0.8, cursor: 'pointer', transform: 'scale(1.1, 1.1)' }}
    >
      {/* UserImage boxsize -> lg: 65px */}
      <CardImage cardImage={cardImage} />
      <Flex justifyContent="space-between">
        <CardTitle>{title}</CardTitle>
        <UserImage
          userImage={userImage}
          IconSize={{ base: '50px', md: '60px', lg: '65px' }}
        />
      </Flex>
    </Box>
  )
})

export default StreamCard
