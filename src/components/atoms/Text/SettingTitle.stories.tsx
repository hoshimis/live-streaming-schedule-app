import { ComponentMeta } from '@storybook/react'
import SettingTitle from './SettingTitle'

// ファイル内のStory設定（メタデータオブジェクト）
export default {
  // グループ名
  title: 'Title',
  // 使用するコンポーネント
  component: SettingTitle
} as ComponentMeta<typeof SettingTitle>

// CSF 3.0
// export default { component: Button };
// export const Primary = { args: { primary: true } };

export const Setting = () => {
  return <SettingTitle title="sample">sample</SettingTitle>
}
