import { Box } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { memo, useContext, useEffect } from 'react'
import SettingTitle from '../components/atoms/Text/SettingTitle'
import SettingsAcount from '../components/molecules/SettingsAcount'
import ThemeChanger from '../components/organisms/ThemeChanger'
import { AuthContext } from '../context/AuthContext'

const Settings = memo(() => {
  const router = useRouter()
  const { currentUser } = useContext(AuthContext)
  useEffect(() => {
    currentUser === null && router.replace('/LoginPage')
  }, [currentUser, router])

  return (
    <>
      <Box maxWidth="1080px" m="auto" p={{ base: 5, md: 10 }}>
        <SettingTitle title="アカウント">
          <SettingsAcount />
        </SettingTitle>
        <SettingTitle title="ダークモード">
          <ThemeChanger />
        </SettingTitle>
      </Box>
    </>
  )
})

export default Settings
