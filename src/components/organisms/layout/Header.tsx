import { CalendarIcon, SettingsIcon, TimeIcon } from '@chakra-ui/icons'
import {
  Box,
  Flex,
  Heading,
  Link,
  Spacer,
  useDisclosure
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { memo, useCallback, FC } from 'react'

import { MenuIconButton } from '../../atoms/Button/MenuIconButton'
import { MenuDrawer } from '../../molecules/MenuDrawer'

/**
 * @author [hoshimi](https://github.com/hoshimis)
 * @param isOpen ドロワーが開いているか
 * @param onOpen ドロワーを開く
 * @param onClose ドロワーを閉じる
 */

export const Header: FC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const router = useRouter()

  const onClickHome = useCallback(() => {
    router.push('/ScheduleList')
    onClose()
  }, [router, onClose])
  const onClickChannels = useCallback(() => {
    router.push('/ChannelList')
    onClose()
  }, [router, onClose])
  const onClickSettings = useCallback(() => {
    router.push('/Settings')
    onClose()
  }, [router, onClose])

  return (
    <>
      <Flex
        as="nav"
        bg="teal.500"
        color="gray.50"
        align="center"
        justify="space-between"
        boxShadow="lg"
        padding={{ base: 5, md: 7 }}
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
              <Link onClick={onClickHome}>
                <TimeIcon mr={2} boxSize={5} />
                配信スケジュール
              </Link>
            </Box>
            <Box pr={4}>
              <Link onClick={onClickChannels}>
                <CalendarIcon mr={2} boxSize={5} />
                登録チャンネル
              </Link>
            </Box>
            <Box pr={4}>
              <Link onClick={onClickSettings}>
                <SettingsIcon mr={2} boxSize={5} />
                設定
              </Link>
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
