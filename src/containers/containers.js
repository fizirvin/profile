import styled from '@emotion/styled'

export const HeaderContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ButtonsContainer = styled.div`
  width: 17%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 850px) {
    display: none;
  }
`

export const IconsContainer = styled.div`
  width: 11.15%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 850px) {
    display: none;
  }
`

export const LayoutContainer = styled.div`
  width: 100%;
  background-size: cover;
  background-color: #f2f2f2;
`

export const LogoContainer = styled.div`
  height: 20px;
  font-family: Raleway;
  font-style: normal;
  font-weight: bold;
  font-size: 17px;
  line-height: 20px;
  /* identical to box height */
  text-align: center;
  color: #333333;

  @media (max-width: 850px) {
    font-size: 15px;
    line-height: 18px;
    text-align: center;
    color: #333333;
  }
`

export const MainContainer = styled.main`
  width: 100%;
  margin-top: 30px;
`

export const NavContainer = styled.nav`
  width: 72.5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 850px) {
    height: 40px;
  }
`

export const UserContainer = styled.nav`
  width: 11.5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 850px) {
    display: none;
  }
`
