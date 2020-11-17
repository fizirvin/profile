import React from 'react'
import LoggedNav from './loggedNav'
import UnloggedNav from './unloggedNav'
import { HeaderArea, HeaderContainer } from 'containers'

export default function Header({ isAuth = false, firstName }) {
  return (
    <HeaderArea>
      <HeaderContainer>
        {isAuth ? <LoggedNav firstName={firstName} /> : <UnloggedNav />}
      </HeaderContainer>
    </HeaderArea>
  )
}
