import React from 'react'
import { Label, Select, InputContainer } from './styles'

export default function SelectInput({ label, name, items }) {
  const options = items.map((item) => <option>{item}</option>)

  return (
    <InputContainer>
      <Label>{label}</Label>
      <Select value="">
        <option disabled value="">
          {name}
        </option>
        {options}
      </Select>
    </InputContainer>
  )
}
