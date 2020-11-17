import React from 'react'
import LoggedNav from './loggedNav'
import UnloggedNav from './unloggedNav'
import { HeaderArea, HeaderContainer } from 'containers'

export default function Header({ isAuth = false }) {
  return (
    <HeaderArea>
      <HeaderContainer>
        {isAuth ? <LoggedNav /> : <UnloggedNav />}
      </HeaderContainer>
    </HeaderArea>
  )
}
