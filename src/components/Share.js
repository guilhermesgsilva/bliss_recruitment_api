import { useState } from "react";
import axios from "axios";
import styled from "styled-components";

const Form = styled.form`
    {
    }
`;

function Share() {
    const [email, setEmail] = useState("")

    const handleForm = async (e) => {
        e.preventDefault();
        const url = window.location.href;
        try { 
            await axios.post(`https://private-anon-20fad0b586-blissrecruitmentapi.apiary-mock.com/share?destination_email=${email}&content_url=${url}`);
        } catch (e) {
            console.log("error occurred", e);
        }
        setEmail("");
    };

    return (
        <Form onSubmit={handleForm}>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
            />
            <button type="submit">Share Common Sense</button>
        </Form>
    );
};

export default Share;