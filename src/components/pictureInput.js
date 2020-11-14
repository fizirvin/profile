import React from 'react'
import { Label, Picture } from './styles'

export default function PictureInput({ label }) {
  return (
    <>
      <Label>{label}</Label>
      <Picture />
    </>
  )
}
