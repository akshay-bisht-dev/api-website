import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Home = () => {
    return (
        <HomeDiv>
            <HomeMainDiv>
                <h1>Rest in <span>API</span></h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, odit in obcaecati quia doloremque dicta incidunt laborum unde ratione similique. Vero libero voluptatum consequuntur sed! Nostrum veniam ducimus incidunt a alias enim numquam facilis, optio, debitis distinctio recusandae quae. Eum.</p>
                <div className="docs">
                    <Link to='/docs'>Read Docs</Link>
                    <Link to='/github' className='git_btn'>View on Github</Link>
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