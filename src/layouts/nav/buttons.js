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
  }
`

export default function Buttons() {
  return (
    <ButtonsContainer>
      <LoginButton />
      <SignUpButton />
    </ButtonsContainer>
  )
}
