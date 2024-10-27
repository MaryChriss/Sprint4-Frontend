import styled from "styled-components";

export const StyledEquipe = styled.section`
    background-color: #F1F8FF;
`

export const StyledInfos = styled.div`
    display: flex;
`

export const StyledDetails2 = styled.div`
        height: 25rem;
        width: 17rem;

        .deitails {
            height: 30rem;
            width: 15rem;
            margin-left: 2rem;
        }

            /* Mobile */
    @media(max-width: 599px) {

        .deitails {
            height: 30rem;
            margin-left: 2rem;
            margin-left: 0;
        }
    }

    @media (min-width: 600px) and (max-width:999px){

        .deitails {
            margin-left: 0;
        }
    }
`

export const StyledContext = styled.div`
    display: flex;
    align-items: start;
    flex-direction: column;

    & h1 {
        margin-top: 6rem;
        font-size: 2.0rem;
    }

    & p {
        margin-top: 1rem;
        font-size: 1.2rem;
        margin-left: -1.5rem;
    }

    @media(max-width: 599px) {

        margin-right: 1.5rem;

        & h1 {
            margin-top: 5.5rem;
            font-size: 1.8rem;
        }

        & p {
            margin-top: 0;
            font-size: 1rem;
            margin-left: -2rem;
        }
        }

    @media (min-width: 600px) and (max-width:999px){
        margin-right: 1.5rem;

        & h1 {
            font-size: 2rem;
            margin-left: -3rem;
        }

        & p {
            margin-top: 0;
            font-size: 1.1rem;
            margin-left: -3rem;
        }
    }
`

export const StyledColaboradores = styled.div`
    display: flex;
    justify-content: center;
    gap: 5rem;

        @media(max-width: 599px) {
            display: flex;
            flex-direction: column;
            margin-top: -4rem;
        }

        @media (min-width: 600px) and (max-width:999px){
            display: flex;
            flex-direction: column;
            margin-top: -4rem;
        }
`

export const StyledColaborador = styled.div`
    text-align: center;
    font-size: 1.5rem;
    font-weight: bold;
    margin-top: 0rem;

    & .imagem {
        width: 12.5rem;
        height: 12.5rem;
        border-radius: 10rem;
        border: white 5px solid;
    }

    @media (min-width: 600px) and (max-width:999px){
        .imagem {
            margin-top: -2rem;
        }
        }
`

export const StyledRedes = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 2rem;
        margin-bottom: 2.5rem;
        gap: 2rem;
`