import React from 'react'
import styled from '@emotion/styled'
import { LoginButton, SignUpButton } from 'components/buttons'

const ButtonsContainer = styled.div`
  width: 17%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 850px) {
    display: none;
  }
`

export const LoginButtonArea = styled.div`
  width: 41.5%;
  height: 40px;
`

export const SignUpButtonArea = styled.div`
  width: 73.5px;
  height: 40px;
`

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
