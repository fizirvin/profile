import React from 'react'
import { AuthNav } from 'layouts'
import { HeaderArea, MainContainer } from './styles'

export default function AuthHeader() {
  return (
    <HeaderArea>
      <MainContainer>
        <AuthNav />
      </MainContainer>
    </HeaderArea>
  )
}
