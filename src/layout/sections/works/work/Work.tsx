import React from "react";
import styled from "styled-components";
import {theme} from "../../../../styles/Theme";
import {Button} from "../../../../components/Button";

type WorkPropsType = {
  src: string;
  enumTools: string;
  title: string;
  text: string;
};

export const Work = (props: WorkPropsType) => {
  return (
    <StyledWork>
      <Image src={props.src} alt="projects image" />
      <Tools>{props.enumTools}</Tools>
      <Description>
        <WorkTitle>{props.title}</WorkTitle>
        <WorkText>{props.text}</WorkText>
        <Button>Live &#8249;&#8764;&#8250;</Button>
        <Button>Cached &#8805;</Button>
      </Description>
    </StyledWork>
  );
};

const StyledWork = styled.div`
  width: 331px;
  border: 1px solid ${theme.color.secondaryFont};
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
`;

const Tools = styled.span`
  display: block;
  padding: 8px;
  border-top: 1px solid ${theme.color.secondaryFont};
  border-bottom: 1px solid ${theme.color.secondaryFont};
  color: ${theme.color.secondaryFont};
  font-size: 16px;
  font-weight: 400;
`;

const Description = styled.div`
  padding: 16px;
  
  ${Button}:last-child {
    margin-left: 16px;
    color: ${theme.color.secondaryFont};
    border-color: ${theme.color.secondaryFont};
  }
`

const WorkTitle = styled.h3`
  font-size: 24px;
  font-weight: 500;
`

const WorkText = styled.p`
  color: ${theme.color.secondaryFont};
  margin: 16px 0;
  font-size: 16px;
  font-weight: 400;
`