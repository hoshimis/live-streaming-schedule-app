import { ComponentMeta } from '@storybook/react'
import DateTab from './DateTab'

// ファイル内のStory設定（メタデータオブジェクト）
export default {
  // グループ名
  title: 'Schedule',
  // 使用するコンポーネント
  component: DateTab
} as ComponentMeta<typeof DateTab>

// CSF 3.0
// export default { component: Button };
// export const Primary = { args: { primary: true } };

export const sample = () => {
  return <DateTab />
}
