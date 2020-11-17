import React from 'react'
import { Header, Completed } from 'layouts'
import Footer from './footer'
import { LayoutContainer, MainContainer } from 'containers'

export default function Layout({ children, isAuth, firstName }) {
  return (
    <LayoutContainer>
      <Header isAuth={isAuth} firstName={firstName} />
      {isAuth && <Completed />}
      <MainContainer>{children}</MainContainer>
      <Footer />
    </LayoutContainer>
  )
}
