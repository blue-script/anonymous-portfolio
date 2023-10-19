import React from 'react';
import {Icon} from '../icon/Icon';
import styled from 'styled-components';

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
justify-content: center;
align-items: center;
gap: 5px;
text-decoration: none;
span {
    font-size: 16px;
    display: inline-block;
    vertical-align: center;
}
`