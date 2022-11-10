import { HamburgerIcon } from '@chakra-ui/icons'
import { IconButton } from '@chakra-ui/react'
import { memo, FC } from 'react'

type Props = {
  onOpen: () => void
}

/**
 * @author [hoshimi](https://github.com/hoshimis)
 * @params onOpen メニューを開くかを管理する
 */

export const MenuIconButton: FC<Props> = memo((props) => {
  const { onOpen } = props
  return (
    <IconButton
      aria-label="メニューボタン"
      icon={<HamburgerIcon />}
      size="lg"
      variant="unstyled"
      display={{ base: 'block', md: 'none' }}
      onClick={onOpen}
    />
  )
})
