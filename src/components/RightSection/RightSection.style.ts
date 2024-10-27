import styled from "styled-components";

export const StyledRightSectionContainer = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
`;

export const StyledContentBox = styled.div`
    background-color: white;
    padding: 2rem;
    border-radius: 2rem;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    width: 35rem;
    height: 35rem;

    
    @media(max-width: 599px) {
        width: 15rem;
        height: 29rem;
    }

    @media (min-width: 600px) and (max-width:999px){
        margin-bottom: 1.5rem;
        width: 28rem;
    }
`;
