import { NavLink } from "react-router-dom";

import styled from "styled-components";

const Nav = styled.nav`
    {

    }
`;

function NavBar() {
    return (
        <Nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/questions">Questions</NavLink>
        </Nav>
    );
};

export default NavBar;