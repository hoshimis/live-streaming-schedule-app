import { Box, SimpleGrid } from '@chakra-ui/react'
import { memo } from 'react'
import ChannelCard from '../components/molecules/ChannnelCard'

// TODO: 現在はpropsに固定値しか入らないので、サーバから取得してきた値を表示できる用にする。
const ChannelList = memo(() => {
  return (
    <>
      <Box w={'100vw'} p={5}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={5}>
          <ChannelCard
            cardImage="https://www.youtube.com/channel/UCWU3QKablvVEK6JcEyEC58w"
            userImage="https://yt3.ggpht.com/ytc/AMLnZu81hRrvsJW5OeCpF9SzjK25lir7iEQTXQ_ofgM8=s88-c-k-c0x00ffffff-no-rj"
            title="メガテラゼロ"
          />
          <ChannelCard
            cardImage="https://source.unsplash.com/random"
            userImage="https://source.unsplash.com/random"
            title="sample"
          />
          <ChannelCard
            cardImage="https://source.unsplash.com/random"
            userImage="https://source.unsplash.com/random"
            title="sample"
          />
          <ChannelCard
            cardImage="https://source.unsplash.com/random"
            userImage="https://source.unsplash.com/random"
            title="sample"
          />
        </SimpleGrid>
      </Box>
    </>
  )
})

export default ChannelList
