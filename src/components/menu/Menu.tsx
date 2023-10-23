import React from "react";
import styled from "styled-components";
import {theme} from "../../styles/Theme";

export const Menu = (props: { menuItems: Array<string> }) => {
  return (
    <StyledMenu>
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
    </StyledMenu>
  );
};

const StyledMenu = styled.nav`
  ul {
    display: flex;
    gap: 32px;
    list-style-type: none;
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
