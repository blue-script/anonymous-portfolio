import React from "react";
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import imgAnon from "../../../assets/images/anon-1.png";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";
import {Button} from "../../../components/Button";
import {Icon} from "../../../components/icon/Icon";
import {font} from "../../../styles/Common";

export const Main = () => {
  return (
      <StyledMain>
        <Container>
          <FlexWrapper justify={"space-around"} align={"center"} wrap={"wrap"}>
            <LeftSide>
              <MainTitle>
                Aleksandr is a <span>web designer</span> and <span>front-end developer</span>
              </MainTitle>
              <MainText>
                He crafts responsive websites where technologies meet creativity
              </MainText>
              <Button>Contact me!!</Button>
            </LeftSide>
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

const StyledMain = styled.section`
  height: 100vh;
  display: flex;
`;

const LeftSide = styled.div`
  max-width: 538px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  
  @media ${theme.media.mobile} {
    & button {
      display: none;
    }
  }
`

const MainTitle = styled.h1`
  ${font({weight: 600, Fmin: 28, Fmax: 32})}
  
  & span {
    color: ${theme.color.accent};
    font-size: 32px;
    font-style: normal; 
  }
`;

const MainText = styled.p`
  color: ${theme.color.secondaryFont};
  font-size: 16px;
  font-weight: 400;
  line-height: 25px; /* 156.25% */
  margin: 25px 0 0;
  max-width: 464px;
`;

const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  min-width: 316px;
`

const PhotoWrapper = styled.div`
  display: flex;
  position: relative;

  div:nth-child(2) {
    position: absolute;
    left: -12px;
    top: 84px;
    z-index: -1;
    
    @media ${theme.media.mobile} {
      top: 56px;
      left: -8px;
    }
  }

  div:nth-child(3) {
    position: absolute;
    right: 16px;
    bottom: 56px;
    z-index: 1;

    @media ${theme.media.mobile} {
      bottom: 38px;
      right: 10px;
    }
  }
`

const PhotoContent = styled.div`
  width: 458px;
  height: 386px;
  overflow: hidden;

  @media ${theme.media.mobile} {
    width: 308px;
    height: 260px;
  }
`

const Photo = styled.img`
  z-index: 0;
  width: 142%;
  margin-left: -130px;
  margin-top: -75px;

  @media ${theme.media.mobile} {
    margin-left: -87px;
    margin-top: -51px;
  }
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

  @media ${theme.media.mobile} {
    margin: 0;
  }
`

const Rect = styled.div`
  width: 16px;
  height: 16px;
  border: 1px solid #c778dd;
  background-color: #c778dd;
`;