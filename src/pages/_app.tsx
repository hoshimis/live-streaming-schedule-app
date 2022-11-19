import { Box, ChakraProvider, extendTheme } from '@chakra-ui/react'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import HeaderLayout from '../components/templates/HeaderLayout'
import { AuthProvider } from '../context/AuthContext'

// 1. Import the extendTheme function

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac'
  }
}

const theme = extendTheme({ colors })

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>live schedule!!</title>
      </Head>
      <Box>
        <AuthProvider>
          <HeaderLayout>
            <Component {...pageProps} />
          </HeaderLayout>
        </AuthProvider>
      </Box>
    </ChakraProvider>
  )
}

export default App
