import styled from '@emotion/styled'

export const HeaderContainer = styled.header`
  width: 100%;
  margin-bottom: 1px;
  background: #ffffff;
  box-shadow: 0px 1px 0px #e0e0e0;
`
export const ContainerDiv = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0;
`

export const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;

  @media (max-width: 850px) {
    height: 40px;
  }
`
