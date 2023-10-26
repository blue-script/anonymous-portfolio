import React from "react";
import styled from "styled-components";
import {Signatures} from "./signatures/Signatures";
import {Media} from "./media/Media";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Container} from "../../components/Container";
import {theme} from "../../styles/Theme";

export const Footer = () => {
  return (
      <StyledFooter>
        <Container>
          <FlexWrapper justify="space-between" gap="10px">
            <Signatures/>
            <Media/>
          </FlexWrapper>
          <Copyright>© Copyright 2022. Made by Aleksandr</Copyright>
        </Container>
      </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  border-top: 1px solid ${theme.color.secondaryFont};
  padding: 32px 0;
`;

const Copyright = styled.small`
  display: flex;
  justify-content: center;
  color: ${theme.color.secondaryFont};
  margin-top: 48px;
`;
