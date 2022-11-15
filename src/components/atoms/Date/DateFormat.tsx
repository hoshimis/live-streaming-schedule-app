import { Box, Text } from '@chakra-ui/react'
import { format } from 'date-fns'
import { ja } from 'date-fns/locale'
import React, { memo, useEffect, useState } from 'react'

const DateFormat = memo(() => {
  const [now, setNow] = useState<Date>(new Date())

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date())
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <Box>
      <Text fontSize={{ base: 'lg', md: 'lg', lg: 'xl' }} textAlign="center">
        {format(now, 'yyyy/MM/dd(E) HH:mm', {
          locale: ja
        })}
      </Text>
    </Box>
  )
})

export default DateFormat
