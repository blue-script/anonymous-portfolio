import React from "react";
import styled from "styled-components";

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
      <h3>{props.title}</h3>
      <p>{props.text}</p>
      <Link href="#">Live</Link>
      <Link href="#">Cached</Link>
    </StyledWork>
  );
};

const StyledWork = styled.div`
  max-width: 330px;
  width: 100%;
  border: 1px solid white;
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
`;

const Tools = styled.span`
  display: inline-block;
`;
const Link = styled.a`
  display: inline-block;
`;
