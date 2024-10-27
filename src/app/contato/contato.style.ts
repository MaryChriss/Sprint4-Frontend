import styled from "styled-components";

export const StyledContato = styled.div`
    margin-top: 1rem;
`

export const StyledQuestions = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    & img {
        margin-right: 5rem;
        height: 19rem;
        width: 30rem;
        margin-top: 4rem;
    }

        /* Mobile */
        @media(max-width: 599px) {
            display: flex;
            flex-direction: column-reverse;

        img {
            margin-right: 0rem;
            height: 15rem;
            width: 23rem;
            margin-top: 2rem;
        }
        }

        @media (min-width: 600px) and (max-width:999px){

            img {
                margin-right: 1rem;
                margin-left: 1rem;
                height: 12rem;
                width: 20rem;
                margin-top: 4rem;
            }
        }
`

export const StyledTextQuestions = styled.div`

    & h1 {
        margin-top: 1rem;
        text-align: center;
        font-size: 2.8rem;
    }

    & p {
        text-align: center;
        font-size: 1.2rem;
        margin-top: 1rem;
    }

    @media(max-width: 599px) {
        h1 {
            text-align: center;
            font-size: 2.5rem;
            margin-top: 3rem;
        }

        p {
            text-align: center;
            font-size: 1.1rem;
            margin-top: 1rem;
        }
    }

    @media (min-width: 600px) and (max-width:999px){
        h1 {
            text-align: center;
            font-size: 2.4rem;
        }

        p {
            text-align: center;
            font-size: 1rem;
        }
    }
`

export const Styledforms = styled.div`
    display: flex;
    justify-content: center;
`

export const StyledformSection = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 5rem;

    @media(max-width: 599px) {
        flex-direction: column;
        margin-top: 1rem;
    }

    @media (min-width: 600px) and (max-width:999px){
        flex-direction: column;
        margin-top: 1rem;
    }
`

export const StyledInfosPessoais = styled.div`
    display: flex;
    flex-direction: column;

`

export const StyledBotao = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;
    margin-bottom: 2rem;

    & .btn {
        font-size: 1rem;
        background-color: #4373B8;
        color: white;
        font-weight: bold;
        padding: 0.8rem;
        border-radius: 1rem;
    }
`