import { ComponentMeta } from '@storybook/react'
import CardImage from './CardImage'

// ファイル内のStory設定（メタデータオブジェクト）
export default {
  // グループ名
  title: 'Image',
  // 使用するコンポーネント
  component: CardImage
} as ComponentMeta<typeof CardImage>

// CSF 3.0
// export default { component: Button };
// export const Primary = { args: { primary: true } };

export const lg = () => {
  return <CardImage cardImage="https://source.unsplash.com/random" />
}
export const md = () => {
  return <CardImage cardImage="https://source.unsplash.com/random" />
}
