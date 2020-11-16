import React from 'react'
import { Link } from 'react-router-dom'
import styled from '@emotion/styled'

const ButtonContainer = styled.div`
  width: 73.5px;
  height: 40px;

  background: #2cb1f4;
  border-radius: 3px;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    transition: color 200ms;

    font-family: 'Raleway';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    text-align: center;

    color: #ffffff;
  }

  @media (max-width: 850px) {
  }
`

export default function SignUpButton() {
  return (
    <ButtonContainer>
      <Link to={'/'}>Sign Up</Link>
    </ButtonContainer>
  )
}
