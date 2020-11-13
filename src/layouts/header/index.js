import React from 'react'
import { ContainerDiv, HeaderContainer, NavContainer } from './styles'
import Logo from './logo'
import Nav from './nav'
import Icons from './icons'
import User from './user'

export default function Header() {
  return (
    <HeaderContainer>
      <ContainerDiv>
        <NavContainer>
          <Logo />
          <Nav />
          <Icons />
          <User />
        </NavContainer>
      </ContainerDiv>
    </HeaderContainer>
  )
}
