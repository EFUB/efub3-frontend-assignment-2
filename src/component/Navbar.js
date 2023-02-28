import styled from "styled-components";
// assets
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
          <div className="active">Tasks</div>
        </div>

        <div className="menu">
          <p className="yellow">1</p>
          <div>Ideas</div>
        </div>

        <div className="menu">
          <div>Features</div>
        </div>
      </Menus>

      <PlayBox>
        <PlayBtn>
          <img src={play} />
        </PlayBtn>

        <p>Play - Levitating ... </p>
      </PlayBox>

      <SearchBox>
        <img src={search} />
        <p>search</p>
      </SearchBox>
    </Navdiv>
  );
};

export default Navbar;

const Logo = styled.img`
  width: 42px;
  height: 42px;
`;

const Navdiv = styled.div`
  display: flex;

  font-family: "Cafe24Ssurround";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;

  margin: 20px 50px;
`;

const Menus = styled.div`
  display: flex;
  margin-left: 10%;
  width: auto;

  .menu {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 20%;

    div {
      font-family: "Cafe24Ssurround";
      font-style: normal;
      font-weight: 700;
      font-size: 20px;
      line-height: 28px;
      color: gray;
    }

    .active {
      color: black;
    }
  }

  p {
    position: absolute;
    top: 0;
    right: -13px;

    width: 16px;
    height: 16px;

    background: #476ef7;
    border-radius: 50%;

    color: white;
    font-family: "Cafe24Ssurround";
    font-style: normal;
    font-weight: 700;
    font-size: 8px;

    margin: 0;

    text-align: center;
    line-height: 19px;
  }

  .yellow {
    background: #facc2a;
  }

  .active div {
    color: black;
  }
`;

const PlayBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;

  p {
    font-family: "Cafe24Ssurround";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;

    color: rgba(0, 0, 0, 0.3);

    margin: 0 0 0 36px;
  }

  @media screen and (max-width: 1150px) {
    display: none;
  }
`;

const PlayBtn = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #476ef7;

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 10px;
    height: 10px;
    margin-left: 3px;
  }
`;

const SearchBox = styled.div`
  width: 176px;
  height: 45px;

  background: rgba(217, 217, 217, 0.2);
  border-radius: 15px;

  display: flex;
  align-items: center;

  margin-left: 50px;

  img {
    width: 14px;
    height: 14px;
    margin-left: 28px;
  }

  p {
    margin-left: 26px;

    font-family: "Cafe24Ssurround";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    color: rgba(100, 100, 100, 0.5);
  }

  @media screen and (max-width: 1150px) {
    margin-left: auto;
  }

  @media screen and (max-width: 760px) {
    display: none;
  }
`;
