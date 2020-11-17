import React, { useState } from 'react'
import { newUser } from './mutations'
import { fetchItems } from 'services'
import { LoginButton, SignUpRequest } from 'components/buttons'
import { TextInput, PasswordInput, EmailInput, Spinner } from 'components'
import {
  LoginContainer,
  FormContainer,
  LoginForm,
  TitleForm,
  FooterForm,
  FooterText,
  LoginButtonArea,
  WithEmailButtonArea,
  RowContainer,
  Half,
  HalfLast,
  MessageErrorArea,
  RequestMessageArea
} from './styles'

export default function SignupWithEmail() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rePassword, setRePassword] = useState('')
  const [message, setMessage] = useState('')
  const [request, setRequest] = useState(false)
  const [loading, setLoading] = useState(true)
  const [resquestMessage, setRequestMessage] = useState('')

  const onChangeHandler = (e) => {
    const value = e.target.value
    const name = e.target.name
    switch (name) {
      case 'firstname':
        setFirstName(value)
        break
      case 'lastname':
        setLastName(value)
        break
      case 'email':
        setEmail(value)
        break
      case 'password':
        const upperCaseLetters = /[A-Z]/g
        const lowerCaseLetters = /[a-z]/g
        const numbers = /[0-9]/g
        setPassword(value)
        if (!value.match(upperCaseLetters)) {
          setMessage('Password must include one upper case')
          return
        }
        if (!value.match(lowerCaseLetters)) {
          setMessage('Password must include one lower case')
          return
        }
        if (!value.match(numbers)) {
          setMessage('Password must include one number')
          return
        }
        if (value.length < 6) {
          setMessage('must be at least 6 characters')
          return
        }

        setMessage('')

        break
      case 'rePassword':
        setRePassword(value)
        if (value !== password) {
          setMessage('invalid password')
          return
        }
        setMessage('')
        break
      default:
        return
    }
  }

  const addUser = async (input) => {
    newUser.variables = { input }
    const { status, data } = await fetchItems(newUser)

    if (!status) {
      setLoading(false)
      setRequestMessage(`${data}`)
    } else {
      const { newUser } = data

      setLoading(false)
      setRequestMessage(`New user ${newUser.firstName} signed up correctly`)
    }
  }

  const onSubmit = () => {
    if (!firstName || !lastName || !email || !password || !rePassword) {
      setMessage('check form')
      return
    }
    if (password !== rePassword) {
      setMessage('check password')
      return
    }

    const input = {
      firstName,
      lastName,
      email,
      password
    }
    addUser(input)
    setRequest(true)
  }

  const form = () => {
    return (
      <>
        <TitleForm>Create an Account For Free</TitleForm>
        <RowContainer>
          <Half>
            <TextInput
              label={'First Name'}
              name={'firstname'}
              value={firstName}
              onChange={onChangeHandler}
            />
          </Half>
          <HalfLast>
            <TextInput
              label={'Last Name'}
              name={'lastname'}
              value={lastName}
              onChange={onChangeHandler}
            />
          </HalfLast>
        </RowContainer>
        <EmailInput
          label={'Email'}
          name={'email'}
          value={email}
          onChange={onChangeHandler}
        />
        <PasswordInput
          label={'Password (must be at least 6 characters)'}
          name={'password'}
          value={password}
          onChange={onChangeHandler}
        />
        <MessageErrorArea>{message && message}</MessageErrorArea>
        <PasswordInput
          label={'Re-enter Password'}
          name={'rePassword'}
          value={rePassword}
          onChange={onChangeHandler}
        />
        <WithEmailButtonArea>
          <SignUpRequest onClick={onSubmit} title={'Sign up'} />
        </WithEmailButtonArea>
        <FooterForm>
          <FooterText>Already have an account?</FooterText>
          <LoginButtonArea>
            <LoginButton to={'/login'} />
          </LoginButtonArea>
        </FooterForm>
      </>
    )
  }

  const submitResponse = () => {
    return (
      <>
        {loading && <Spinner />}
        {resquestMessage && (
          <RequestMessageArea>{resquestMessage}</RequestMessageArea>
        )}
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
