import React from 'react'
import { Label, TextArea, InputContainer } from './styles'

export default function TextAreaInput({ label, rows, cols }) {
  return (
    <InputContainer>
      <Label>{label}</Label>
      <TextArea rows={rows} cols={cols}></TextArea>
    </InputContainer>
  )
}
