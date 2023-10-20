import React from 'react';
import {Icon} from '../icon/Icon';
import styled from 'styled-components';
import {theme} from "../../styles/Theme";

export const Logo = () => {
    return (
        <StyledLogo href="#">
            <Icon iconId={"logo"} width={"16"} height={"17"} viewBox={"0 0 16 17"}/>
            <span>Aleksandr</span>
        </StyledLogo>
    );
};

const StyledLogo = styled.a`
display: flex;
align-items: center;
gap: 5px;
span {
  font-family: 'Fira Code', sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: normal;
  color: ${theme.color.primaryFont};
}
`