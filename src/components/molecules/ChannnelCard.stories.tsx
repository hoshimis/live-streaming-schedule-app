import { ComponentMeta } from '@storybook/react'
import ChannelCard from './ChannnelCard'

// ファイル内のStory設定（メタデータオブジェクト）
export default {
  // グループ名
  title: 'Card',
  // 使用するコンポーネント
  component: ChannelCard
} as ComponentMeta<typeof ChannelCard>

// CSF 3.0
// export default { component: Button };
// export const Primary = { args: { primary: true } };

export const Channel = () => {
  return (
    <ChannelCard
      cardImage="https://source.unsplash.com/random"
      userImage="https://source.unsplash.com/random"
      title="sample"
    />
  )
}
