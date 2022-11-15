import { ComponentMeta } from '@storybook/react'
import StreamCard from './StreamCard'

// ファイル内のStory設定（メタデータオブジェクト）
export default {
  // グループ名
  title: 'Card',
  // 使用するコンポーネント
  component: StreamCard
} as ComponentMeta<typeof StreamCard>

// CSF 3.0
// export default { component: Button };
// export const Primary = { args: { primary: true } };

export const Channel = () => {
  return (
    <StreamCard
      cardImage="https://source.unsplash.com/random"
      userImage="https://source.unsplash.com/random"
      title="sample"
    />
  )
}
