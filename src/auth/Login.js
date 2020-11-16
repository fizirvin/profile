import React from 'react'
import { LoginButton } from 'components/buttons'
import {
  LoginContainer,
  FormContainer,
  LoginForm,
  TitleForm,
  FooterForm,
  FooterText,
  LoginButtonArea
} from './styles'

export default function Login() {
  return (
    <LoginContainer>
      <FormContainer>
        <LoginForm>
          login form
          {/* <TitleForm>Create an Account For Free</TitleForm>
          <FooterForm>
            <FooterText>Already have an account?</FooterText>
            <LoginButtonArea>
              <LoginButton />
            </LoginButtonArea>
          </FooterForm> */}
        </LoginForm>
      </FormContainer>
    </LoginContainer>
  )
}
