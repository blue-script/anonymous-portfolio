import React from 'react';
import { Logo } from '../../../components/logo/Logo';
import styled from "styled-components";
import {theme} from "../../../styles/Theme";

export const Signatures = () => {
    return (
        <StyledSignatures>
          <LogoAndEmailWrapper>
            <Logo/>
            <Email>xx45xxz@gmail.com</Email>
          </LogoAndEmailWrapper>
            <p>Web designer and front-end developer</p>
        </StyledSignatures>
    );
};

const StyledSignatures = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  
  p {
    color: ${theme.color.primaryFont};
  }
`

const Email = styled.span`
  color: ${theme.color.secondaryFont};

`

const LogoAndEmailWrapper = styled.div`
  display: flex;
  gap: 24px;

`