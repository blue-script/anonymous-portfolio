import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Button } from "../../../components/Button";
import imgAnon from "../../../assets/images/anon-2.png";

export const AboutMe = () => {
  return (
    <StyledAboutMe>
      <LeftSide>
        <SectionTitle sectionName="about-me" />
        <p>
          Hello, i’m Elias! I’m a self-taught front-end developer based in Kyiv,
          Ukraine. I can develop responsive websites from scratch and raise them
          into modern user-friendly web experiences. Transforming my creativity
          and knowledge into a websites has been my passion for over a year. I
          have been helping various clients to establish their presence online.
          I always strive to learn about the newest technologies and frameworks.
        </p>
        <Button>Read more</Button>
      </LeftSide>
      <RightSide>
        <Img src={imgAnon} alt="" />
      </RightSide>
    </StyledAboutMe>
  );
};

const StyledAboutMe = styled.section`
  min-height: 80vh;
  background-color: #c4e8f0;
  display: flex;
`;

const RightSide = styled.div``;
const LeftSide = styled.div``;
const Img = styled.img`
  width: 339px;
  height: 507px;
  object-fit: cover;
`;
