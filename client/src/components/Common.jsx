import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'

const Common = () => {
    return (
        <>
            <ContainerDiv>
                <Header />
                <Outlet />
                <Footer />
            </ContainerDiv>
        </>
    )
}

export default Common


const ContainerDiv = styled.div`
max-width: 1200px;
height: 100%;
margin: 0 auto;
`;