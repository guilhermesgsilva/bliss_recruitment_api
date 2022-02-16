import { useState, useEffect } from "react";
import axios from "axios";

import Share from "./Share";

import Spinner from 'react-bootstrap/Spinner'

import styled from "styled-components";

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
        margin: 5vh 0;
        border-radius: 10px;
        background-color: #FEF9EE;
    }

    h2{
        font-family: "Roboto Slab";
        font-size: 2em;
        margin: 3.5vh 0;
    }

    form {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }

    input {
        margin: 0 1em;
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

    ul {
        list-style-type: none;
        padding-left: 0;
        margin: 2.5em 0;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }

    li{
        margin: 1em;
        width: 7.5em;
        border: 1px solid #AAD576;
        border-radius: 5px;
        background-color: #FFFFFF;
    }

    h5 {
        font-weight: bolder;
        background-color: #AAD576;
        padding: 0.5em;
    }

    p {
        margin: 0;
    }

    img {        
        width: 100%;
        height: auto;
    }

    #publishDate {
        color: #AAD576;
        text-align: right;
    }

    .spinner-border {
        margin-top: 20vh;
        color: #AAD576;
    }
`;

function Detail() {
    const [question, setQuestion] = useState({});

    useEffect(() => {
        async function getQuestion() {
            try {
                const response = await axios.get(`https://private-64010-blissrecruitmentapi.apiary-mock.com/questions/${question.id}`);
                setQuestion(response.data);
            } catch (e) {
                console.log("error occurred", e);
            }
        }
        getQuestion();
      }, []);

    const handleVote = async () => {
        const response = await axios.put(
            `https://private-anon-cf3ea3a63b-blissrecruitmentapi.apiary-mock.com/questions/${question.id}`,
        );
        setQuestion(response.data);
    };

    return (
        <Main>
            <div className="orange-card">
                {question.id ? (
                    <>
                    <img src={question.image_url} alt={question.id} />
                        <p id="publishDate">Published at: {question.published_at.slice(0,10)}</p>
                        <h2>{question.question}</h2>
                        <ul>
                            {question.choices.map((element, index) => {
                                return (
                                    <li key={index}>
                                        <h5>{element.choice}</h5> 
                                        <p>Votes: {element.votes}</p>
                                        <button onClick={() => handleVote(index)}>Vote</button>
                                    </li>
                                );
                            })}
                        </ul>
                        <Share url={window.location.href} />
                    </>
                ) : (
                    <Spinner animation="border" />
                ) }
            </div>
        </Main>
    );
};

export default Detail;