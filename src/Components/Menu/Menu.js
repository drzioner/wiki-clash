import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const MenuStyle = styled.nav`
  align-items: center;
  background: transparent;
  color: black;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  margin: 0 0 1rem 0;
  padding: 1.25rem 5% 0.5rem;
  width: 90%;
  ul {
    display: inline-flex;
    justify-content: space-between;
    list-style: none;
    margin: 0;
    padding: 0;
    width: 100%;
  }
`;

const Menu = () => {
  return (
    <MenuStyle>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      </ul>
    </MenuStyle>
  );
};

export default Menu;
