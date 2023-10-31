import React from 'react';
import styled from 'styled-components';
import {Logo} from '../../components/logo/Logo';
import {HeaderMenu} from './headerMenu/HeaderMenu';
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import {MobileMenu} from "./mobileMenu/MobileMenu";
import {Social} from "./social/Social";
import {MobileSocial} from "./mobileSocial/Social";

const items = ["home", "works", "about-me", "contacts"]

export const Header = () => {
  return (
      <StyledHeader>
        <Container>
          <FlexWrapper justify={"space-between"} align={"center"}>
            {/*<Social/>*/}
            {/*<MobileSocial/>*/}
            <Logo/>
            <HeaderMenu menuItems={items}/>
            <MobileMenu menuItems={items}/>
          </FlexWrapper>
        </Container>
      </StyledHeader>
  );
};

const StyledHeader = styled.header`
  background-color: rgba(40, 44, 51, 0.9);
  padding: 32px 0 8px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
`