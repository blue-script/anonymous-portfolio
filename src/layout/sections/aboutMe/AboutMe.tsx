import React from "react";
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Button} from "../../../components/Button";
import imgAnon from "../../../assets/images/anon-2.png";
import {Container} from "../../../components/Container";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Icon} from "../../../components/icon/Icon";
import {theme} from "../../../styles/Theme";

export const AboutMe = () => {
  return (
      <StyledAboutMe>
        <Container>
          <FlexWrapper justify={"space-between"}>
            <LeftSide>
              <SectionTitle sectionName="about-me"/>
              <Text>
                Hello, i’m Elias!
                <p>
                  I’m a self-taught front-end developer based in Kyiv, Ukraine. I can develop responsive websites from
                  scratch and raise them into modern user-friendly web experiences.
                </p>
                Transforming my creativity and knowledge into a websites has been my passion for over a year. I have
                been helping various clients to establish their presence online. I always strive to learn about the
                newest technologies and frameworks.
              </Text>
              <Button>Read more {"->"}</Button>
            </LeftSide>
            <RightSide>
              <ImgWrapper>
                <Icon iconId={"squareCicle"} width={"84"} height={"84"} viewBox={"0 0 84 84"}/>
                <Img src={imgAnon} alt=""/>
                <Icon iconId={"squareCicle"} width={"104"} height={"56"} viewBox={"0 0 104 56"}/>
              </ImgWrapper>
            </RightSide>
          </FlexWrapper>
        </Container>
        <Icon iconId={"squareCicle"} width={"104"} height={"56"} viewBox={"0 0 104 56"}/>
      </StyledAboutMe>
  );
};

const StyledAboutMe = styled.section`
  min-height: 80vh;
  display: flex;
  // тут не сработал
  height: max-content;
  position: relative;

  &>svg:last-child {
    position: absolute;
    top: 70%;
    right: -23px;
  }
`;

const LeftSide = styled.div``;

const Text = styled.p`
  margin: 23px 0 27px;
  max-width: 516px;
  width: 100%;
  line-height: 26px;
  
  & > p{
    margin: 1.6em 0;
  }
`

const Img = styled.img`
  width: 339px;
  height: 507px;
  object-fit: cover;
`;

const RightSide = styled.div`
  max-width: 340px;
  width: 100%;
  max-height: 508px;
  height: 100%;
`;

const ImgWrapper = styled.div`
  position: relative;

  svg:first-child {
    position: absolute;
    top: 59px;
    left: -4px;
  }

  svg:last-child {
    position: absolute;
    bottom: 172px;
    right: 16px;
  }

  &::after {
    content: "";
    display: inline-block;
    width: 272px;
    height: 1px;
    background-color: ${theme.color.accent};

    position: absolute;
    bottom: 0;
    right: 24px;
  }
`

