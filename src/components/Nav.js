import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Nav = () => {
  const defautStyle = {
    textDecoration: "none",
    fontSize: "25px",
    fontWeight: "bold",
  };
  const NavLinkStyle = ({ isActive }) =>
    isActive
      ? { ...defautStyle, color: "black" }
      : { ...defautStyle, color: "lightgrey" };

  return (
    <NavContainer>
      <NavLink to="/" style={NavLinkStyle}>
        Todo
      </NavLink>
      <NavLink to="/weather" style={NavLinkStyle}>
        Weather
      </NavLink>
    </NavContainer>
  );
};

export default Nav;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 40px;
  background: beige;
`;
