import { Box } from '@chakra-ui/react'
import DateFormat from '../components/atoms/Date/DateFormat'
import DateTab from '../components/atoms/Tab/DateTab'

const ScheduleList = () => {
  return (
    <>
      <Box maxWidth="1200px" m="auto" p={{ base: 2, md: 5 }}>
        <DateFormat />
        <DateTab />
      </Box>
    </>
  )
}

export default ScheduleList
