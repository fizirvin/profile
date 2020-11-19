import React, { useState } from 'react'
import loginQuery from './queries'
import { fetchItems } from 'services'
import { useDispatch } from 'react-redux'
import { SignUpButton, SignUpRequest } from 'components/buttons'
import { SimpleInput } from 'components'
import {
  LoginContainer,
  FormContainer,
  LoginForm,
  TitleForm,
  FooterForm,
  FooterText,
  SignupButtonArea,
  ColumContainer,
  WithEmailButtonArea
} from './styles'

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()

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

  const loginHandler = async (input, onLogin) => {
    loginQuery.variables = { email: input.email, password: input.password }
    const { status, data } = await fetchItems(loginQuery)

    if (!status) {
      dispatch({ type: 'RESPONSE_ACTION', payload: `${data}` })
    } else {
      const { login } = data
      dispatch({ type: 'RESPONSE_ACTION', payload: 'login' })
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
    dispatch({ type: 'REQUEST_ACTION' })
    loginHandler(input, onLogin)
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
        <LoginForm>{form()}</LoginForm>
      </FormContainer>
    </LoginContainer>
  )
}
