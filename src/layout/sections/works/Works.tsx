import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { FlexWrapper } from "../../../components/FlexWrapper";
import {Work} from "./work/Work";
import imgProj1 from "../../../assets/images/projects/proj-1.png"
import imgProj2 from "../../../assets/images/projects/proj-2.jpg"
import imgProj3 from "../../../assets/images/projects/proj-3.jpg"

export const Works = () => {
  return (
    <StyledWorks>
      <SectionTitle sectionName={"projects"} />
      <FlexWrapper justify="space-around">
        <Work src={imgProj1} enumTools="HTML CSS JS TS" title="ChertNodes" text="Minecraft servers hosting "/>
        <Work src={imgProj2} enumTools="HTML CSS JS TS" title="ProtectX" text="Discord anti-crash bot"/>
        <Work src={imgProj3} enumTools="HTML CSS JS TS" title="Kahoot Answers Viewer" text="Get answers to your kahoot quiz"/>
      </FlexWrapper>
    </StyledWorks>
  );
};

const StyledWorks = styled.section`
  height: 100vh;
  background-color: #806a7c;
`;
