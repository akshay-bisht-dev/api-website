import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useNavigate } from "react-router-dom";


const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const navigate = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post("http://localhost:5000/auth/forgot-password", {
            email
        }).then((res) => {
            if (res.data.status) {
                alert("check your email for reset password link");
                navigate("/login");
            }
        }).catch((err) => {
            console.log(err);
        })
    }


    return (
        <div>
            <ForgotDiv>
                <ForgotData>
                    <h1>Forgot Password</h1>
                    <form onSubmit={handleSubmit}>
                        <ForgotFeild>
                            <label htmlFor='email'>Email</label>
                            <input type="text" name="email" id="email" onChange={(e) => setEmail(e.target.value)} placeholder='example@xyz.com' />
                        </ForgotFeild>

                        <ForgotFeild>
                            <input type="submit" value="Send" />
                        </ForgotFeild>
                    </form>

                    <p>Back to Login Page <Link to='/login'>Click Here</Link></p>
                </ForgotData>
            </ForgotDiv>
        </div>
    )
}

export default ForgotPassword


const ForgotDiv = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 70vh;
width: 100%;
`;

const ForgotData = styled.div`
display: flex;
flex-direction: column;
gap: 15px;
max-width: 500px;
margin: 0 auto;

h1{
    text-align: center;
    color: red;
}
`;

const ForgotFeild = styled.div`
display: flex;
flex-direction: column;
width: 100%;

label{
    font-size: 15px;
    color: black;
}

input{
    padding: 10px 15px;
    font-size: 15px;
}

p{
    color: red;
    margin-top: 0;
    font-weight: bold;
}
`;