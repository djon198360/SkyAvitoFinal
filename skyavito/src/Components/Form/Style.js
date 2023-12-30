import styled from "styled-components";

export const Button = styled.button.attrs((props) => ({
  type: props.type,
}))`
  margin-left: 10px;
  width: 158px;
  height: 50px;
  background: #009ee4;
  border: 1px solid #009ee4;
  border-radius: 6px;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  &:hover {
    background: #0080c1;
    border: 1px solid #0080c1;
  }
`;

export const Input = styled.input.attrs((props) => ({
  type: props.type,
}))`
  width: ${(props) => props.width ?? "20%"};
  margin-left: 10px;
  height: ${(props) => props.height ?? "50px"}; // 50px;
  padding: 13px 19px;
  background-color: transparent;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  font-size: 16px;
  line-height: 24px;
  color: #000;
`;
/* width: 100%;
height: 50px;
border-width: 1px;
border-style: solid;
border-color: rgba(0, 0, 0, 0.2);
border-radius: 6px;
background-color: transparent;
padding: 13px 19px;
font-style: normal; */
