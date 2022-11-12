import { Image } from '@chakra-ui/react'
import { memo, FC } from 'react'

type Props = {
  cardImage: string
}

/**
 * @author [hoshimi](https://github.com/hoshimis)
 */

const CardImage: FC<Props> = memo((props) => {
  const { cardImage } = props
  return (
    <Image
      w="100%"
      h={{ base: '65%', md: '60%' }}
      src={cardImage}
      alt="coverImage"
      borderRadius="15px"
      objectFit="cover"
    />
  )
})

export default CardImage
