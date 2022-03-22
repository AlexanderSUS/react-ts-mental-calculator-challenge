import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '../const/colors';

const OuterWrapper = styled.div`
  background-color: ${colors.primaryColor}
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1.5rem;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 7vh;
  padding-left: 5vw;
  padding-right: 5vw;
  background-color: ${colors.primaryDarkColor}
`;

const Footer = styled.footer`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 5vh;
  color: white;
  background-color: ${colors.primaryDarkColor}
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 86vh;
  color: white;
  padding: 1vh;
`;

function Layout() {
  return (
    <OuterWrapper>
      <Header>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/game">Game</StyledLink>
        <StyledLink to="/settings">Settings</StyledLink>
        <StyledLink to="/faq">How to</StyledLink>
        <StyledLink to="/about">About</StyledLink>
      </Header>
      <Main>
        <Outlet />
      </Main>
      <Footer>2022</Footer>
    </OuterWrapper>
  );
}

export default Layout;
