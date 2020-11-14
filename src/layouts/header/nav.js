import React from 'react'
import styled from '@emotion/styled'

const UList = styled.ul`
  display: flex;

  position: absolute;
  width: 399px;
  height: 16px;
  left: 36vw;
  top: 22px;

  li {
    position: relative;
    margin: 0 auto;

    font-family: Raleway;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
  }

  a {
    display: block;
    color: #eee;
    padding: 0 1.5rem;
    font-size: 1.4rem;
    text-transform: uppercase;
    transition: color 650ms;
  }

  a:hover {
    color: #eb3007;
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
  :hover > ul {
    top: 8rem;
    opacity: 1;
    visibility: visible;
  }
`

export default function Nav() {
  return (
    <UList>
      <Item>Profile</Item>
      <Item>Jobs</Item>
      <Item>Professional Network</Item>
      <Item>Lounge</Item>
      <Item>Salary</Item>
    </UList>
  )
}
