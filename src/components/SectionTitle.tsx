import React from 'react';
import styled from 'styled-components';
import {Icon} from './icon/Icon';
import {theme} from "../styles/Theme";

type SectionTitlePropsType = {
  sectionName: string
  lineWidth?: string
}

export const SectionTitle = (props: SectionTitlePropsType) => {
  return (
      <StyledSectionTitle lineWidth={props.lineWidth}>
        <Char>#</Char>
        <span>{props.sectionName}</span>
      </StyledSectionTitle>
  );
};

type StyledSectionTitle = {
  lineWidth?: string
}

const StyledSectionTitle = styled.h2<StyledSectionTitle>`
  text-align: start;

  & span:last-child {
    font-size: 32px;
    font-weight: 500;
    position: relative;

    &::after {
      content: "";
      display: inline-block;
      background-color: ${theme.color.accent};
      width: ${props => props.lineWidth || "200px"};
      height: 1px;
      position: absolute;
      margin-left: 16px;
      top: 50%;
    }
  }
`

const Char = styled.span`
  color: #C778DD;
`

