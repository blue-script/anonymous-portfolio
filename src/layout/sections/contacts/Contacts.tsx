import React from "react";
import styled from "styled-components";
import { Button } from "../../../components/Button";
import { SectionTitle } from "../../../components/SectionTitle";
import { Icon } from "../../../components/icon/Icon";
import { FlexWrapper } from "../../../components/FlexWrapper";

export const Contacts = () => {
  return (
    <StyledContacts>
      <SectionTitle sectionName={"contacts"} />
      <FlexWrapper>
      <div>
        <p>
          I’m interested in freelance opportunities. However, if you have other
          request or question, don’t hesitate to contact me
        </p>
        <Button>Read more</Button>
      </div>

      <div>
        <h4>Message me here</h4>
        <div>
          <Icon iconId="telegramm"/>
          <span>@go_phase</span>
        </div>
        <div>
          <Icon iconId="email"/>
          <span>xx45xxz@gmail.com</span>
        </div>
      </div>
      </FlexWrapper>
      
      <Form>
        <Field placeholder="name" />
        <Field placeholder="email" />
        <Field placeholder="title" />
        <Field as={"textarea"} placeholder="Message" />
        <Button type="submit">Send</Button>
      </Form>
    </StyledContacts>
  );
};

const StyledContacts = styled.section`
  min-height: 50vh;
  background-color: #f4f3ba;
`;
const Form = styled.form`
  max-width: 505px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;
const Field = styled.input``;
