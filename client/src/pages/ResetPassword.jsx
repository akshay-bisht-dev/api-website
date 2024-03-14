import axios from 'axios';
import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useNavigate, useParams } from "react-router-dom";


const ResetPassword = () => {
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const { token } = useParams();


    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post("http://localhost:5000/auth/reset-password/" + token, {
            password
        }).then((res) => {
            if (res.data.status) {
                navigate("/login");
            }
            console.log(res.data);
        }).catch((err) => {
            console.log(err);
        })
    }


    return (
        <div>
            <ForgotDiv>
                <ForgotData>
                    <h1>Reset Password</h1>
                    <form onSubmit={handleSubmit}>
                        <ForgotFeild>
                            <label htmlFor='password'>New Password</label>
                            <input type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)} placeholder='Passsword' />
                        </ForgotFeild>


                        <ForgotFeild>
                            <input type="submit" value="Reset" />
                        </ForgotFeild>
                    </form>
                </ForgotData>
            </ForgotDiv>
        </div>
    )
}

export default ResetPassword


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