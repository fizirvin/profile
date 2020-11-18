import styled from '@emotion/styled'

export const ButtonsContainer = styled.div`
  height: 40px;
  width: 17%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 850px) {
    display: none;
  }
`

export const CompleteContainer = styled.div`
  display: flex;
  align-items: center;
  width: 47.6%;
  height: 54px;
  margin-left: 28vw;
`

export const PercentContainer = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const HeaderContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const IconsContainer = styled.div`
  width: 11.1%;
  display: flex;
  padding-left: 1.8%;
  padding-right: 1.8%;
  justify-content: space-between;
  align-items: center;
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
  font-weight: bold;
  font-size: 17px;
  line-height: 20px;
  color: #333333;

  @media (max-width: 850px) {
    height: 18px;
    font-size: 15px;
    line-height: 18px;
  }
`

export const MainContainer = styled.main`
  width: 100%;
  margin-top: 30px;
`

export const NavContainer = styled.nav`
  width: 72.2%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 850px) {
    height: 40px;
  }
`

export const UListContainer = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 850px) {
    display: none;
    flex-direction: column;
    align-items: initial;
    z-index: 1000;
  }
`

export const ListItem = styled.li`
  font-size: 14px;
  line-height: 16px;
  :hover {
    cursor: pointer;
    opacity: 1;
    visibility: visible;
  }
`

export const UserContainer = styled.nav`
  width: 9.9%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  justify-self: flex-end;
  @media (max-width: 850px) {
    display: none;
  }
`
