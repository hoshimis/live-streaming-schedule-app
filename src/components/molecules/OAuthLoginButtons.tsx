import { VStack } from '@chakra-ui/react'
import LoginButton from '../atoms/Button/LoginButton'

const OAuthLoginButtons = () => {
  return (
    <VStack mb={20}>
      <LoginButton
        title="Googleでログイン"
        icon="google"
        colorScheme="pink"
        providerName="google"
      />
      <LoginButton
        title="Twitterでログイン"
        icon="twitter"
        colorScheme="blue"
        providerName="twitter"
      />
    </VStack>
  )
}

export default OAuthLoginButtons
