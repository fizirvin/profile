import React from 'react'
import { LoginButton, SignUpButton } from 'components/buttons'
import { ButtonsContainer, LoginButtonArea, SignUpButtonArea } from 'containers'

export default function Buttons() {
  return (
    <ButtonsContainer>
      <LoginButtonArea>
        <LoginButton />
      </LoginButtonArea>
      <SignUpButtonArea>
        <SignUpButton />
      </SignUpButtonArea>
    </ButtonsContainer>
  )
}
