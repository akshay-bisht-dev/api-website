import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import { useNavigate } from "react-router-dom";


const Signup = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm_password, setConfirm_password] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post("http://localhost:5000/auth/signup", {
            username, email, password, confirm_password
        }).then((res) => {
            if (res.data.status) {
                navigate("/login");
            }
        }).catch((err) => {
            console.log(err);
        })
    }

    const validate = (values) => {
        const errors = {};
        const regex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;

        if (!values.username) {
            errors.username = "Please enter the username!"
        };

        if (!values.email) {
            errors.email = "Please enter the email!"
        } else if (!regex.test(values.email)) {
            errors.email = "this is not valid email format!"
        };

        if (!values.password) {
            errors.password = "Please enter the password!"
        } else if (values.password.length < 4) {
            errors.password = "Please must be more than 4 characters!"
        } else if (values.password.length > 15) {
            errors.password = "Please must be lesser than 10 characters!"
        };

        if (!values.confirm_password) {
            errors.confirm_password = "Please enter the confirm_password!"
        } else if (values.password !== values.confirm_password) {
            errors.confirm_password = "Password doesn't match";
        }

        return errors;
    }

    return (
        <div>
            <SignupDiv>
                <SignupData>
                    <h1>Create a new Account</h1>
                    <form onSubmit={handleSubmit}>
                        <SignupFeild>
                            <label htmlFor='username'>Username</label>
                            <input type="text" name="username" id="username" onChange={(e) => setUsername(e.target.value)} placeholder='Username' />
                        </SignupFeild>

                        <SignupFeild>
                            <label htmlFor='email'>Email</label>
                            <input type="text" name="email" id="email" onChange={(e) => setEmail(e.target.value)} placeholder='example@xyz.com' />
                        </SignupFeild>

                        <SignupFeild>
                            <label htmlFor='password'>Password</label>
                            <input type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)} placeholder='Passsword' />
                        </SignupFeild>

                        <SignupFeild>
                            <label htmlFor='confirm_password'>Confirm Password</label>
                            <input type="confirm_password" name="confirm_password" id="confirm_password" onChange={(e) => setConfirm_password(e.target.value)} placeholder='Passsword' />
                        </SignupFeild>

                        <SignupFeild>
                            <input type="submit" value="submit" />
                        </SignupFeild>
                    </form>

                    <p>Already have an account <Link to='/login'>Login your account</Link></p>
                </SignupData>
            </SignupDiv>
        </div>
    )
}

export default Signup;


const SignupDiv = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: max-content;
width: 100%;
`;

const SignupData = styled.div`
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

const SignupFeild = styled.div`
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