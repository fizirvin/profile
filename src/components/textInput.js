import React from 'react'
import { Label, Input, InputContainer } from './styles'

export default function TextInput({ label, value, onChange, name }) {
  return (
    <InputContainer>
      <Label>{label}</Label>
      <Input type="text" name={name} value={value} onChange={onChange}></Input>
    </InputContainer>
  )
}
