import React from 'react';
import Logo from 'components/atoms/Logo';
import styled from 'styled-components';
import LoginWrapper from 'components/organisms/LoginWrapper';
import theme from 'constants/theme';
import StyleguideButtons from 'components/atoms/StyleguideButton';

const NavMenu = () => {
    return (
        <Nav>
            <Logo />
            {process.env.NODE_ENV === "development" && <StyleguideButtons />}
            <LoginWrapper />
        </Nav>
    )
}

export default NavMenu;

const Nav = styled.nav`
    max-height: 7rem;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    background-color: ${theme.colors.darkPurple};
    color: ${theme.colors.white};
    padding: 2rem 5rem;
    box-sizing: border-box;
`;