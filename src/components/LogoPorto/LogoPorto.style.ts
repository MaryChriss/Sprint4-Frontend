import styled from "styled-components";

export const ContainerLogo = styled.div`
    display: flex;
    align-items: center;
`;

export const TitleLogo = styled.h1`
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    color: #00a1fc;
    font-size: 35px;
    margin-top: 0;
    margin-bottom: 0;

    @media(max-width: 599px) {
        color: #00a1fc;
        font-size: 1.25rem;
        margin-left: -0.2rem;
        margin-right: 1rem;
    }

    @media (min-width: 600px) and (max-width:999px){
        font-family: Arial, Helvetica, sans-serif;
            font-weight: bold;
            color: #00a1fc;
            font-size: 1.5rem;
    }

    @media (min-width: 1000px) and (max-width:1399px){
        font-family: Arial, Helvetica, sans-serif;
            font-weight: bold;
            color: #00a1fc;
            font-size: 35px;
    }
`;

export const LogoImage = styled.img`
    width: 30px; 
    height: auto;
    margin-left: 20px;
    border-radius: 5px;

    @media(max-width: 599px) {
            width: 20px; 
            height: auto;
            margin-right: 5px;
            margin-left: 10px;
            border-radius: 5px;
    }

    @media (min-width: 600px) and (max-width:999px){
        width: 25px; 
            height: auto;
            margin-right: 5px;
            margin-left: 10px;
            border-radius: 5px;
    }

    @media (min-width: 1000px) and (max-width:1399px){
        width: 30px; 
            height: auto;
            margin-left: 20px;
            border-radius: 5px;
    }
`;
