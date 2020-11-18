import React from 'react'
import { LoginButton, SignUpButton } from 'components/buttons'
import { FlexArea, ButtonsContainer } from 'containers'

export default function Buttons() {
  return (
    <ButtonsContainer>
      <FlexArea w={'41.5'}>
        <LoginButton to={'/login'} />
      </FlexArea>
      <FlexArea w={'49.5'}>
        <SignUpButton to={'/'} />
      </FlexArea>
    </ButtonsContainer>
  )
}
