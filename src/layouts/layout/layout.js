import React from 'react'
import { Header, Completed } from 'layouts'
import Footer from './footer'
import { LayoutContainer, MainContainer } from 'containers'

export default function Layout({ children, isAuth }) {
  return (
    <LayoutContainer>
      <Header isAuth={isAuth} />
      {isAuth && <Completed />}
      <MainContainer>{children}</MainContainer>
      <Footer />
    </LayoutContainer>
  )
}
