import { ReactNode } from 'react'
import { Header } from '../organisms/layout/Header'

type LayoutProps = {
  // childrenのような型に囲まれた要素にはReactNodeを用いる
  children: ReactNode
}

/**
 * @author [hoshimi](https://github.com/hoshimis)
 * @param props childrenがはいる
 * @return 渡されたchildrenとHeaderを結合して返す。
 */

const HeaderLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      {children}
    </>
  )
}

export default HeaderLayout
