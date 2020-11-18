import styled from '@emotion/styled'

export const CompleteArea = styled.div`
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
  width: `${w}%`
}))

export const HeaderArea = styled.header`
  height: 60px;
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
  margin-left: 17.8%;
  margin-right: 6.2%;
`

export const UnloggedMenuArea = styled.div`
  height: 16px;
  width: 16.3%;
  margin-left: 28.7%;
  margin-right: 24.85%;
`

export const UserImageArea = styled.div`
  width: 37.4%;
  height: 40px;

  img {
    width: 40px;
    height: 40px;
    background: #d8d8d8;
    border-radius: 2.5px;
  }
`
