import { Box } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useContext, useEffect } from 'react'
import DateFormat from '../components/atoms/Date/DateFormat'
import DateTab from '../components/atoms/Tab/DateTab'
import { AuthContext } from '../context/AuthContext'

const ScheduleList = () => {
  const router = useRouter()
  const { currentUser } = useContext(AuthContext)
  useEffect(() => {
    currentUser === null && router.replace('/LoginPage')
  }, [currentUser, router])

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
