import './App.css';
import { Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./components/Home";

import Questions from "./components/Questions";
import Detail from "./components/Detail";

import styled from "styled-components";

const Header = styled.header`
    {

    }
`;

const Main = styled.main`
    {
      
    }
`;

function App() {
  return (
    <>
      <Header>
        <NavBar />
      </Header>
      <Main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/questions" element={<Questions />} />
          <Route path="/questions/:questionId" element={<Detail />} />
        </Routes>
      </Main>
    </>
  );
}

export default App;
