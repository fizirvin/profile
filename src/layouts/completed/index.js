import React from 'react'
import { Container, ContainerDiv, MainContainer } from './styles'
import Percent from './percent'

export default function Completed() {
  return (
    <MainContainer>
      <ContainerDiv>
        <Container>
          <Percent progress={'5%'} />
        </Container>
      </ContainerDiv>
    </MainContainer>
  )
}
