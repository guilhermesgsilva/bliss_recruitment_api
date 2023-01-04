import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Spinner from 'react-bootstrap/Spinner'

import Search from "./Search";

const Main = styled.main`
    {
        min-height: 90vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        font-size: 1.05em;
        color: #538D22;
    }

    .orange-card {
        min-width: 30vw;
        min-height: 60vh;
        ${'' /* border: 1px solid #AAD576; */}
        padding: 5vh;
        margin-top: 5vh;
        border-radius: 10px;
        background-color: #FEF9EE;
    }

    h2 {
        font-family: "Roboto Slab";
        font-size: 2em;
    }

    ul {
        list-style-type: none;
        padding-left: 0;
        line-height: 1.75em;
    }
    
    a{
        color: #538D22;
    }

    a:hover{
        color: #AAD576;
    }

    .spinner-border {
        margin-top: 10vh;
        color: #AAD576;
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

function Questions( ) {
    const [health, setHealth] = useState([]);
    const [questions, setQuestions] = useState([]);
    const [limit] = useState(10);
    const [offset] = useState(10);
    const [filter, setFilter] = useState(null);

    useEffect(() => {
        async function getHealth() {
            try {
                const response = await axios.get(`https://private-anon-20fad0b586-blissrecruitmentapi.apiary-mock.com/health`);
                setHealth(response.data);
            } catch (e) {
                console.log("error occurred", e);
            }
        }
        getHealth();
    }, []);

    useEffect(() => {
        async function getAllQuestions() {
            try {
                const response = await axios.get(`https://private-anon-20fad0b586-blissrecruitmentapi.apiary-mock.com/questions?limit=${limit}&offset=${offset}&filter=${filter}`);
                setQuestions(response.data);
            } catch (e) {
                console.log("error occurred", e);
            }
        }
        getAllQuestions();
    }, [filter, limit, offset]);

    const handleRefresh = async () => {
        try {
            const response = await axios.get(`https://private-anon-20fad0b586-blissrecruitmentapi.apiary-mock.com/health`);
            setHealth(response.data);
        } catch (e) {
            console.log("error occurred", e);
        }
    }

    const handleSearch = (search) => {
        setFilter(search);
    }

    return (
        <Main>
            <div className="orange-card">
                <h2>Find Your Question</h2>
                <Search setSearch={handleSearch} />
                {health.status ? (
                    <>
                        {health.status === "OK" ? (
                            <ul>
                                {questions.map((element) => {
                                    return (
                                        <li key={element.id}>
                                            <NavLink to={`/questions/${element.id}`}>{element.question}</NavLink>
                                        </li>
                                    );
                                })}
                            </ul>
                        ) : (
                            <button onClick={() => handleRefresh()}>Refresh</button>
                        )}
                    </>
                ) : (
                    <Spinner animation="border" />
                )}
            </div>
        </Main>
    );
};

export default Questions;