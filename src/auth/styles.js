import styled from '@emotion/styled'

export const LoginContainer = styled.main`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const FormContainer = styled.div`
  width: 35.5%;
  background: #ffffff;
  border: 1px solid #e1e1e1;
  box-sizing: border-box;
  border-radius: 2.5px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 850px) {
    width: 90%;
  }
`

export const LoginForm = styled.div`
  width: 88%;
`

export const TitleForm = styled.div`
  padding-top: 20px;
  padding-bottom: 40px;
  border-bottom: 1px solid #e1e1e1;

  font-family: 'Raleway';
  font-style: normal;
  font-weight: normal;
  font-size: 23px;
  line-height: 27px;
  /* identical to box height */

  text-align: center;

  color: #333333;
`

export const WithEmailButtonArea = styled.div`
  width: 100%;
  height: 60px;
  padding-top: 20px;
`

export const FooterForm = styled.div`
  width: 100%;
  height: 51px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #e1e1e1;
`

export const FooterText = styled.div`
  height: 16px;
  width: 43.5%auto;
  font-family: Raleway;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;

  color: #333333;
`

export const LoginButtonArea = styled.div`
  height: 35px;
  width: 17%;
`

export const RowContainer = styled.div`
  display: flex;
  width: 100%;

  @media (max-width: 850px) {
    width: 100%;
    display: block;
  }
`

export const Half = styled.div`
  width: 47.5%;
  margin-right: 20px;
  @media (max-width: 850px) {
    width: 100%;
    margin-right: 0px;
  }
`

export const HalfLast = styled.div`
  width: 47.5%;
  @media (max-width: 850px) {
    width: 100%;
  }
`

export const MessageErrorArea = styled.div`
  width: 100%;
  height: 16px;
  margin-top: 9px;
  font-family: Raleway;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;

  color: #ff5b5b;
  @media (max-width: 850px) {
    width: 100%;
  }
`

export const RequestMessageArea = styled.div`
  width: 100%;
  padding-top: 20px;
  padding-bottom: 40px;
  border-bottom: 1px solid #e1e1e1;

  font-family: 'Raleway';
  font-style: normal;
  font-weight: normal;
  font-size: 23px;
  line-height: 27px;
  /* identical to box height */

  text-align: center;

  color: #333333;

  @media (max-width: 850px) {
    width: 100%;
  }
`
