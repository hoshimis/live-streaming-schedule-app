import { ComponentMeta } from '@storybook/react'
import CardTitle from './CardTitle'

// ファイル内のStory設定（メタデータオブジェクト）
export default {
  // グループ名
  title: 'Title',
  // 使用するコンポーネント
  component: CardTitle
} as ComponentMeta<typeof CardTitle>

// CSF 3.0
// export default { component: Button };
// export const Primary = { args: { primary: true } };

export const Card = () => {
  return <CardTitle>sample</CardTitle>
}
