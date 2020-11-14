import React from 'react'
import { SwitchDiv, Label, InputContainer } from './styles'

export default function SwitchInput({ label, checked }) {
  return (
    <InputContainer>
      <Label>{label}</Label>
      <SwitchDiv>
        <input type="checkbox" defaultChecked={checked}></input>
        <label>
          <span className="fontawesome-ok">No</span>
          <span className="fontawesome-remove">Yes</span>
          <div></div>
        </label>
      </SwitchDiv>
    </InputContainer>
  )
}
