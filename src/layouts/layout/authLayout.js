import React from 'react'
import { AuthHeader } from 'layouts'
import Footer from './footer'
import { LayoutDiv, MainContainer } from './styles'

export default function AuthLayout({ children }) {
  return (
    <LayoutDiv>
      <AuthHeader />
      <MainContainer>{children}</MainContainer>
      <Footer />
    </LayoutDiv>
  )
}
