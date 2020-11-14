import React from 'react'
import { Label, AllInput } from './styles'

export default function TextAllInput({ label }) {
  return (
    <>
      <Label>{label}</Label>
      <AllInput type="text"></AllInput>
    </>
  )
}
