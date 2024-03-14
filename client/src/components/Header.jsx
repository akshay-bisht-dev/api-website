import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <MenuDiv>
                <Link to='/'>RIAPI</Link>

                <MenuItemsDiv>
                    <Link to='/'>Home</Link>
                    <Link to='/docs'>Docs</Link>
                    <Link to='/packages'>Packages</Link>
                    <Link to='/login'>Login</Link>
                    <Link to='/signup'>Signup</Link>
                </MenuItemsDiv>
            </MenuDiv>
        </div>
    )
}

export default Header

const MenuDiv = styled.div`
display: flex;
justify-content: space-between;
align-items: center;

a{
    text-decoration: none;
    color: red;
    text-transform: uppercase;
    font-weight: bold;
}
`;

const MenuItemsDiv = styled.div`
display: flex;
gap: 10px;

a{
    padding: 10px 0;
    text-decoration: none;
    color: black;
    text-transform: capitalize;
}
`;