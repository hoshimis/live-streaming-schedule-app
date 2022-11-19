import { Text, Box, Flex, Avatar, Button } from '@chakra-ui/react'
import { signOut } from 'firebase/auth'
import Router from 'next/router'
import { memo, useContext } from 'react'
import { AuthContext, auth } from '../../context/AuthContext'

const SettingsAcount = memo(() => {
  // useContextにContext全体を与えて、Contextが持つcurrentUserを取得
  const { currentUser } = useContext(AuthContext)
  const displayName = currentUser?.displayName
  const photoURL = currentUser?.photoURL
  const email = currentUser?.email

  const logOut = () => {
    signOut(auth)
    Router.push('/LoginPage')
  }

  return (
    <Flex>
      <Avatar boxSize={150} src={photoURL as string} border="1px solid #000" />
      <Box ml={10}>
        <Text mt={5} fontSize="xl">
          ユーザ名 : {displayName}
        </Text>
        <Text mt={5} fontSize="xl">
          Email : {email}
        </Text>
      </Box>
      <Box m="auto" textAlign="center">
        <Button color={'red'} mt="auto" onClick={logOut}>
          ログアウト
        </Button>
      </Box>
    </Flex>
  )
})

export default SettingsAcount
