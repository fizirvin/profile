import React from 'react'
import Logo from './logo'
import UnloggedMenu from './loggedMenu'
import Icons from './icons'
import User from './user'
import { NavContainer } from 'containers'

export default function LoggedNav() {
  return (
    <NavContainer>
      <Logo />
      <UnloggedMenu />
      <Icons />
      <User />
    </NavContainer>
  )
}