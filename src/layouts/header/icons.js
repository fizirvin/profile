import React, { useState } from 'react'
import styled from '@emotion/styled'

const IconDiv = styled.div`
  align-items: center;
  display: flex;
  position: absolute;
  width: 116px;
  height: 60px;
  left: 983.5px;
  top: 0px;

  @media (max-width: 850px) {
  }

  div {
    border-radius: 100%;
    background: #ffffff;
    border: 0.75px solid #e1e1e1;
    width: 30px;
    height: 30px;
    margin: 0 5px;
  }
`

export default function Icons() {
  return (
    <IconDiv>
      <div></div>
      <div></div>
    </IconDiv>
  )
}
