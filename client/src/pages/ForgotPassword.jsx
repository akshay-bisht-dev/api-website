import { Axios } from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const ForgotPassword = () => {
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        Axios.post("http://localhost:5000/auth/forgot-password", {
            email
        }).then((res) => {
            if (res.data.status) {
                alert("check your email for reset password link");
                // navigate("/");
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

`;

const ForgotData = styled.div`

`;

const ForgotFeild = styled.div`

`;