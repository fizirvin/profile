import React from 'react'
import styled from '@emotion/styled'
import Logo from './logo'
import Menu from './menu'
import Buttons from './buttons'

export const NavContainer = styled.nav`
  display: flex;
  background-color: yellow;
  width: 72.5%;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 850px) {
    height: 40px;
  }
`

export default function AuthNav() {
  return (
    <NavContainer>
      <Logo />
      <Menu />
      <Buttons />
    </NavContainer>
  )
}
