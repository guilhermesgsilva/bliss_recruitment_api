import './App.css';

import { Routes, Route } from "react-router-dom";
import styled from "styled-components";

import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Questions from "./components/Questions";
import Detail from "./components/Detail";

const Header = styled.header`
    {

    }
`;

function App() {
  return (
    <>
      <Header>
        <NavBar />
      </Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/questions" element={<Questions />} />
          <Route path="/questions/:questionId" element={<Detail />} />
        </Routes>
    </>
  );
}

export default App;
