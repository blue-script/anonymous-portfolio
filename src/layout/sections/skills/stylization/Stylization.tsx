import React from "react";
import styled from "styled-components";
import {Icon} from "../../../../components/icon/Icon";
import {theme} from "../../../../styles/Theme";
import groupLeftSIdeSkills from "../../../../assets/images/groupLeftSIdeSkills.svg"

export const Stylization = () => {
  return (
      <StyledStylization>
        {/*<div>*/}
        {/*  <Icon iconId="squareCicle" width="63" height="63" viewBox="0 0 63 63"/>*/}
        {/*</div>*/}
        {/*<div>*/}
        {/*  <Square width={"86px"}/>*/}
        {/*</div>*/}
        {/*<div>*/}
        {/*  <Icon iconId={"logoNotBackground113"} width={"114"} height={"114"} viewBox={"0 0 114 114"}/>*/}
        {/*</div>*/}
        {/*<div>*/}
        {/*  <Icon iconId="squareCicle" width="63" height="63" viewBox="0 0 63 63"/>*/}
        {/*</div>*/}

        <img src={groupLeftSIdeSkills} alt={"some style"}/>
      </StyledStylization>
  );
};

const StyledStylization = styled.div`
  width: 349px;
  height: 282px;
  margin-left: 32px;
  position: relative;

  // & > div:nth-of-type(1) {
  //   content: "";
  //   display: inline-block;
  //   position: absolute;
  //   left: 0;
  //   top: 38px;
  // }
  //
  // & > div:nth-of-type(2) {
  //   content: "";
  //   display: inline-block;
  //   position: absolute;
  //   right: 36px;
  //   top: 0;
  // }
  //
  // & > div:nth-of-type(3) {
  //   content: "";
  //   display: inline-block;
  //   position: absolute;
  //   left: 15px;
  //   bottom: 0;
  // }
  //
  // & > div:nth-of-type(4) {
  //   content: "";
  //   display: inline-block;
  //   position: absolute;
  //   right: 109px;
  //   bottom: 76px;
  // }
  //
  // &::before {
  //   content: "";
  //   display: inline-block;
  //   width: 52px;
  //   height: 52px;
  //   border: 1px solid ${theme.color.secondaryFont};
  //
  //   position: absolute;
  //   right: 0;
  //   bottom: 37px;
  // }
`;

// type SquarePropsType = {
//   width: string
// }
//
//
// const Square = styled.div<SquarePropsType>`
//   width: ${props => props.width};
//   height: ${props => props.width};
//   border: 1px solid ${theme.color.secondaryFont};
// `;
//
// const SquareCircle = styled.div`
//   display: flex;
//   width: 63px;
//   height: 63px;
//   flex-direction: column;
//   justify-content: space-between;
//   align-items: flex-start;
//   flex-shrink: 0;
// `;
