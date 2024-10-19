import React from 'react';
import styled from "styled-components";

export default function Button({ onClick }){
    const Button = styled.button`
    background-color: #007BFF;
    width:22rem;
    height:5rem;
    border: none;
    border-radius:2rem;
    font-family: "Sevillana", cursive;
    font-size: 2rem;
    color: #fff;
    cursor:pointer;
    
    transition: all 0.8s ease;
        position: relative;
        overflow: hidden;

        &:hover {
            background-color: #0056b3;
            box-shadow: 12px 24px 15px 0px rgba(0,0,0,0.85);
            transform: translateY(-5px);
            background-color: blue;
        }
`;
    return(
        <Button onClick={onClick}>
            Clique Aqui
        </Button>
    )
}