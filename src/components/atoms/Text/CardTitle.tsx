import { Box, Center, Text } from '@chakra-ui/react'
import { memo, FC, ReactNode } from 'react'

type Props = {
  children: ReactNode
}

/**
 * @author [hoshimi](https://github.com/hoshimis)
 */
const CardTitleText: FC<Props> = memo((props) => {
  const { children } = props
  return (
    <Box textAlign="center" w="100%" h="100%" mt={5} overflow="hidden">
      <Center>
        <Text
          fontWeight="bold"
          h="100%"
          fontSize={['md', 'lg', 'xl']}
          color="#000"
          overflow="hidden"
          textOverflow="ellipsis"
          whiteSpace="nowrap"
        >
          {children}
        </Text>
      </Center>
    </Box>
  )
})

export default CardTitleText
