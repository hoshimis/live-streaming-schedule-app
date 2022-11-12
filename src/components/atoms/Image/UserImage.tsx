import { Avatar } from '@chakra-ui/react'
import { memo, FC } from 'react'

type Props = {
  userImage: string
}

/**
 * @author [hoshimi](https://github.com/hoshimis)
 */

const UserImage: FC<Props> = memo((props) => {
  const { userImage } = props
  return (
    <Avatar
      src={userImage}
      boxSize={{ base: '70px', md: '80px', lg: '90px' }}
      name="icon"
      mt="10px"
    />
  )
})

export default UserImage
