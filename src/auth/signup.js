import React from 'react'
import { LoginButton, WithEmailButton } from 'components/buttons'
import {
  LoginContainer,
  FormContainer,
  LoginForm,
  TitleForm,
  FooterForm,
  FooterText,
  LoginButtonArea,
  WithEmailButtonArea
} from './styles'

export default function Login() {
  return (
    <LoginContainer>
      <FormContainer>
        <LoginForm>
          <TitleForm>Create an Account For Free</TitleForm>
          <WithEmailButtonArea>
            <WithEmailButton to={'/signup-with-email'} />
          </WithEmailButtonArea>
          <FooterForm>
            <FooterText>Already have an account?</FooterText>
            <LoginButtonArea>
              <LoginButton to={'/login'} />
            </LoginButtonArea>
          </FooterForm>
        </LoginForm>
      </FormContainer>
    </LoginContainer>
  )
}
