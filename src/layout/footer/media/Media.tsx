import React from "react";
import { Icon } from "../../../components/icon/Icon";
import { FlexWrapper } from "../../../components/FlexWrapper";
import styled from "styled-components";

export const Media = () => {
  return (
    <StyledMedia>
      <h3>Media</h3>
      <FlexWrapper gap={"8px"}>
        <Icon
          iconId={"github"}
          width={"32"}
          height={"32"}
          viewBox={"0 0 32 32"}
        />
        <Icon
          iconId={"linkedin"}
          width={"32"}
          height={"32"}
          viewBox={"-4 -4 32 32"}
        />
        <Icon
          iconId={"figma"}
          width={"32"}
          height={"32"}
          viewBox={"0 0 32 32"}
        />
      </FlexWrapper>
    </StyledMedia>
  );
};

const StyledMedia = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  
  h3 {
    font-size: 24px;
    font-weight: 500;
  }
`