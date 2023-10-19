import React from "react";
import styled from "styled-components";
import { Icon } from "../../../components/icon/Icon";

export const Slogan = () => {
  return (
    <StyledSlogan>
      <Icon iconId="quote"/>
      <p>With great power comes great electricity bill</p>
      <Icon iconId="quote"/>
      <span>- Dr. Who</span>
    </StyledSlogan>
  );
};

const StyledSlogan = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 30vh;
  background-color: #fecccc
`;
