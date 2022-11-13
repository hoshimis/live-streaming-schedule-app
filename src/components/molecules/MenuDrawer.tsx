import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay
} from '@chakra-ui/react'
import { memo, FC } from 'react'

type Props = {
  onClose: () => void
  isOpen: boolean
  onClickHome: () => void
  onClickSettings: () => void
  onClickChannels: () => void
}

/**
 * @author [hoshimi](https://github.com/hoshimis)
 * @param onClose ドロワーを閉じるかを管理
 * @param isOpen ドロワーが開いているか管理
 * @param onClickHome Homeが押された時の関数
 * @param onClickSettings Settingsが押された時の関数
 * @param onClickUserManagement UserManagementが押された時の関数
 */

export const MenuDrawer: FC<Props> = memo((props) => {
  const { onClose, isOpen, onClickHome, onClickSettings, onClickChannels } =
    props
  return (
    <Drawer placement="left" size="xs" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerBody p={0}>
            <Button w="100%" borderRadius={0} onClick={onClickHome}>
              配信スケジュール
            </Button>
            <Button w="100%" borderRadius={0} onClick={onClickChannels}>
              登録チャンネル
            </Button>
            <Button w="100%" borderRadius={0} onClick={onClickSettings}>
              設定
            </Button>
            {/* TODO: ログアウト処理を追加する  */}
            <Button w="100%" borderRadius={0} onClick={onClickSettings}>
              ログアウト
            </Button>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  )
})
