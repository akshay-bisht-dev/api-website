import React from 'react'
import styled from 'styled-components'

const Footer = () => {
    return (
        <div>
            <FooterDiv>
                <p>Made with ♥ by <b>AKSHAY BISHT DEV</b></p>
                <p>REST IN API</p>
            </FooterDiv>
        </div>
    )
}

export default Footer

const FooterDiv = styled.div`
text-align: center;
padding: 20px 0;
`;