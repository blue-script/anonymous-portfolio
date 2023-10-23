import React from "react";
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import imgAnon from "../../../assets/images/anon-1.png";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";
import {Button} from "../../../components/Button";
import {Icon} from "../../../components/icon/Icon";

export const Main = () => {
  return (
      <StyledMain>
        <Container>
          <FlexWrapper justify={"space-between"} align={"center"}>
            <div>
              <MainTitle>
                Aleksandr is a <span>web designer</span> and <span>front-end developer</span>
              </MainTitle>
              <MainText>
                He crafts responsive websites where technologies meet creativity
              </MainText>
              <Button>Contact me!!</Button>
            </div>
            <RightSide>
              <PhotoWrapper>
                <PhotoContent>
                  <Photo src={imgAnon} alt={"photo"}/>
                </PhotoContent>
                <div>
                  <Icon iconId={"logoNotBackground"} width={"156"} height={"156"} viewBox={"0 0 156 156"}/>
                </div>
                <div>
                  <Icon iconId={"squareCicle"} width={"84"} height={"84"} viewBox={"0 0 65 65"}/>
                </div>
              </PhotoWrapper>
              <TextUnderMainPhoto>
                <Rect/>
                <p>Currently working on <span>Portfolio</span></p>
              </TextUnderMainPhoto>
            </RightSide>
          </FlexWrapper>
        </Container>
      </StyledMain>
  );
};

const StyledMain = styled.main`
  height: 100vh;
  display: flex;
`;

const MainTitle = styled.h1`
  font-size: 32px;
  font-weight: 600;

  & span {
    color: ${theme.color.accent};
    font-size: 32px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
`;

const MainText = styled.p`
  color: ${theme.color.secondaryFont};
  font-size: 16px;
  font-weight: 400;
  line-height: 25px; /* 156.25% */
  margin: 32px 0 24px;
  max-width: 464px;
`;

const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const PhotoWrapper = styled.div`
  display: flex;
  position: relative;

  div:nth-child(2) {
    position: absolute;
    left: -12px;
    top: 84px;
    z-index: -1;
  }

  div:nth-child(3) {
    position: absolute;
    right: 16px;
    bottom: 56px;
    z-index: 1;
  }
`

const PhotoContent = styled.div`
  width: 457px;
  height: 386px;
  overflow: hidden;
`

const Photo = styled.img`
  //background-size: 142% 210%;
  //background-position: -130.245px -75.697px;
  z-index: 0;
  width: 142%;
  margin-left: -130px;
  margin-top: -75px;
`;

const TextUnderMainPhoto = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 402px;
  padding: 8px;
  align-items: center;
  gap: 10px;
  border: 1px solid ${theme.color.secondaryFont};
  margin-left: 20px;

  p {
    color: ${theme.color.secondaryFont};
    font-size: 16px;
    font-weight: 500;
  }

  p span {
    color: ${theme.color.primaryFont};
    font-weight: 600;
  }

`

const Rect = styled.div`
  width: 16px;
  height: 16px;
  border: 1px solid #c778dd;
  background-color: #c778dd;
`;


