import React from 'react'
import { Link } from 'react-router-dom'
import styled from '@emotion/styled'

const UList = styled.ul`
  width: 16.5%;
  height: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;

  a {
    display: block;
    transition: color 200ms;
    font-family: Raleway;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    text-align: center;

    color: #7c7c7c;
  }

  a:hover {
    color: #2cb1f4;
  }

  @media (max-width: 850px) {
    height: 100vh;
    display: none;
    flex-direction: column;
    align-items: initial;
    z-index: 1000;
    background: #ffffff;

    li {
      line-height: 33px;
    }

    li:hover > ul {
      opacity: 1;
      visibility: visible;
      max-height: initial;
    }
  }
`

const Item = styled.li`
  font-family: 'Raleway';
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  text-align: center;

  :hover {
    cursor: pointer;
    opacity: 1;
    visibility: visible;
  }
`

export default function Menu() {
  return (
    <UList>
      <Item>
        <Link to={'/about'}>About</Link>
      </Item>
      <Item>
        <Link to={'/jobs'}>Jobs</Link>
      </Item>
      <Item>
        <Link to={'/lounge'}>Lounge</Link>
      </Item>
    </UList>
  )
}
