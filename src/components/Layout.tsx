import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function Layout() {
  return (
    <>
      <header>
        <Link to="/">Home</Link>
        <Link to="/game">Game</Link>
        <Link to="/settings">Settings</Link>
        <Link to="/faq">How to</Link>
        <Link to="/about">About</Link>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>2022</footer>
    </>
  );
}

export default Layout;
