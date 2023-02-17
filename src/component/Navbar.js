import styled from "styled-components";

import play from "../assets/play.svg";

const Navbar = () => {
  return (
    <Navdiv>
      <div>로고</div>
      <Menus>
        <div>Tasks</div>
        <div>Ideas</div>
        <div>Features</div>
      </Menus>
      <div>
        <PlayBtn>
          <img src={play} />
        </PlayBtn>
      </div>
      <div>박스</div>
    </Navdiv>
  );
};

export default Navbar;

const Navdiv = styled.div`
  display: flex;

  font-family: "Cafe24Ssurround";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
`;

const Menus = styled.div`
  display: flex;
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
