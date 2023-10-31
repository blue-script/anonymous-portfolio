import React from "react";
import styled from "styled-components";
import {theme} from "../../../styles/Theme";
import {Lang} from "../lang/Lang";

export const HeaderMenu = (props: { menuItems: Array<string> }) => {
  return (
    <StyledHeaderMenu>
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
      <Lang />
    </StyledHeaderMenu>
  );
};

const StyledHeaderMenu = styled.nav`
  display: flex;
  gap: 32px;
  
  ul {
    display: flex;
    gap: 32px;
    list-style-type: none;
  }
  
  @media ${theme.media.tablet} {
    display: none;
  }
`;

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
`
