import React from 'react'
import { CompleteArea, CompleteContainer } from 'containers'
import Percent from './percent'

export default function Completed() {
  return (
    <CompleteArea>
      <CompleteContainer>
        <Percent progress={'5%'} />
      </CompleteContainer>
    </CompleteArea>
  )
}
