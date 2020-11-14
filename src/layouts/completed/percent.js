import React from 'react'
import styled from '@emotion/styled'

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  @media (max-width: 850px) {
    display: block;
    margin-left: 10%;
  }
`

const CancelButton = styled.div`
  width: 68px;
  height: 35px;
  background: #ffffff;
  border: 1px solid #e1e1e1;
  box-sizing: border-box;
  border-radius: 3px;

  font-family: Raleway;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;

  color: #333333;

  display: flex;
  align-items: center;
  justify-content: center;
`

const SaveButton = styled.div`
  margin-left: 20px;
  width: 68px;
  height: 35px;

  font-family: Raleway;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  color: #ffffff;
  background: #2cb1f4;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const ButtonContainer = styled.div`
  display: flex;
  align-self: center;

  @media (max-width: 850px) {
    margin-top: 3%;
  }
`

const Progress = styled.div`
  display: flex;
  align-self: center;

  span {
    color: #2cb1f4;
    font-weight: bold;
    margin-left: 8px;
    margin-right: 8px;
  }
`

export default function Percent({ progress }) {
  return (
    <Container>
      <Progress>
        Your profile is <span>{progress}</span> completed
      </Progress>
      <ButtonContainer>
        <CancelButton>Cancel</CancelButton>
        <SaveButton>Save</SaveButton>
      </ButtonContainer>
    </Container>
  )
}
