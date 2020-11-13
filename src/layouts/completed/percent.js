import React from 'react'
import styled from '@emotion/styled'

const PercentDiv = styled.div`
  display: flex;

  div {
    position: absolute;
    width: 184px;
    height: 16px;
    left: 376.5px;
    font-family: Raleway;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;

    color: #7c7c7c;
  }
`

export default function Percent({ progress }) {
  return (
    <PercentDiv>
      <div>Your profile is {progress}</div>
    </PercentDiv>
  )
}
