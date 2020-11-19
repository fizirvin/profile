import React from 'react'
import styled from '@emotion/styled'
import Close from './close'

const RequestMessageArea = styled.div`
  width: 100%;
  padding-top: 20px;
  padding-bottom: 40px;
  border-bottom: 1px solid #e1e1e1;

  font-family: 'Raleway';
  font-style: normal;
  font-weight: normal;
  font-size: 23px;
  line-height: 27px;
  /* identical to box height */

  text-align: center;

  color: #333333;

  @media (max-width: 850px) {
    width: 100%;
  }
`

export default function Message({ message, action, to }) {
  return (
    <RequestMessageArea>
      {message}
      {message && <Close action={action} to={to} />}
    </RequestMessageArea>
  )
}
