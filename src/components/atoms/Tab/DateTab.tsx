import { Tabs, TabList, TabPanels, Tab, TabPanel, Box } from '@chakra-ui/react'
import StreamRow from '../../molecules/StreamRow'

const DateTab = () => {
  console.log('画面がレンダリングされました')

  const streamrow = []
  for (let i = 0; i < 25; i++) {
    streamrow.push(<StreamRow hour={i} />)
  }

  return (
    <Tabs isFitted variant="enclosed" mt={10}>
      <TabList>
        <Tab fontSize={{ base: 'lg', md: 'lg', lg: 'xl' }}>今日</Tab>
        <Tab fontSize={{ base: 'lg', md: 'lg', lg: 'xl' }}>明日</Tab>
      </TabList>
      <TabPanels>
        {/* 今日のタブ */}
        <TabPanel>
          <Box h={'100%'} overflow="">
            {streamrow}
          </Box>
        </TabPanel>

        {/* 明日のタブ */}
        <TabPanel>
          <StreamRow hour={0} />
          <StreamRow hour={1} />
          <StreamRow hour={2} />
          <StreamRow hour={3} />
          <StreamRow hour={4} />
          <StreamRow hour={5} />
        </TabPanel>
      </TabPanels>
    </Tabs>
  )
}

export default DateTab
