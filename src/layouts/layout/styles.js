import styled from '@emotion/styled'

export const FooterContainer = styled.main`
  width: 100%;
  margin-top: 60px;
  height: 270px;
  background: #fcfcfc;
`

export const FooterContent = styled.main`
  display: flex;
  width: 70%;
  height: 100%;
  margin: 0 auto;

  @media (max-width: 850px) {
    width: 100%;
  }
`

export const AboutContent = styled.main`
  width: 40%;
  height: 100%;
  margin: 5% 5%;

  font-family: Raleway;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 25px;
  /* or 179% */

  color: #7c7c7c;

  @media (max-width: 850px) {
    width: 100%;
  }
`
