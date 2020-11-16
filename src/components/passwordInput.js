import React from 'react'
import { Label, AllInput, InputContainer } from './styles'

export default function PasswordInput({ label, value, onChange, name }) {
  return (
    <InputContainer>
      <Label>{label}</Label>
      <AllInput
        type="password"
        name={name}
        value={value}
        onChange={onChange}
        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
      ></AllInput>
    </InputContainer>
  )
}
