import { NavLink } from "react-router-dom";

import styled from "styled-components";

const Nav = styled.nav`
    {
        background-color: #AAD576;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 10vh;
    }

    a {
        font-size: 1.05em;
        margin: 2.5vw;
        padding: 0.5em 2em;
        color: #FFFFFF;
        text-decoration: none;
    }

    a:hover {
        padding: 0.5em 2em;
        border-radius: 10px;
        background-color: #FFFFFF;
        color: #538D22;
    }

    a:focus {
        color: #538D22;
    }

`;

function NavBar() {
    return (
        <Nav>
            <NavLink className="navlink" to="/">Home</NavLink>
            <NavLink className="navlink" to="/questions">Questions</NavLink>
        </Nav>
    );
};

export default NavBar;