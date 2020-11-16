import React from 'react'
import styled from '@emotion/styled'

const LogoContainer = styled.div`
  height: 20px;
  font-family: Raleway;
  font-style: normal;
  font-weight: bold;
  font-size: 17px;
  line-height: 20px;
  /* identical to box height */
  text-align: center;
  color: #333333;

  @media (max-width: 850px) {
    font-size: 15px;
    line-height: 18px;

    text-align: center;

    color: #333333;
  }
`

export default function Logo() {
  return <LogoContainer>ClipboardHealth</LogoContainer>
}
