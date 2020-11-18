import React from 'react'
import Logo from './logo'
import LoggedMenu from './loggedMenu'
import Icons from './icons'
import User from './user'
import { NavContainer } from 'containers'

export default function LoggedNav({ firstName }) {
  return (
    <NavContainer>
      <Logo />
      <LoggedMenu />
      <Icons />
      <User firstName={firstName} />
    </NavContainer>
  )
}
