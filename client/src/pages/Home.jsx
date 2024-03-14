import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import axios from 'axios'

const Home = () => {
    const navigate = useNavigate();

    axios.defaults.withCredentials = true;
    const handleLogout = () => {
        axios.get("http://localhost:5000/auth/logout").then((res) => {
            if (res.data.status) {
                navigate("/login")
            }
        }).catch((err) => {
            console.log(err);
        })
    }

    return (
        <HomeDiv>
            <HomeMainDiv>
                <h1>Rest in <span>API</span></h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, odit in obcaecati quia doloremque dicta incidunt laborum unde ratione similique. Vero libero voluptatum consequuntur sed! Nostrum veniam ducimus incidunt a alias enim numquam facilis, optio, debitis distinctio recusandae quae. Eum.</p>
                <div className="docs">
                    <Link to='/docs'>Read Docs</Link>
                    <Link to='/packages' className='git_btn'>View Packages</Link>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            </HomeMainDiv>
        </HomeDiv>
    )
}

export default Home


const HomeDiv = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
`;

const HomeMainDiv = styled.div`
background-color: white;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

h1{
    font-size: 70px;
    color: black;
    margin: 0;

    span{
        color: red;
        font-weight: bold;
    }
}

p{
    font-size: 20px;
    color: gray;
    text-align: center;
}

.docs{
    display: flex;
    gap: 10px;

    a{
        text-decoration: none;
        color: black;
        border: 1px solid red;
        padding: 10px 15px;

    }
    .git_btn{
        background-color: red;
        color: white;
    }
}
`;