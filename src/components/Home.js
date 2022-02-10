import { NavLink } from "react-router-dom";

import styled from "styled-components";

const Styles = styled.div`
    {
        h1 {
            font-family: "Roboto Slab";
        }
    }
`;

function Home() {

    return (
        <Styles>
            <h1>Common Sense</h1>
            <p>Find everyone's answer to your questions</p>
            <NavLink to="/questions">Start</NavLink>
        </Styles>
    );
};

export default Home;