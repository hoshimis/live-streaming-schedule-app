import {
  Box,
  Flex,
  Heading,
  Link,
  Spacer,
  useDisclosure
} from '@chakra-ui/react'
import { memo, useCallback, FC } from 'react'
import { useNavigate } from 'react-router-dom'

import { MenuIconButton } from '../../atoms/button/MenuIconButton'
import { MenuDrawer } from '../../molecules/MenuDrawer'

/**
 * @author [hoshimi](https://github.com/hoshimis)
 * @param isOpen ドロワーが開いているか
 * @param onOpen ドロワーを開く
 * @param onClose ドロワーを閉じる
 */

export const Header: FC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const navigate = useNavigate()

  const onClickHome = useCallback(() => {
    navigate('/')
  }, [navigate])
  const onClickChannels = useCallback(() => {
    navigate('/channels')
  }, [navigate])
  const onClickSettings = useCallback(() => {
    navigate('/settings')
  }, [navigate])

  return (
    <>
      <Flex
        as="nav"
        bg="teal.500"
        color="gray.50"
        align="center"
        justify="space-between"
        boxShadow="lg"
        padding={{ base: 3, md: 7 }}
      >
        <Flex
          align="center"
          as="a"
          mr={8}
          _hover={{ cursor: 'pointer' }}
          onClick={onClickHome}
        >
          <Heading as="h1" fontSize={{ base: 'xl', md: '3xl' }}>
            Live Schedule!
          </Heading>
        </Flex>
        <Spacer />
        <Box>
          <Flex
            align="right"
            fontSize="md"
            flexGrow={2}
            display={{ base: 'none', md: 'flex' }}
          >
            <Box pr={4}>
              <Link onClick={onClickHome}>配信スケジュール</Link>
            </Box>
            <Box pr={4}>
              <Link onClick={onClickChannels}>登録チャンネル</Link>
            </Box>
            <Box pr={4}>
              <Link onClick={onClickSettings}>設定</Link>
            </Box>
            <Box pr={4}>
              <Link onClick={onClickSettings}>ログアウト</Link>
            </Box>
          </Flex>
        </Box>
        <MenuIconButton onOpen={onOpen} />
      </Flex>
      <MenuDrawer
        isOpen={isOpen}
        onClose={onClose}
        onClickHome={onClickHome}
        onClickSettings={onClickSettings}
        onClickChannels={onClickChannels}
      />
    </>
  )
})
