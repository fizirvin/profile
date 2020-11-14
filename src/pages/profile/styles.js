import styled from '@emotion/styled'

export const ProfilesContainer = styled.main`
  display: flex;
  width: 100%;
  max-width: 100%;
`

export const SettingsContainer = styled.main`
  width: 50%;
  max-width: 50%;

  @media (max-width: 850px) {
    width: 100%;
    max-width: 100%;
  }
`

export const MenuContainer = styled.main`
  width: 28vw;

  @media (max-width: 850px) {
    display: none;
  }
  ul {
    width: 9.5vw;
    height: 110px;
    margin-left: 15vw;

    font-family: Raleway;
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 19px;
    /* or 146% */

    color: #333333;
  }
`

export const FlexContainer = styled.div`
  width: 100%;
  display: flex;

  @media (max-width: 850px) {
    display: block;
  }
`

export const BlockContainer = styled.div`
  display: block;
  width: 74.2%;

  margin-bottom: 0px;

  @media (max-width: 850px) {
    width: 100%;
    height: auto;
    margin-right: 0px;
  }
`

export const PictureContainer = styled.div`
  width: 22.7%;
  height: auto;
  margin-right: 20px;

  @media (max-width: 850px) {
    width: 100%;
    height: auto;
    margin-right: 0px;
  }
`

export const Section = styled.div`
  display: block;
`
export const RowContainer = styled.div`
  display: flex;
  width: 100%;

  @media (max-width: 850px) {
    width: 100%;
    display: block;
  }
`

export const Quart = styled.div`
  width: 22.7%;
  margin-right: 20px;

  @media (max-width: 850px) {
    width: 100%;
    margin-right: 0px;
  }
`

export const QuartLast = styled.div`
  width: 22.7%;
  @media (max-width: 850px) {
    width: 100%;
    margin-right: 0px;
  }
`

export const QuartHalf = styled.div`
  width: 35.7%;
  margin-right: 20px;
  @media (max-width: 850px) {
    width: 100%;
    margin-right: 0px;
  }
`

export const Half = styled.div`
  width: 48.5%;
  margin-right: 20px;
  @media (max-width: 850px) {
    width: 100%;
    margin-right: 0px;
  }
`

export const HalfLast = styled.div`
  width: 48.5%;
  @media (max-width: 850px) {
    width: 100%;
  }
`

export const Thirds = styled.div`
  width: 31.4%;
  margin-right: 20px;
  @media (max-width: 850px) {
    width: 100%;
    margin-right: 0px;
  }
`

export const ThirdsLast = styled.div`
  width: 31.4%;
  @media (max-width: 850px) {
    width: 100%;
  }
`

export const ThreeQuart = styled.div`
  width: 74.2%;
  margin-right: 20px;
  @media (max-width: 850px) {
    width: 100%;
    margin-right: 0px;
  }
`

export const ProgressContainer = styled.div`
  margin-top: 40px;
  padding-top: 30px;
  border-top: 2.5px solid #e1e1e1;

  @media (max-width: 850px) {
    width: 100%;
    margin-right: 0px;
  }
`
