import { Box, Button, Divider, Heading, VStack } from '@chakra-ui/react'
import {
  GoogleAuthProvider,
  signInWithPopup,
  TwitterAuthProvider
} from 'firebase/auth'
import React from 'react'
import { SiGoogle, SiTwitter } from 'react-icons/si'
import LoginForm from '../components/molecules/LoginForm'
import { auth } from '../firebase/client'

const LoginPage = () => {
  const loginWithProvider = (providerName: 'google' | 'twitter') => {
    const provider = {
      google: new GoogleAuthProvider(),
      twitter: new TwitterAuthProvider()
    }

    return signInWithPopup(auth, provider[providerName])
  }

  return (
    <>
      <Box
        m={'auto'}
        mt={20}
        borderRadius="2xl"
        className="LoginBox"
        boxSize="800px"
        textAlign="center"
      >
        <Heading
          size={{ base: 'xl', md: '2xl' }}
          as={'h1'}
          m={'auto'}
          p={'auto'}
        >
          ログイン
        </Heading>
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
        <Divider />
        <LoginForm />
      </Box>
    </>
  )
}

export default LoginPage
