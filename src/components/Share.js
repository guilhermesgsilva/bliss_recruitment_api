import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";

const Styles = styled.div`
    {
        
    }
`;

function Share() {
    const [email, setEmail] = useState("")

    const handleForm = async (e) => {
        e.preventDefault();
        await axios.post("https://private-64010-blissrecruitmentapi.apiary-mock.com/share?destination_email={email}&content_url={props.url}");
        setEmail("");
    };

    return (
        <Styles>
            <form onSubmit={handleForm}>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                />
                <button type="submit">Share Url</button>
            </form>
        </Styles>
    );
};

export default Share;