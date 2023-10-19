import React from 'react';
import styled from 'styled-components';
import { Logo } from '../../components/logo/Logo';
import { Menu } from '../../components/menu/Menu';
import { Lang } from './lang/Lang';

const items = ["home", "works", "about-me", "contacts"]

export const Header = () => {
    return (
        <StyledHeader>
            <Logo />
            <Menu menuItems={items}/>
            <Lang />
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    background-color: #f5d4d4;
    display: flex;
    justify-content: space-around;
    align-items: center;
`