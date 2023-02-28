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
          <div>Tasks</div>
        </div>

        <div className="menu">
          <p className="yellow">3</p>
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
  align-items: center;

  margin-left: 100px;
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
    font-size: 15px;
    color: #646464;
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
    font-size: 16px;
    line-height: 19px;

    color: rgba(0, 0, 0, 0.3);

    margin: 0 0 0 36px;
  }
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

  margin: 30px 50px;
`;

const Menus = styled.div`
  display: flex;
  margin-left: 130px;
  width: auto;

  .menu {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 50px;

    div {
      font-family: "Cafe24Ssurround";
      font-style: normal;
      font-weight: 700;
      font-size: 24px;
      line-height: 28px;
      color: gray;
    }
  }

  p {
    position: absolute;
    top: 0;
    right: -13px;

    width: 18px;
    height: 18px;

    background: #476ef7;
    border-radius: 50%;

    color: white;
    font-family: "Cafe24Ssurround";
    font-style: normal;
    font-weight: 700;
    font-size: 10px;

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

const PlayBtn = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #476ef7;

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 13px;
    height: 13px;
    margin-left: 5px;
  }
`;
