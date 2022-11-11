import { ComponentMeta } from '@storybook/react'
import { MenuIconButton } from './MenuIconButton'

// ファイル内のStory設定（メタデータオブジェクト）
export default {
  // グループ名
  title: 'MenuIconButton',
  // 使用するコンポーネント
  component: MenuIconButton
} as ComponentMeta<typeof MenuIconButton>

// CSF 3.0
// export default { component: Button };
// export const Primary = { args: { primary: true } };

export const MenuIconButton1 = (props: any) => {
  return <MenuIconButton {...props}>1</MenuIconButton>
}
