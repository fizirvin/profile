import React from 'react'
import { Label, AllInput, InputContainer } from './styles'

export default function EmailInput({ label, value, onChange, name }) {
  return (
    <InputContainer>
      <Label>{label}</Label>
      <AllInput
        type="email"
        name={name}
        value={value}
        onChange={onChange}
      ></AllInput>
    </InputContainer>
  )
}
