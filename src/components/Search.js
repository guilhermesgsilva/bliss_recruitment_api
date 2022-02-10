import { useState, useEffect } from 'react';
import { useSearchParams, NavLink } from "react-router-dom";

import Share from "./Share";

import styled from "styled-components";

const Styles = styled.div`
    {
       background-color: green;
       height: 100vh; 
    }
`;

function Search (props) {
    const [searchParams, setSearchParams] = useSearchParams();
    

    let search = searchParams.get("filter") || "";
    

    const [focused, setFocused] = useState(false)
    const onFocus = () => {
        setFocused(true)
    }

    const handleChange = (e) => {
        const filter = e.target.value;

        if (filter) {
            setFocused(true)
            props.setSearch(filter)
            setSearchParams({ filter });
            
        } else {
            setSearchParams({});
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSearchParams("")
        setFocused(false)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" value={search} onFocus={onFocus} onChange={handleChange} placeholder="Search"/>
                <button type="submit">Dismiss</button>
            </form>
            {focused && (<Share url={window.location.href} />)}
        </>
    )
};

export default Search;
