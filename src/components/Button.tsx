import styled from "styled-components";
import {theme} from "../styles/Theme";
export const Button = styled.button`
  width: 148px;
  height: 37px;
  padding: 8px 16px;
  margin: 1px;
  border: 1px solid ${theme.color.accent};
  font-size: 16px;
  font-weight: 500;
  color: ${theme.color.primaryFont};
`