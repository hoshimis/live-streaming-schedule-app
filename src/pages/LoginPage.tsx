import { Box, Divider, Heading } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React, { useContext, useEffect } from 'react'
import LoginForm from '../components/molecules/LoginForm'
import OAuthLoginButtons from '../components/molecules/OAuthLoginButtons'
import { AuthContext } from '../context/AuthContext'

const LoginPage = () => {
  const router = useRouter()
  const { currentUser } = useContext(AuthContext)
  useEffect(() => {
    currentUser && router.replace('/ScheduleList')
  }, [currentUser, router])

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
        <OAuthLoginButtons />
        <Divider />
        <LoginForm />
      </Box>
    </>
  )
}

export default LoginPage
