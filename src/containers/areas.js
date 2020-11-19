import styled from '@emotion/styled'

export const CompleteArea = styled.div`
  height: 54px;
  width: 100%;
  margin-bottom: 1px;
  background: #ffffff;
  box-shadow: 0px 1px 0px #e0e0e0;
  @media (max-width: 850px) {
    display: none;
  }
`

export const FlexArea = styled.div(({ w }) => ({
  height: '100%',
  width: `${w}%`
}))

export const FlexTextArea = styled.div(({ w }) => ({
  height: '16px',
  width: `${w}%`,
  color: '#7c7c7c'
}))

export const HeaderArea = styled.header`
  height: 60px;
  width: 100vw;
  margin-bottom: 1px;
  background: #ffffff;
  box-shadow: 0px 1px 0px #e0e0e0;
`

export const IconArea = styled.div`
  height: 30px;
  width: 30px;
  border-radius: 100%;
  background: #ffffff;
  border: 0.75px solid #e1e1e1;
`

export const LoggedMenuArea = styled.div`
  height: 16px;
  width: 38.4%;
  margin-left: 17.7%;
  margin-right: 6%;
`

export const UnloggedMenuArea = styled.div`
  height: 16px;
  width: 16.3%;
  margin-left: 28.7%;
  margin-right: 24.85%;
`

export const UserImageArea = styled.div`
  width: 40px;
  height: 40px;

  img {
    width: 40px;
    height: 40px;
    background: #d8d8d8;
    border-radius: 2.5px;
  }
`

export const ModalArea = styled.div`
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 50px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100vw; /* Full width */
  height: 100vh; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.3); /* Black w/ opacity */
`
