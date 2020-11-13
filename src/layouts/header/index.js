import React from 'react'
import { ContainerDiv, HeaderContainer, NavContainer } from './styles'
import { Icon, Logo } from 'layouts'

export default function Header() {
  return (
    <HeaderContainer>
      <ContainerDiv>
        <NavContainer>
          <Logo />
          <Icon />
          <div>nav</div>
        </NavContainer>
      </ContainerDiv>
    </HeaderContainer>
  )
}
