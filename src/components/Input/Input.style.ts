import styled from "styled-components";

export const StyledInputContainer = styled.div`
    margin-top: 1rem;
`

export const StyledLabel = styled.label`
    display: flex;
    margin-bottom: 5px;
    margin-top: 1.7rem;
    font-weight: bold;
    justify-content: center;
    font-size: 1.2rem;
`

export const StyledInputField = styled.input`
    width: 23rem;
    border-radius: 5rem;
    border: black 1px solid;
    font-size: 1rem;
    padding: 0.3rem;

    &:focus {
        border-color: #007BFF;
        outline: none;
    }
`

export const StyledTextArea = styled.textarea`
    width: 23rem;
    height: 15.5rem;
    border-radius: 2rem;
    color: black;
    font-size: 1rem;
    padding: 0.5rem;

    &:focus {
        border-color: #007BFF;
        outline: none;
    }
`

