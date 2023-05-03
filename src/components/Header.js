import styled from "styled-components";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <Navbar>
      <NavLink
        className={"title"}
        to="/"
        style={({ isActive }) =>
          isActive ? { color: "#6C12CC" } : { color: "white" }
        }
      >
        Todo
      </NavLink>
      <NavLink
        className={"title"}
        to="/photo"
        style={({ isActive }) =>
          isActive ? { color: "#6C12CC" } : { color: "white" }
        }
      >
        Photos
      </NavLink>
      <NavLink
        className={"title"}
        to="/video"
        style={({ isActive }) =>
          isActive ? { color: "#6C12CC" } : { color: "white" }
        }
      >
        Video
      </NavLink>
      <NavLink
        className={"title"}
        to="/board"
        style={({ isActive }) =>
          isActive ? { color: "#6C12CC" } : { color: "white" }
        }
      >
        Board
      </NavLink>
    </Navbar>
  );
};

const Navbar = styled.div`
  color: white;
  display: flex;
  /* background-color: rgba(163, 175, 220, 0.65); */
  background-color: black;
  justify-content: space-around;
  z-index: 100;
  padding-top: 30px;
  padding-bottom: 30px;
  .title {
    font-size: 23px;
    cursor: pointer;
    transition: all 0.1s ease-in-out;
    font-weight: 1000;
    :hover {
      transform: scale(1.2);
    }
  }
`;

export default Header;
