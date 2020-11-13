import React from 'react'
import { Label, AllInput, InputContainer } from './styles'

export default function TextAllInput({ label }) {
  return (
    <InputContainer>
      <Label>{label}</Label>
      <AllInput type="text"></AllInput>
    </InputContainer>
  )
}
