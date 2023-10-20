import React from 'react';
import styled from 'styled-components';
import { Logo } from '../../components/logo/Logo';
import { Menu } from '../../components/menu/Menu';
import { Lang } from './lang/Lang';
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import {theme} from "../../styles/Theme";

const items = ["home", "works", "about-me", "contacts"]

export const Header = () => {
    return (
        <StyledHeader>
          <Container>
            <FlexWrapper justify={"space-between"}>
              <Logo />
              <WrapperForMenuAndLang>
                <Menu menuItems={items}/>
                <Lang />
              </WrapperForMenuAndLang>
            </FlexWrapper>
          </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
  background-color: ${theme.color.bg};
  padding: 32px 0 8px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99;
`
const WrapperForMenuAndLang = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 32px;
`