import { useState } from 'react';
import { useSearchParams } from "react-router-dom";

import Share from "./Share";

import styled from "styled-components";

const Styles = styled.div`
    {        
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 2.5vh;
    }

    form {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
    }

    input {
        width: 15em;
        margin: 0.5em 0;
        border: 1px solid #AAD576;
        color: #538D22;
        border-radius: 5px;
        padding-left: 0.5em;

    }

    input::placeholder {
        color: #AAD576;
    }

    input:focus {
        outline: none !important;
        border:1px solid #538D22;
    }

    button {
        padding: 0.1em 0.5em;
        border-radius: 5px;
        margin: 0.5em 0;
        background-color: #AAD576;
        color: #FFFFFF;
        border: 1px solid #AAD576;
    }

    button:hover {
        background-color: #FFFFFF;
        color: #538D22;
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
        <Styles>
            <form onSubmit={handleSubmit}>
                <input type="text" value={search} onFocus={onFocus} onChange={handleChange} placeholder="Search"/>
                
                <button type="submit">Dismiss</button>
            </form>
            {focused && (<Share url={window.location.href} />)}
        </Styles>
    )
};

export default Search;
