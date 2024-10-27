import styled from "styled-components";

export const InputContainer = styled.div`
    position: relative;
    width: 100%;
    margin-bottom: 1rem;
`;

export const Styledh1 = styled.h1`
    display:flex;
    justify-content: center;
    margin-left: 0;
    margin-bottom: 5rem;
    font-size: 2rem;
    margin-top: 2rem;

    @media(max-width: 599px) {
        font-size: 1.5rem;
        margin-bottom: 3rem;
    }
`

export const InputIcon = styled.span`
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translateY(-60%);
    font-size: 1.5rem;
    color: #aaa;

    @media(max-width: 599px) {
        left: 6px;
    }
`;

export const Input = styled.input`
    width: 100%;
    padding: 0.8rem;
    padding-left: 2.5rem;
    margin-bottom: 1rem;
    border: 1px solid #ccc;
    border-radius: 4rem;
    font-size: 1rem;
    background-color: #f1f3f5;

    &:focus {
        border-color: #007BFF;
        outline: none;
    }

    @media(max-width: 599px) {
        padding: 0.5rem;
    }
`;


export const Button = styled.button`
    width: 50%;
    padding: 0.8rem;
    background-color: #007BFF;
    color: white;
    border: none;
    border-radius: 5rem;
    cursor: pointer;
    font-size: 1rem;
    margin-left: 8rem;

    @media(max-width: 599px) {
        margin-left: 2.5rem;
    }

    @media (min-width: 600px) and (max-width:999px){
        margin-left: 6rem;
    }
`;

export const SwitchLink = styled.a`
    display: flex;
    justify-content: center;
    text-align: center;
    margin-top: 1rem;
    cursor: pointer;
    color: #007BFF;
    text-decoration: underline;
    margin-top: 2rem;

    @media(max-width: 599px) {
        font-size: 0.9rem;
        margin-top: 2rem;
    }
`;

export const Title = styled.h2`
    margin-bottom: 1.5rem;
`;
