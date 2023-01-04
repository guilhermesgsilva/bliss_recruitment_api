import { NavLink } from "react-router-dom";
import styled from "styled-components";

import cover from '../assets/bliss-recruitment-api-cover.png';

const Main = styled.main`
    {
        {
            min-height: 90vh;
            background-image: url(${cover});
            background-size: auto 80%;
            background-position: center center;
            background-repeat: no-repeat;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
        }

        h1 {
            color: #AAD576;
            font-size: 4.5em;
            margin-top: 15vh;
            margin-bottom: 0;
            font-family: "Roboto Slab";
            -webkit-text-stroke: 0.01px #538D22;
            font-weight: bolder;
        }

        h5 {
            font-size: 1em;
            margin: 1vh;
            position: relative;
        }

        a {
            font-size: 1.05em;
            position: absolute;
            bottom: 5vh;
            background-color: #AAD576;
            color: #FFFFFF;
            text-decoration: none;
            padding: 0.5em 2em;
            border-radius: 10px;
        }

        a:hover {
            background-color: #FFFFFF;
            color: #538D22;
            border: 1px solid #AAD576;
        }

    }
`;

function Home() {
    return (
        <Main>
            <h1>Common Sense</h1>
            <NavLink to="/questions">Start</NavLink>
        </Main>
    );
};

export default Home;