import TodoTemplate from './components/TodoTemplate';

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Time from './pages/Time';
import Home from './pages/Home';
import GuestBook from './pages/GuestBook';

import { BsClipboard2Check } from "react-icons/bs";
import { IoTimerOutline } from "react-icons/io5";
import { AiOutlineUser } from "react-icons/ai";
import styled from 'styled-components';

function App() {

  return (
    <>
      <TodoTemplate>
        <Router>
          <NavBar>
            <Link to="/guestbook">
              <AiOutlineUser className="icon" />
            </Link>
            <Link to="/" >
              <BsClipboard2Check className="icon" />
            </Link>
            <Link to="/time">
              <IoTimerOutline className="icon" />
            </Link>
          </NavBar>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/time' element={<Time />} />
            <Route path="/guestbook" element={<GuestBook />} />
          </Routes>
        </Router>
      </TodoTemplate>
    </>
  );
}

const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  .icon {
    font-size: 30px;
    color: black;
  }
`;

export default App;
