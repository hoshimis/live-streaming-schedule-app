import { ComponentMeta } from '@storybook/react'
import DateFormat from './DateFormat'

// ファイル内のStory設定（メタデータオブジェクト）
export default {
  // グループ名
  title: 'Schedule',
  // 使用するコンポーネント
  component: DateFormat
} as ComponentMeta<typeof DateFormat>

// CSF 3.0
// export default { component: Button };
// export const Primary = { args: { primary: true } };

export const dateformat = () => {
  return <DateFormat />
}
