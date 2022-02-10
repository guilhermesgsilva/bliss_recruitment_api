import { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

import Search from "./Search";

import styled from "styled-components";

const Styles = styled.div`
    {
       background-color: green;
       height: 100vh; 
    }
`;

function Questions( ) {
    const [health, setHealth] = useState([]);
    const [questions, setQuestions] = useState([]);
    const [limit, setLimit] = useState(10);
    const [offset, setOffset] = useState(10);
    const [filter, setFilter] = useState(null);

    useEffect(() => {
        async function getHealth() {
          const response = await axios.get(`https://private-anon-e7b3f01cb5-blissrecruitmentapi.apiary-mock.com/health`);
          setHealth(response.data);
        }
        getHealth();

        async function getAllQuestions() {
            const response = await axios.get(`https://private-anon-e7b3f01cb5-blissrecruitmentapi.apiary-mock.com/questions?limit=${limit}&offset=${offset}&filter=${filter}`);
            setQuestions(response.data);
          }
          getAllQuestions();
    }, []);

    const handleRefresh = async () => {
        const response = await axios.get(`https://private-anon-e7b3f01cb5-blissrecruitmentapi.apiary-mock.com/health`);
        setHealth(response.data);
    }

    const handleSearch = (search) => {
        setFilter(search)
        console.log("searchOnChange: " + search)
        console.log("filterOnChange: " + filter) // Delay of 1 change!!!
    }

    return (
        <Styles>
            <h2>Find a Question</h2>
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
                <p>Loading</p>
            )}
        </Styles>
    );
};

export default Questions;