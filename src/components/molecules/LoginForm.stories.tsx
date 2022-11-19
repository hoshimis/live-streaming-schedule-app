import { ComponentMeta } from '@storybook/react'
import LoginForm from './LoginForm'

// ファイル内のStory設定（メタデータオブジェクト）
export default {
  // グループ名
  title: 'Form',
  // 使用するコンポーネント
  component: LoginForm
} as ComponentMeta<typeof LoginForm>

// CSF 3.0
// export default { component: Button };
// export const Primary = { args: { primary: true } };

export const MenuIconButton1 = (props: any) => {
  return <LoginForm {...props}>1</LoginForm>
}
