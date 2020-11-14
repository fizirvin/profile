import React from 'react'
import { Label, Select, InputContainer } from './styles'

export default function SelectInput({ label, name, items }) {
  const options = items.map((item) => <option key={item}>{item}</option>)

  return (
    <InputContainer>
      <Label>{label}</Label>
      <Select defaultValue={name}>
        <option disabled value=""></option>
        {options}
      </Select>
    </InputContainer>
  )
}
