import { useState, useEffect } from "react";
import axios from "axios";

import Share from "./Share";

import styled from "styled-components";

const Styles = styled.div`
    {
        
    }
`;

function Detail() {
    const [question, setQuestion] = useState({});

    useEffect(() => {
        async function getQuestion() {
          const response = await axios.get(`https://private-64010-blissrecruitmentapi.apiary-mock.com/questions/${question.id}`);
          setQuestion(response.data);
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
        <Styles>
            <h2>Detail</h2>
            {question.id ? (
                <>
                    <h3>Question: {question.question}</h3>
                    <p>Id: {question.id}</p>
                    <p>Published at: {question.published_at}</p>
                    <img src={question.image_url} alt={question.id} />
                    <img src={question.thumb_url} alt={question.id} />
                    <ul>
                        {question.choices.map((element, index) => {
                            return (
                                <li key={index}>
                                    <h4>{element.choice}</h4> 
                                    <p>Votes: {element.votes}</p>
                                    <button onClick={() => handleVote(index)}>Vote</button>
                                </li>
                            );
                        })}
                    </ul>
                    <Share url={window.location.href} />
                </>
            ) : (
                <p>Loading</p>
            ) }
        </Styles>
    );
};

export default Detail;