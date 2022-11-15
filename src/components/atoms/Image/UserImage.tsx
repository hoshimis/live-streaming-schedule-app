import { Avatar } from '@chakra-ui/react'
import { memo, FC } from 'react'

type Props = {
  userImage: string
  IconSize: object
}

/**
 * @author [hoshimi](https://github.com/hoshimis)
 */

const UserImage: FC<Props> = memo((props) => {
  const { userImage, IconSize } = props
  return <Avatar src={userImage} boxSize={IconSize} name="icon" mt="10px" />
})

export default UserImage
