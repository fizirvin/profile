import React, { useState } from 'react'
import loginQuery from './queries'
import { fetchItems } from 'services'
import { SignUpButton, SignUpRequest } from 'components/buttons'
import { SimpleInput, Spinner } from 'components'
import {
  LoginContainer,
  FormContainer,
  LoginForm,
  TitleForm,
  FooterForm,
  FooterText,
  SignupButtonArea,
  ColumContainer,
  RequestMessageArea,
  WithEmailButtonArea,
  OkButton
} from './styles'

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [request, setRequest] = useState(false)
  const [loading, setLoading] = useState(true)
  const [resquestMessage, setRequestMessage] = useState('')

  const onChangeHandler = (e) => {
    const { name, value } = e.target
    switch (name) {
      case 'email':
        setEmail(value)
        break
      case 'password':
        setPassword(value)
        break
      default:
        return
    }
  }

  const loginHandler = async (input) => {
    loginQuery.variables = { email: input.email, password: input.password }
    const { status, data } = await fetchItems(loginQuery)

    if (!status) {
      setLoading(false)
      setRequestMessage(`${data}`)
    } else {
      const { login } = data
      setRequestMessage('login')
      onLogin(login)
    }
  }

  const onSubmit = () => {
    if (!email || !password) {
      return
    }

    const input = {
      email,
      password
    }

    loginHandler(input)
    setRequest(true)
  }

  const reset = () => {
    setRequestMessage('')
    setRequest(false)
    setLoading(true)
  }

  const submitResponse = () => {
    return (
      <>
        {loading && <Spinner />}
        {resquestMessage && (
          <RequestMessageArea>
            {resquestMessage} <OkButton onClick={reset}>Ok </OkButton>
          </RequestMessageArea>
        )}
      </>
    )
  }

  const form = () => {
    return (
      <>
        <TitleForm>Account Login</TitleForm>
        <ColumContainer column>
          <SimpleInput
            placeholder={'Email Address'}
            name={'email'}
            value={email}
            type={'email'}
            onChange={onChangeHandler}
          />
          <SimpleInput
            placeholder={'Password'}
            name={'password'}
            value={password}
            type={'password'}
            onChange={onChangeHandler}
          />
        </ColumContainer>
        <WithEmailButtonArea>
          <SignUpRequest title={'Login with email'} onClick={onSubmit} />
        </WithEmailButtonArea>

        <FooterForm>
          <FooterText>Dont have an account?</FooterText>

          <SignupButtonArea>
            <SignUpButton to={'/'} />
          </SignupButtonArea>
        </FooterForm>
      </>
    )
  }

  return (
    <LoginContainer>
      <FormContainer>
        <LoginForm>{request ? submitResponse() : form()}</LoginForm>
      </FormContainer>
    </LoginContainer>
  )
}
