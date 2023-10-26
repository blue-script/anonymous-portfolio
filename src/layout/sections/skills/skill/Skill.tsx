import React from "react";
import styled from "styled-components";
import {theme} from "../../../../styles/Theme";

type SkillPropsType = {
  generalSkill: string;
  skills: string;
};

export const Skill = (props: SkillPropsType) => {
  return (
    <StyledSkill>
      <GeneralTitle>{props.generalSkill}</GeneralTitle>
      <SkillsText>{props.skills}</SkillsText>
    </StyledSkill>
  );
};

const StyledSkill = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  max-width: 178px;
  width: 100%;
`;
const GeneralTitle = styled.div`
  border: 1px solid ${theme.color.secondaryFont};
  font-size: 16px;
  font-weight: 600;
`;
const SkillsText = styled.div`
  border: 1px solid ${theme.color.secondaryFont};
  color: ${theme.color.secondaryFont};
  font-size: 16px;
  font-weight: 400;
`;
