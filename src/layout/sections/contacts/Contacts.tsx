import React from "react";
import styled from "styled-components";
import {Button} from "../../../components/Button";
import {SectionTitle} from "../../../components/SectionTitle";
import {Icon} from "../../../components/icon/Icon";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";

export const Contacts = () => {
  return (
      <StyledContacts>
        <Container>
          <SectionTitle sectionName={"contacts"}/>
          <FlexWrapper justify={"space-between"}>
            <LeftSideWrapper>
              <Text>
                I’m interested in freelance opportunities. However, if you have other
                request or question, don’t hesitate to contact me
              </Text>
            </LeftSideWrapper>

            <RightSideWrapper>
              <h4>Message me here</h4>
              <TelegramAndEmailWrapper>
                <Icon iconId="telegramm" width={"25"} height={"25"} viewBox={"0 0 25 25"}/>
                <span>@go_phase</span>
              </TelegramAndEmailWrapper>
              <TelegramAndEmailWrapper>
                <Icon iconId="email" width={"25"} height={"25"} viewBox={"0 0 25 25"}/>
                <span>xx45xxz@gmail.com</span>
              </TelegramAndEmailWrapper>
            </RightSideWrapper>
          </FlexWrapper>
        </Container>

        {/*<Form>*/}
        {/*  <Field placeholder="name"/>*/}
        {/*  <Field placeholder="email"/>*/}
        {/*  <Field placeholder="title"/>*/}
        {/*  <Field as={"textarea"} placeholder="Message"/>*/}
        {/*  <Button type="submit">Send</Button>*/}
        {/*</Form>*/}
      </StyledContacts>
  );
};

const StyledContacts = styled.section`
  min-height: 50vh;
`;

const LeftSideWrapper = styled.div`
  margin-top: 45px;
  max-width: 506px;
`
const Text = styled.p`
  font-weight: 500;
`

const TelegramAndEmailWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 5px;
`

const RightSideWrapper = styled.div`
  margin-top: 45px;
  max-width: 304px;
  border: 1px solid ${theme.color.secondaryFont};
  padding: 16px;

  h4 {
    font-size: 16px;
    font-weight: 600;
  }

  ${TelegramAndEmailWrapper}:first-of-type {
    margin: 16px 0 8px;
  }  
`


// const Form = styled.form`
//   max-width: 505px;
//   display: flex;
//   flex-direction: column;
//   margin: 0 auto;
// `;
// const Field = styled.input``;
