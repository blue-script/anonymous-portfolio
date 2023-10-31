import React from 'react';
import styled from 'styled-components';
import { Icon } from '../../../components/icon/Icon';
import {theme} from "../../../styles/Theme";

export const MobileSocial = () => {
    return (
        <StyledMobileSocial>
            <Icon iconId={"github"} width={"64"} height={"64"} viewBox={"0 0 32 32"} />
            <Icon iconId={"linkedin"} width={"64"} height={"64"} viewBox={"-4 -4 32 32"} />
            <Icon iconId={"figma"} width={"64"} height={"64"} viewBox={"0 0 32 32"} />
        </StyledMobileSocial>
    );
};

const StyledMobileSocial = styled.aside`
  display: none;

  @media ${theme.media.tablet} {
    position: fixed;
    display: flex;
    justify-content: center;
    margin: 0 auto;
    gap: 8px;
    top: unset;
    bottom: 36px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 99999;
  }

`