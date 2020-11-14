import React from 'react'
import { Label, Input } from './styles'

export default function TextInput({ label }) {
  return (
    <>
      <Label>{label}</Label>
      <Input type="text"></Input>
    </>
  )
}
