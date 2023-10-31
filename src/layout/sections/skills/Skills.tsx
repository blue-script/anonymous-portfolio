import React from "react";
import styled from "styled-components";
import {Skill} from "./skill/Skill";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {Stylization} from "./stylization/Stylization";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";

export const Skills = () => {
  return (
      <StyledSkills>
        <Container>
          <SectionTitle sectionName={"skills"} lineWidth={"239px"}/>
          <FlexWrapper justify="space-between">
            <Stylization/>
            <SkillsWrapper>
              <ColumnWrapper>
                <Skill generalSkill="Languages" skills="TypeScript Lua Python JavaScript "/>
              </ColumnWrapper>
              <ColumnWrapper>
                <Skill generalSkill="Databases" skills="SQLite PostgreSQL Mongo"/>
                <Skill generalSkill="Other" skills="HTML CSS EJS SCSS REST Jinja "/>
              </ColumnWrapper>
              <ColumnWrapper width={"196px"}>
                <Skill generalSkill="Tools"
                       skills="VSCode Neovim Linux Figma XFCE Arch Git Font Awesome "/>
                <Skill generalSkill="Frameworks" skills="React Vue Disnake Discord.js Flask Express.js"/>
              </ColumnWrapper>
            </SkillsWrapper>
          </FlexWrapper>
        </Container>
      </StyledSkills>
  );
};

const StyledSkills = styled.section`
  ${FlexWrapper} {
    @media ${theme.media.tablet} {
      flex-direction: column;
      align-items: center;
    } 
  }
`;

const SkillsWrapper = styled.div`
  padding-top: 31px;
  display: flex;
  justify-content: flex-start;
  flex-wrap: nowrap;
  gap: 16px;

  @media ${theme.media.mobile} {
    gap: 8px;
    flex-wrap: wrap;
  }
`;

const ColumnWrapper = styled.div<{ width?: string }>`
  max-width: ${props => props.width || "178px"};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  
  @media ${theme.media.tablet} {
    max-width: 700px;
    width: 100%;
  }
`
