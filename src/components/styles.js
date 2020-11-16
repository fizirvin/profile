import styled from '@emotion/styled'

export const SubtitleDiv = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  font-family: Raleway;
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
  line-height: 20px;
  margin-top: 25px;

  @media (max-width: 850px) {
    margin-left: 5px;
    margin-right: 5px;
  }
`

export const LineSpan = styled.div`
  margin-left: 2%;
  width: 100%;
  height: 1.5px;
  background-color: #e1e1e1;
  border: 1px solid #e1e1e1;
`

export const Label = styled.div`
  height: 16px;
  font-family: 'Raleway';
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  color: #7c7c7c;
  margin-bottom: 11px;
  margin-top: 11px;
`
export const Input = styled.input`
  width: 100%;
  height: 35px;
  background: #ffffff;
  border: 1px solid #d5d5d5;
  box-sizing: border-box;
  border-radius: 3px;
  padding-left: 10px;

  font-family: Raleway;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;

  color: #7c7c7c;

  :focus {
    outline-color: #2cb1f4;
  }
`

export const AllInput = styled.input`
  height: 35px;
  width: 100%;
  padding-left: 10px;
  background: #ffffff;
  border: 1px solid #d5d5d5;
  box-sizing: border-box;
  border-radius: 3px;

  font-family: Raleway;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;

  color: #7c7c7c;

  :focus {
    outline-color: #2cb1f4;
  }
`

export const InputContainer = styled.div`
  @media (max-width: 850px) {
    margin-left: 5px;
    margin-right: 5px;
  }
`

export const Button = styled.button`
  width: 100%;
  height: 35px;
  background: #ffffff;
  border: 1px solid #2cb1f4;
  box-sizing: border-box;
  border-radius: 3px;
  font-family: Raleway;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  color: #2cb1f4;
`

export const AddButtonStyled = styled.div`
  margin-top: 24px;
  width: 240px;
  height: 35px;
  background: #2cb1f4;
  border-radius: 3px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 850px) {
    margin-left: 5px;
    margin-right: 5px;
    margin: 24px auto;
  }
`

export const ButtonTitle = styled.div`
  height: 16px;
  font-family: Raleway;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  color: #ffffff;
`

export const TextArea = styled.textarea`
  width: 100%;
  background: #ffffff;
  border: 1px solid #d5d5d5;
  box-sizing: border-box;
  border-radius: 3px;
  resize: none;

  padding-left: 10px;
  padding-top: 6px;

  font-family: Raleway;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;

  color: #7c7c7c;

  :focus {
    outline-color: #2cb1f4;
  }
`
export const Select = styled.select`
  width: 100%;
  height: 35px;
  background: #ffffff;
  border: 1px solid #d5d5d5;
  box-sizing: border-box;
  border-radius: 3px;
  padding-left: 10px;
  font-family: Raleway;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;

  color: #7c7c7c;

  :focus {
    outline-color: #2cb1f4;
  }
`

export const Picture = styled.div`
  width: 100%;
  height: 78%;
  margin-right: 20px;
  background: #e9e9e9;
  border-radius: 2.5px;
`

export const SwitchDiv = styled.div`
  height: 35px;

  position: relative;
  width: 100%;

  input {
    cursor: pointer;
    height: 100%;
    opacity: 0;
    position: absolute;
    width: 100%;
    z-index: 100;
  }

  label {
    background: #ff5b5b;
    border-radius: 2px;
    display: block;
    height: 100%;
    position: relative;
    width: 100%;
  }

  label div {
    background: #fff; // white square
    border-radius: 2px;
    display: block;
    height: 90%;
    left: 75px;
    position: absolute;
    top: 1.5px;
    width: 50%;
    z-index: 3;
  }

  .fontawesome-ok {
    left: 25px;
    position: relative;
    top: 8px;
    z-index: 2;

    font-family: Raleway;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    color: #ffffff;
  }

  .fontawesome-remove {
    left: 80px;
    position: relative;
    top: 8px;
    z-index: 2;

    font-family: Raleway;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    color: #ffffff;
  }

  input:checked ~ label {
    background: #2cb1f4;
  }

  input:checked ~ label div {
    left: 2px;
  }

  @media (max-width: 850px) {
    width: 45%;
  }
`
