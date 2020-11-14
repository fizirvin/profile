import React from 'react'
import { Label, Input, InputContainer } from './styles'

export default function TextInput({ label }) {
  return (
    <InputContainer>
      <Label>{label}</Label>
      <Input type="text"></Input>
    </InputContainer>
  )
}
