import { Box, Heading, Divider } from '@chakra-ui/react'
import { memo, FC, ReactNode } from 'react'

type Props = {
  title: ReactNode
  children: ReactNode
}

/**
 * @author [hoshimi](https://github.com/hoshimis)
 */
const SettingTitle: FC<Props> = memo((props) => {
  const { title, children } = props
  return (
    <>
      <Box h="100%" w="100%" pb={10} mt={10}>
        <Heading
          as="b"
          fontSize={{ base: 'ld', md: 'lg', lg: '2xl' }}
          textAlign="left"
          letterSpacing={5}
        >
          {title}
        </Heading>
        <Box mt="20px" ml="20px">
          {children}
        </Box>
      </Box>
      <Divider />
    </>
  )
})

export default SettingTitle
