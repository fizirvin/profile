import React from 'react'
import { Header, Completed } from 'layouts'
import { LayoutDiv, MainContainer } from './styles'

export default function Layout({ children }) {
  return (
    <LayoutDiv>
      <Header />
      <Completed />
      <MainContainer>{children}</MainContainer>
    </LayoutDiv>
  )
}
