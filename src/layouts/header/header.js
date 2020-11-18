import React from 'react'
import LoggedNav from './loggedNav'
import UnloggedNav from './unloggedNav'
import { HeaderArea } from 'containers'

export default function Header({ isAuth = false, firstName }) {
  return (
    <HeaderArea>
      {isAuth ? <LoggedNav firstName={firstName} /> : <UnloggedNav />}
    </HeaderArea>
  )
}
