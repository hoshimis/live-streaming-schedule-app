import { onAuthStateChanged, User } from 'firebase/auth'
import { createContext, useState, useEffect } from 'react'
import { auth } from '../../src/firebase/client'

/**
 * @author hosimi
 * @interface AuthContextType Contextの型
 * @function useContext ユーザ情報を格納
 * @function onAuthStateChanged ログイン状態が変化されると呼び出される
 * @param AuthContext Context 宣言時はundefineと定義
 *
 * @reference https://qiita.com/mtitg/items/3f1b6e61cee2f01f04a8
 */

interface AuthContextType {
  currentUser: User | null | undefined
}

const AuthContext = createContext<AuthContextType>({ currentUser: undefined })

const AuthProvider = (props: any) => {
  // Contextに保持させるcurrentUserをuseSateで管理する
  const [currentUser, setCurrentUser] = useState<User | null | undefined>(
    undefined
  )

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
    })
  }, [])

  return (
    <AuthContext.Provider value={{ currentUser: currentUser }}>
      {props.children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider, auth }
