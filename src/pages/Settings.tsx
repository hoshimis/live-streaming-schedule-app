import { Box } from '@chakra-ui/react'
import SettingTitle from '../components/atoms/Text/SettingTitle'
import ThemeChanger from '../components/organisms/ThemeChanger'

const Settings = () => {
  return (
    <>
      <Box maxWidth="1080px" m="auto" p={{ base: 5, md: 10 }}>
        <SettingTitle title="アカウント">
          ここにアカウント情報が入る
        </SettingTitle>
        <SettingTitle title="ダークモード">
          <ThemeChanger></ThemeChanger>
        </SettingTitle>
      </Box>
    </>
  )
}

export default Settings
