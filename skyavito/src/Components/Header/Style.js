import styled from "styled-components";

export const Header = styled.header`
  background-color: #009ee4;
`;

export const Nav = styled.nav`
  max-width: 1178px;
  margin: 0 auto;
  padding: 0 10px;
  height: 79px;
  display: flex;
  align-items: center;
  justify-content: end;
`;
export const ButtonHeader = styled.button.attrs((props) => ({
  type: props.type,
}))`
  width: 224px;
  height: 40px;
  border: 1px solid #ffffff;
  border-radius: 6px;
  background-color: #009ee4; /* transparent; */
  color: #ffffff;
  font-size: 16px;
  line-height: 1;
  &:hover {
    background: rgba(255, 255, 255, 0.15);
  }
`;
