import React from 'react'
import styled from '@emotion/styled'

const LogoDiv = styled.a`
  display: flex;

  div {
    margin-left: 15vw;
    width: 135px;
    height: 20px;
    font-family: Raleway;
    font-style: normal;
    font-weight: bold;
    font-size: 17px;
    line-height: 20px;
    /* identical to box height */
    text-align: center;
    color: #333333;
  }
`

export default function Logo() {
  return (
    <LogoDiv>
      <div>ClipboardHealth</div>
    </LogoDiv>
  )
}
