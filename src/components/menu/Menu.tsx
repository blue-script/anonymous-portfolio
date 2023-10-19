import React from "react";
import styled from "styled-components";

export const Menu = (props: { menuItems: Array<string> }) => {
  return (
    <StyledMenu>
      <ul>
        {props.menuItems.map((item, index) => {
          return (
            <li key={index}>
              <a href="#">
                <span>#</span> 
                {item}
              </a>
            </li>
          );
        })}
      </ul>
    </StyledMenu>
  );
};

const StyledMenu = styled.nav`
  display: flex;
  align-items: center;
  gap: 32px;
  ul {
    display: flex;
    gap: 32px;
    list-style-type: none;
  }
  span {
    color: #c778dd;
  }

  a {
    text-decoration: none;
  }
`;
