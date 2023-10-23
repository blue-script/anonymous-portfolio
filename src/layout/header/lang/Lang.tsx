import React from "react";
import styled from "styled-components";
import {theme} from "../../../styles/Theme";

export const Lang = () => {
  return (
    <StyledLang name="" id="">
      <option value="">en</option>
      <option value="">ru</option>
    </StyledLang>
  );
};

const StyledLang = styled.select`
  background-color: ${theme.color.bg};
  border: none;
  border-radius: 0;
  color: ${theme.color.secondaryFont};
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 600;
  
  &:hover {
    color: ${theme.color.primaryFont};
  }
`;
