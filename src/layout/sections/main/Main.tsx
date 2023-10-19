import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import imgAnon from "../../../assets/images/anon-1.png";
import { Quote } from "../quote/Quote";

export const Main = () => {
  return (
    <StyledMain>
      <FlexWrapper justify={"space-around"} align={"center"}>
        <div>
          <MainTitle>
            Aleksandr is a web designer and front-end developer
          </MainTitle>
          <p>
            He crafts responsive websites where technologies meet creativity
          </p>
          <button>Contact me!!</button>
        </div>
        <div>
          <Photo src={imgAnon} alt="photo anonymous" />
          <FlexWrapper>
            <Rect />
            <span>Currently working on Portfolio</span>
          </FlexWrapper>
        </div>
      </FlexWrapper>
    </StyledMain>
  );
};

const StyledMain = styled.main`
  background-color: #a29a9a;
  height: 100vh;
`;

const MainTitle = styled.h1``;

const Photo = styled.img`
  width: 457px;
  height: 386px;
  /* object-fit: initial; */
  overflow: hidden;
`;

const Rect = styled.div`
  width: 16px;
  height: 16px;
  border: 1px solid #c778dd;
  background-color: #c778dd;
`;
