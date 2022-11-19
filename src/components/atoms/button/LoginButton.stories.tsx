import { ComponentMeta } from '@storybook/react'
import LoginButton from './LoginButton'

// ファイル内のStory設定（メタデータオブジェクト）
export default {
  // グループ名
  title: 'Button',
  // 使用するコンポーネント
  component: LoginButton
} as ComponentMeta<typeof LoginButton>

// CSF 3.0
// export default { component: Button };
// export const Primary = { args: { primary: true } };

export const MenuIconButton1 = (props: any) => {
  return <LoginButton {...props}>1</LoginButton>
}
