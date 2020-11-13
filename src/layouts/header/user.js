import React, { useState } from 'react'
import styled from '@emotion/styled'

const UserDiv = styled.div`
  align-items: center;
  display: flex;

  @media (max-width: 850px) {
  }

  div {
    position: absolute;
    width: 54px;
    height: 16px;
    left: 1133px;
    top: 22px;

    font-family: Raleway;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    text-align: right;

    color: #333333;
  }

  img {
    position: absolute;
    width: 40px;
    height: 40px;
    left: 1200px;
    top: 10px;
    background: #d8d8d8;
    border-radius: 2.5px;
  }
`

export default function User() {
  return (
    <UserDiv>
      <div>Beatrice</div>
      <img src={'https://fiz-app-images.s3.amazonaws.com/1576791840842'}></img>
    </UserDiv>
  )
}
