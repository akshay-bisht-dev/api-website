import React, { useState } from 'react'
import styled from 'styled-components'

const Docs = () => {
    const [activeTab, setActiveTab] = useState("all_products");

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <DocsDiv>
            <LeftDiv>
                <h3>Products</h3>
                <button onClick={() => handleTabClick('all_products')}>Get all products</button>
                <button onClick={() => handleTabClick('single_product')}>Get a single product</button>
                <button onClick={() => handleTabClick('limit')}>Limit results</button>
                <button onClick={() => handleTabClick('sort')}>Sort results</button>
                <button onClick={() => handleTabClick('categories')}>Get all categories</button>
                <button onClick={() => handleTabClick('category')}>Get in category</button>
                <button onClick={() => handleTabClick('add')}>Add new product</button>
                <button onClick={() => handleTabClick('update')}>Update a product</button>
                <button onClick={() => handleTabClick('delete')}>Delete a product</button>
            </LeftDiv>

            <RightDiv>

                <RightText>
                    {activeTab === 'all_products' && (
                        <>
                            <h1>How to use it</h1>
                            <p>fakeStoreApi can be used with any type of shopping project that needs products, carts, and users in JSON format. you can use examples below to check how fakeStoreApi works and feel free to enjoy it in your awesome projects!</p>
                        </>
                    )}

                    {activeTab === 'single_product' && (
                        <>
                            <h1>How to use Single it</h1>
                            <p>fakeStoreApi can be used with any type of shopping project that needs products, carts, and users in JSON format. you can use examples below to check how fakeStoreApi works and feel free to enjoy it in your awesome projects!</p>
                        </>
                    )}


                    {activeTab === 'limit' && (
                        <>
                            <h1>How to use Limit it</h1>
                            <p>fakeStoreApi can be used with any type of shopping project that needs products, carts, and users in JSON format. you can use examples below to check how fakeStoreApi works and feel free to enjoy it in your awesome projects!</p>
                        </>
                    )}

                    {activeTab === 'sort' && (
                        <>
                            <h1>How to use sort it</h1>
                            <p>fakeStoreApi can be used with any type of shopping project that needs products, carts, and users in JSON format. you can use examples below to check how fakeStoreApi works and feel free to enjoy it in your awesome projects!</p>
                        </>
                    )}

                    {activeTab === 'categories' && (
                        <>
                            <h1>How to use categories it</h1>
                            <p>fakeStoreApi can be used with any type of shopping project that needs products, carts, and users in JSON format. you can use examples below to check how fakeStoreApi works and feel free to enjoy it in your awesome projects!</p>
                        </>
                    )}

                    {activeTab === 'category' && (
                        <>
                            <h1>How to use catefory it</h1>
                            <p>fakeStoreApi can be used with any type of shopping project that needs products, carts, and users in JSON format. you can use examples below to check how fakeStoreApi works and feel free to enjoy it in your awesome projects!</p>
                        </>
                    )}

                    {activeTab === 'add' && (
                        <>
                            <h1>How to use add it</h1>
                            <p>fakeStoreApi can be used with any type of shopping project that needs products, carts, and users in JSON format. you can use examples below to check how fakeStoreApi works and feel free to enjoy it in your awesome projects!</p>
                        </>
                    )}

                    {activeTab === 'update' && (
                        <>
                            <h1>How to use update  it</h1>
                            <p>fakeStoreApi can be used with any type of shopping project that needs products, carts, and users in JSON format. you can use examples below to check how fakeStoreApi works and feel free to enjoy it in your awesome projects!</p>
                        </>
                    )}

                    {activeTab === 'delete' && (
                        <>
                            <h1>How to use delete it</h1>
                            <p>fakeStoreApi can be used with any type of shopping project that needs products, carts, and users in JSON format. you can use examples below to check how fakeStoreApi works and feel free to enjoy it in your awesome projects!</p>
                        </>
                    )}
                </RightText>

                <RightImg>
                    <code>
                        {activeTab === 'all_products' && (
                            <>
                                fetch('https://fakestoreapi.com/products')
                                .then(res=>res.json())
                                .then(json=>console.log(json))
                            </>
                        )}

                        {activeTab === 'single_product' && (
                            <>
                                fetch('https://fakestoreapi.com/products/1')
                                .then(res=>res.json())
                                .then(json=>console.log(json))
                            </>
                        )}
                    </code>
                </RightImg>
            </RightDiv>

        </DocsDiv>
    )
}

export default Docs

const DocsDiv = styled.div`
display: grid;
grid-template-columns: auto auto;
gap: 10px;
height: 80vh;
place-content: center;
`;

const LeftDiv = styled.div`
width: 250px;
background-color: beige;
height: 70vh;
overflow-y: auto;
display: flex;
flex-direction: column;
padding: 15px 0px;

 h3{
    text-transform: capitalize;
    padding: 0 10px;
    font-weight: bold;
 }

 button{
    text-decoration: none;
    color: black;
    text-transform: capitalize;
    padding: 15px 10px;
    border: none;
    outline: none;
    text-align: start;
 }

 button:hover{
        background-color: #ebeb87;
        color: black;
    }
`;

const RightDiv = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
gap: 10px;
`;

const RightText = styled.div`
max-width: 70%;
`;

const RightImg = styled.div`
max-width: 100%;

img{
    width: 100%;
    height: auto;
}
`;