import { ComponentMeta } from '@storybook/react'
import UserImage from './UserImage'

// ファイル内のStory設定（メタデータオブジェクト）
export default {
  // グループ名
  title: 'Image',
  // 使用するコンポーネント
  component: UserImage
} as ComponentMeta<typeof UserImage>

// CSF 3.0
// export default { component: Button };
// export const Primary = { args: { primary: true } };

export const IconImage = () => {
  return <UserImage userImage="https://source.unsplash.com/random" />
}
