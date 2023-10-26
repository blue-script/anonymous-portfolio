import React from "react";
import styled from "styled-components";
import { Icon } from "../../../components/icon/Icon";
import {theme} from "../../../styles/Theme";
import {Container} from "../../../components/Container";
import {FlexWrapper} from "../../../components/FlexWrapper";
import qu from "../../../assets/images/quote.svg"

export const Slogan = () => {
  return (
    <StyledSlogan>
      <Container>
        <FlexWrapper justify={"center"}>
          <QuoteWrapper>
            <Quote>With great power comes great electricity bill</Quote>
            <Signature>- Dr. Who</Signature>
          </QuoteWrapper>
        </FlexWrapper>
      </Container>
    </StyledSlogan>
  );
};

const StyledSlogan = styled.section`
`;

const QuoteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  border-collapse: collapse;
  width: max-content;
`

const Quote = styled.p`
  font-size: 24px;
  font-weight: 500;
  padding: 32px;
  border: 1px solid ${theme.color.secondaryFont};

  position: relative;
  
  &::before {
    content: url(${qu});
    padding: 4px 8px;
    position: absolute;
    display: inline-block;
    left: 19px;
    top: 0;
    transform: translateY(-50%);
    background-color: ${theme.color.bg};
  }
  
  &::after {
    content: url(${qu});
    padding: 4px 8px;
    position: absolute;
    display: inline-block;
    right: 16px;
    bottom: 0;
    transform: translateY(50%);
    background-color: ${theme.color.bg};
  }
`

const Signature = styled.span`
  font-size: 24px;
  font-weight: 400;
  padding: 15px;
  border: 1px solid ${theme.color.secondaryFont};
`
