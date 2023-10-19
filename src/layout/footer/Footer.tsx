import React from "react";
import styled from "styled-components";
import { Signatures } from "./signatures/Signatures";
import { Media } from "./media/Media";
import { FlexWrapper } from "../../components/FlexWrapper";

export const Footer = () => {
  return (
    <StyledFooter>
      <FlexWrapper justify="space-around" gap="50px">
        <Signatures />
        <Media />
      </FlexWrapper>
      <Copyright>© Copyright 2022. Made by Aleksandr</Copyright>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  border-top: 2px solid white;
  min-height: 75px;
  min-width: 500px;
  background-color: #a3a3a3;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Copyright = styled.small``;
