import { Button } from '@chakra-ui/react'
import {
  GoogleAuthProvider,
  TwitterAuthProvider,
  signInWithPopup
} from 'firebase/auth'
import { useRouter } from 'next/router'
import { SiGoogle, SiTwitter } from 'react-icons/si'
import { auth } from '../../../context/AuthContext'

type Props = {
  title: string
  colorScheme: string
  icon: 'google' | 'twitter'
  providerName: 'google' | 'twitter'
}

const LoginButton = (props: Props) => {
  const { title, colorScheme, icon, providerName } = props

  const router = useRouter()
  const loginWithProvider = (providerName: 'google' | 'twitter') => {
    const provider = {
      google: new GoogleAuthProvider(),
      twitter: new TwitterAuthProvider()
    }

    // Google認証時
    // TODO: Twitterで認証するときの実装も行う。
    return signInWithPopup(auth, provider[providerName])
      .then(() => {
        console.log(`ログインに成功しました`)
      })
      .catch((error) => {
        // エラーハンドリングをここで行う
        const errorCode = error.code
        const errorMessage = error.message
        const email = error.customData.email
        const credential = GoogleAuthProvider.credentialFromError(error)
        console.log(
          `
          サインインに失敗しました。
          ErrorCode:${errorCode},
          ErrorMessage:${errorMessage},
          Email:${email},
          Credential:${credential}
          `
        )
      })
  }
  return (
    <Button
      m={10}
      p="5px 50px"
      borderRadius="999px"
      size="lg"
      leftIcon={icon === 'google' ? <SiGoogle /> : <SiTwitter />}
      colorScheme={colorScheme}
      onClick={() => loginWithProvider(providerName)}
    >
      {title}
    </Button>
  )
}

export default LoginButton
