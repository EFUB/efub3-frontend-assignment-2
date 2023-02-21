import styled from "styled-components";

import play from "../assets/play.svg";
import hand from "../assets/hand.png";
import search from "../assets/search.svg";

const Navbar = () => {
  return (
    <Navdiv>
      <Logo src={hand} />

      <Menus>
        <div className="menu">
          <p>3</p>
          <div>Tasks</div>
        </div>

        <div className="menu">
          <p>3</p>
          <div>Ideas</div>
        </div>

        <div>Features</div>
      </Menus>

      <PlayBox>
        <PlayBtn>
          <img src={play} />
        </PlayBtn>

        <p>Play - music</p>
      </PlayBox>

      <SearchBox>
        <img src={search} />
        <p>search</p>
      </SearchBox>
    </Navdiv>
  );
};

export default Navbar;

const SearchBox = styled.div`
  width: 176px;
  height: 60px;

  background: rgba(217, 217, 217, 0.2);
  border-radius: 15px;

  display: flex;

  margin-left: 100px;
  img {
    width: 14px;
    height: 14px;
  }
`;
const PlayBox = styled.div`
  display: flex;
  border: 1px solid blue;
  margin-left: auto;
`;

const Logo = styled.img`
  width: 56px;
  height: 56px;
`;

const Navdiv = styled.div`
  display: flex;

  font-family: "Cafe24Ssurround";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;

  margin: 46px 60px;

  border: 1px solid red;
`;

const Menus = styled.div`
  display: flex;
  margin-left: 130px;
  border: 1px solid red;
  width: auto;

  .menu {
    position: relative;
    border: 1px solid gray;
  }
  div {
    margin-right: 60px;
  }

  p {
    position: absolute;
    top: 0;
    right: 0;
    width: 18px;
    height: 18px;
    background: #476ef7;
    border-radius: 50%;
    color: white;
  }
`;

const PlayBtn = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background-color: #476ef7;

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    margin-left: 5px;
  }
`;
