
import styled from "styled-components";

export const StyledName = styled.h1`
    color: #00a1fc;
    margin-left: 1rem;
    margin-top: 1rem;
`

export const StyledLeftSectionContainer = styled.div`
    background-color: #e0e0e0;
    padding: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    margin-left: 4rem;
    margin-top: 3rem;
    margin-right: 4rem;
    margin-bottom: 12.4rem;
    border-radius: 2rem;

    & p {
        margin-left: 4rem;
    }

    @media(max-width: 599px) {
        flex-direction:column;

        p {
            margin-left: 0;
            font-size: 15px;
            margin-bottom: 2rem;
        }
    }

    @media (min-width: 600px) and (max-width:999px){
        flex-direction:column;

        p {
            font-size: 20px;
            margin-bottom: 2rem;
        }
    }
`;

export const StyledTitulo = styled.div`
    margin-left: 4rem;
    font-weight: 800;
    font-size: 28px;
    margin-bottom: 2rem;

    @media(max-width: 599px) {
        margin-left: 0rem;
        font-size: 20px;
        }

        @media (min-width: 600px) and (max-width:999px){
            font-size: 26px;
        }
`