import React from 'react';
import styled from 'styled-components';
import { Icon } from './icon/Icon';

type SectionTitlePropsType = {
    sectionName: string
}

export const SectionTitle = (props: SectionTitlePropsType) => {
    return (
        <StyledSectionTitle>
            <Char>#</Char>
            <span>{props.sectionName}</span>
            <Icon iconId={"lineTitle"} width={"239"} height={"2"} viewBox={"0 0 239 2"}/>
        </StyledSectionTitle>
    );
};

const StyledSectionTitle = styled.h2`
    text-align: start;
`

const Char = styled.span`
    color: #C778DD ;
`

