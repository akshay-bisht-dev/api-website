import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import axios from 'axios';
import { useNavigate } from "react-router-dom";


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    axios.defaults.withCredentials = true;
    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post("http://localhost:5000/auth/login", {
            email, password
        }).then((res) => {
            if (res.data.status) {
                navigate("/");
            }
        }).catch((err) => {
            console.log(err);
        })
    }


    return (
        <div>
            <LoginDiv>
                <LoginData>
                    <h1>Login Your Account</h1>
                    <form onSubmit={handleSubmit}>
                        <LoginFeild>
                            <label htmlFor='email'>Email</label>
                            <input type="text" name="email" id="email" onChange={(e) => setEmail(e.target.value)} placeholder='example@xyz.com' />
                        </LoginFeild>

                        <LoginFeild>
                            <label htmlFor='password'>Password</label>
                            <input type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)} placeholder='Passsword' />
                        </LoginFeild>

                        <LoginFeild>
                            <input type="submit" value="Login" />
                            <Link to='/forgotpassword'>Forgot Password?</Link>
                        </LoginFeild>
                    </form>

                    <p>Don't have an account <Link to='/signup'>Create new account</Link></p>
                </LoginData>
            </LoginDiv>
        </div>
    )
}

export default Login

const LoginDiv = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 70vh;
width: 100%;
`;

const LoginData = styled.div`
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

const LoginFeild = styled.div`
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