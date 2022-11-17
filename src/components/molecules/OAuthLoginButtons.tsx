import { Button, VStack } from '@chakra-ui/react'
import {
  GoogleAuthProvider,
  signInWithPopup,
  TwitterAuthProvider
} from 'firebase/auth'
import React from 'react'
import { SiGoogle, SiTwitter } from 'react-icons/si'
import { auth } from '../../firebase/client'

const OAuthLoginButton = () => {
  const loginWithProvider = (providerName: 'google' | 'twitter') => {
    const provider = {
      google: new GoogleAuthProvider(),
      twitter: new TwitterAuthProvider()
    }

    return signInWithPopup(auth, provider[providerName])
  }

  return (
    <VStack mb={20}>
      <Button
        m={10}
        leftIcon={<SiGoogle />}
        borderRadius="999px"
        colorScheme="pink"
        p="5px 50px"
        size="lg"
        onClick={() => loginWithProvider('google')}
      >
        Googleでログイン
      </Button>
      <Button
        m={10}
        leftIcon={<SiTwitter />}
        borderRadius="999px"
        colorScheme="blue"
        p="5px 50px"
        size="lg"
        onClick={() => loginWithProvider('twitter')}
      >
        Twitterでログイン
      </Button>
    </VStack>
  )
}

export default OAuthLoginButton
