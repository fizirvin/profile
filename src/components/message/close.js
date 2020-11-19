import React from 'react'
import { Link } from 'react-router-dom'
import styled from '@emotion/styled'
import { useDispatch } from 'react-redux'

export const OkButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  height: 35px;
  background: #ffffff;
  border: 1px solid #2cb1f4;
  box-sizing: border-box;
  border-radius: 3px;

  color: #2cb1f4;

  :hover {
    cursor: pointer;
  }
`

export default function Close({ action, to }) {
  const dispatch = useDispatch()
  return (
    <Link to={to}>
      <OkButton onClick={() => dispatch({ type: action })}>Ok</OkButton>
    </Link>
  )
}
