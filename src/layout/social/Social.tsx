import React from 'react';
import styled from 'styled-components';
import { Icon } from '../../components/icon/Icon';

export const Social = () => {
    return (
        <StyledSocial>
            <Icon iconId={"line"} width={"2"} height={"191"} viewBox={"0 0 2 191"} />
            <Icon iconId={"github"} width={"32"} height={"32"} viewBox={"0 0 32 32"} />
            <Icon iconId={"linkedin"} width={"32"} height={"32"} viewBox={"-4 -4 32 32"} />
            <Icon iconId={"figma"} width={"32"} height={"32"} viewBox={"0 0 32 32"} />
        </StyledSocial>
    );
};

const StyledSocial = styled.aside`
    position: absolute;
    left: 17px;
    min-width: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
`