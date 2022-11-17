import { Box, Divider, Heading } from '@chakra-ui/react'
import React from 'react'
import LoginForm from '../components/molecules/LoginForm'
import OAuthLoginButton from '../components/molecules/OAuthLoginButtons'

const LoginPage = () => {
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
        <OAuthLoginButton />
        <Divider />
        <LoginForm />
      </Box>
    </>
  )
}

export default LoginPage
