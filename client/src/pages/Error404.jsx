import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Error404 = () => {
    return (
        <div>
            <ErrorDiv>
                <h1>404</h1>
                <p>Page Not Found!</p>
                <Link to='/'>Back to Home</Link>
            </ErrorDiv>
        </div>
    )
}

export default Error404

const ErrorDiv = styled.div`
height: 75vh;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

h1{
    font-size: 180px;
    margin: 0;
}
p{
    font-size: 40px;
    margin: 0;
}

a{
    text-decoration: none;
    color: white;
    background-color: red;
    font-weight: bold;
    padding: 10px 15px;
    margin-top: 20px;
}
`;