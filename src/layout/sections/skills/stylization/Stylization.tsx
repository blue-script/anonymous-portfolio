import React from "react";
import styled from "styled-components";
import { Icon } from "../../../../components/icon/Icon";

export const Stylization = () => {
  return (
    <StyledStylization>
      <Icon
        iconId={"logoNotBackground"}
        width={"114"}
        height={"114"}
        viewBox={"0 0 114 114"}
      />
      <Square />

      <Icon iconId="squareCicle" width="63" height="63" viewBox="0 0 63 63" />
    </StyledStylization>
  );
};

const StyledStylization = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Square = styled.div`
  width: 86px;
  height: 86px;
  flex-shrink: 0;
  border: 1px solid #abb2bf;
`;

const SquareCircle = styled.div`
  display: flex;
  width: 63px;
  height: 63px;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  flex-shrink: 0;
`;
