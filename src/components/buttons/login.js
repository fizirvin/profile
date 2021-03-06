import React from 'react'
import { Link } from 'react-router-dom'
import styled from '@emotion/styled'

const ButtonContainer = styled.div`
  width: 100%;
  height: 100%;
  background: #ffffff;
  border: 1px solid #2cb1f4;
  box-sizing: border-box;
  border-radius: 3px;

  color: #2cb1f4;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;

    font-family: Raleway;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
  }

  @media (max-width: 850px) {
  }
`

export default function LoginButton({ to }) {
  return (
    <ButtonContainer>
      <Link to={to}>Login</Link>
    </ButtonContainer>
  )
}
