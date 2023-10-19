import React from "react";
import styled from "styled-components";

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
`;
const GeneralTitle = styled.div`
  border: 1px solid white;
`;
const SkillsText = styled.div`
  border: 1px solid white;
`;
