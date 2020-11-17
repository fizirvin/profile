import React from 'react'
import Logo from './logo'
import UnloggedMenu from './unloggedMenu'
import Buttons from './buttons'
import { NavContainer } from 'containers'

export default function UnloggedNav() {
  return (
    <NavContainer>
      <Logo />
      <UnloggedMenu />
      <Buttons />
    </NavContainer>
  )
}
