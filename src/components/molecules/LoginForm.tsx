import {
  Box,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Text
} from '@chakra-ui/react'
import Link from 'next/link'

const LoginForm = () => {
  return (
    <Box>
      <Text mt={2}>または</Text>
      <FormControl isRequired>
        <FormLabel mt={5}>ID</FormLabel>
        <Input type="email" />
        <FormLabel mt={10}>パスワード</FormLabel>
        <Input type="password" />
        <FormHelperText>
          <Link href={'/'}>IDまたはパスワードを忘れた場合...</Link>
        </FormHelperText>
      </FormControl>
    </Box>
  )
}

export default LoginForm
