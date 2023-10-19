import React from "react";
import styled from "styled-components";
import { Skill } from "./skill/Skill";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionTitle } from "../../../components/SectionTitle";
import { Stylization } from "./stylization/Stylization";
import { GridWrapper } from "../../../components/GridWrapper";

export const Skills = () => {
  return (
    <StyledSkills>
      <SectionTitle sectionName={"skills"} />
      <FlexWrapper justify="space-around">
        <Stylization />
        <SkillsWrapper>
          <Skill generalSkill="Languages" skills="TypeScript JavaScript" />
          <Skill generalSkill="Databases" skills="SQLite SQL" />
          <Skill generalSkill="Other" skills="HTML CSS" />
          <Skill
            generalSkill="Tools"
            skills="VSCode WebStorm Figma Git Linux"
          />
          <Skill generalSkill="Frameworks" skills="React Vue" />
        </SkillsWrapper>
      </FlexWrapper>
    </StyledSkills>
  );
};

const StyledSkills = styled.section`
  min-height: 80vh;
  background-color: #6a6262;
`;

const SkillsWrapper = styled.div`
  max-height: 150px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 16px;
`;
