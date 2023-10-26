import React from "react";
import styled from "styled-components";
import {Skill} from "./skill/Skill";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {Stylization} from "./stylization/Stylization";
import {Container} from "../../../components/Container";

export const Skills = () => {
  return (
      <StyledSkills>
        <Container>
          <SectionTitle sectionName={"skills"} lineWidth={"239px"}/>
          <FlexWrapper justify="space-between">
            <Stylization/>
            <SkillsWrapper>
              <Skill generalSkill="Languages" skills="TypeScript Lua Python JavaScript "/>
              <Skill generalSkill="Databases" skills="SQLite PostgreSQL Mongo"/>
              <Skill generalSkill="Other" skills="HTML CSS EJS SCSS REST Jinja "/>
              <Skill generalSkill="Tools"
                     skills="VSCode Neovim Linux Figma XFCE Arch Git Font Awesome "/>
              <Skill generalSkill="Frameworks" skills="React Vue Disnake Discord.js Flask Express.js"/>
            </SkillsWrapper>
          </FlexWrapper>
        </Container>
      </StyledSkills>
  );
};

const StyledSkills = styled.section`
  display: flex;
  // правильно ли так задается высота?
  height: max-content;
  
  ${FlexWrapper} {
    margin-top: 12px;
  }
`;

const SkillsWrapper = styled.div`
  padding-top: 31px;
  max-height: 280px;
  //min-width: 584px;
  display: flex;
  flex-direction: column;
  direction: rtl;
  justify-content: flex-start;
  //align-items: flex-start;
  flex-wrap: wrap;
  gap: 8px 16px;
`;
