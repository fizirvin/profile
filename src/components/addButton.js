import React from 'react'
import { AddButtonStyled, ButtonTitle } from './styles'

export default function AddButton({ title }) {
  return (
    <AddButtonStyled>
      <ButtonTitle>+ {title}</ButtonTitle>
    </AddButtonStyled>
  )
}
