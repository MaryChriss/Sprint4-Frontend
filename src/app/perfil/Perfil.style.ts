import { Button } from './../../components/FormLogin/FormLogin.style';
import styled from "styled-components";

export const StyledContainer = styled.div`
    background: rgb(255,255,255);
    background: linear-gradient(0deg, rgba(255,255,255,1) 70%, rgba(148,217,255,1) 46%);
    padding-top: 2rem;
`

export const StyledConteudo = styled.div`
    background-color: #F3FBFF;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 17rem;
    margin-left: 17rem;
    margin-top: 7.8rem;
    margin-bottom: 10.01rem;
    flex-direction: column;
    border-radius: 4rem;
    box-shadow: 40px 30px 70px rgba(0, 0, 0, 0.20);

    .image {
        height: 12rem;
        width: 12rem;
    }

    .inputcar {
        border-radius: 2rem;
        margin-right: 2rem;
    }

    @media(max-width: 599px) {
        margin-right: 2rem;
        margin-left: 2rem;
    }

    @media (min-width: 600px) and (max-width:999px){
        margin-right: 7rem;
        margin-left: 7rem;
    }

`

export const StyledInfosUser = styled.div`
    margin-top: 3rem;
    margin-bottom: 2rem;
    display: flex;
    gap: 5rem;
    

    .h1fi {
        margin-top: 3rem;
    }

`

export const StyledInputsCar = styled.div`

    @media (max-width: 599px) {
        margin-left: 5rem;

        .botao {
        margin-left: 5rem;
        margin-bottom: 2rem;
    }
    }

    @media (min-width: 600px) and (max-width:999px){
        margin-left: 2rem;

        .botao{
            margin-left: 9rem;
        }
    }
`

export const StyledCar = styled.div`
    width: 800px; 
    margin: 10px auto;
    padding: 1rem;

    .card {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1.5rem;
        margin-bottom: 1.5rem;
        background-color: #fff;
        box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
        border-radius: 8px;

    }

    @media (max-width: 599px) {
        width: 30rem; 
    }

    @media (min-width: 600px) and (max-width:999px){
        width: 42rem; 
    }


`
