// pages/_document.js

import { ColorModeScript } from '@chakra-ui/react'
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import theme from './theme'

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="ja">
        <Head />
        <body>
          {/* script for change color mode */}
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
