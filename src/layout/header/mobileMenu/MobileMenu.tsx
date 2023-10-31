import React from "react";
import styled, {css} from "styled-components";
import {theme} from "../../../styles/Theme";
import {Lang} from "../lang/Lang";

export const MobileMenu = (props: { menuItems: Array<string> }) => {
  return (
      <StyledMobileMenu>
        <BurgerButton isOpen={false}> </BurgerButton>

        <MobileMenuPopup isOpen={false}>
          <ul>
            {props.menuItems.map((item, index) => {
              return (
                  <ListItem key={index}>
                    <Link href="#">
                      <span>#</span>
                      <span>{item}</span>
                    </Link>
                  </ListItem>
              );
            })}
          </ul>
          <Lang/>
        </MobileMenuPopup>
      </StyledMobileMenu>
  );
};

const StyledMobileMenu = styled.nav`
  display: none;

  @media ${theme.media.tablet} {
    display: block;
  }
`;

const MobileMenuPopup = styled.div<{isOpen: boolean}>`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(40, 44, 51, 0.9);
  z-index: 9999;
  display: none;
  
  ${props => props.isOpen && css<{ isOpen: boolean }>`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    gap: 32px;
    padding-left: 16px;

    ul {
      display: flex;
      flex-direction: column;
      gap: 32px;
    }
  `}
  
`

const BurgerButton = styled.button<{ isOpen: boolean }>`
  position: fixed;
  width: 24px;
  height: 24px;
  top: 30px;
  right: 16px;
  z-index: 99999;

  &::before {
    position: absolute;
    content: "";
    display: block;
    width: 24px;
    height: 2px;
    transform: translateY(-6px);
    background-color: ${theme.color.primaryFont};

    ${props => props.isOpen && css<{ isOpen: boolean }>`
      transform: rotate(-45deg) translateY(0);
    `}
  }

  &::after {
    position: absolute;
    content: "";
    display: block;
    width: 18px;
    height: 2px;
    right: 0;
    background-color: ${theme.color.primaryFont};

    ${props => props.isOpen && css<{ isOpen: boolean }>`
      transform: rotate(45deg) translateY(0);
      width: 24px;
    `}
  }
`
const ListItem = styled.li`
  &:hover {
    span + span {
      color: ${theme.color.primaryFont};
    }
  }
`

const Link = styled.a`
  font-size: 16px;
  font-weight: 500;

  span {
    color: ${theme.color.accent};
  }

  span + span {
    color: ${theme.color.secondaryFont};
  }
  
  @media ${theme.media.tablet} {
    font-size: 32px;
    font-weight: 400;
  }
`
