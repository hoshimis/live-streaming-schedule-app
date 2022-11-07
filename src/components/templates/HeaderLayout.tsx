import { memo, ReactNode, FC } from 'react'
import { Header } from '../organisms/layout/Header'

type Props = {
  // childrenのような型に囲まれた要素にはReactNodeを用いる
  children: ReactNode
}

/**
 * @author [hoshimi](https://github.com/hoshimis)
 * @param props childrenがはいる
 * @return 渡されたchildrenとHeaderを結合して返す。
 */

export const HeaderLayout: FC<Props> = memo((props) => {
  const { children } = props
  return (
    <>
      <Header />
      {children}
    </>
  )
})
