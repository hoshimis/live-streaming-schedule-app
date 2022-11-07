import { memo, FC } from 'react'
import { Route, Routes } from 'react-router-dom'

import { ChannelList } from '../components/pages/ChannelList'
import { ScheduleList } from '../components/pages/ScheduleList'
import { Settings } from '../components/pages/Settings'
import { HeaderLayout } from '../components/templates/HeaderLayout'

/**
 * @author [hoshimi](https://github.com/hoshimis)
 */
export const Router: FC = memo(() => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <HeaderLayout>
            <ScheduleList />
          </HeaderLayout>
        }
      />
      {/* <Route path="/home" element={<Navigate to="/" />} /> */}
      <Route
        path="/channels"
        element={
          <HeaderLayout>
            <ChannelList />
          </HeaderLayout>
        }
      />
      <Route
        path="/settings"
        element={
          <HeaderLayout>
            <Settings />
          </HeaderLayout>
        }
      />
      <Route path="/*"></Route>
    </Routes>
  )
})
