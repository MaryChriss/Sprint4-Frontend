import React from "react";
import {
    StyledInputContainer, StyledLabel, StyledInputField, StyledTextArea } from "./Input.style";
interface InputProps {
    label: string;
    type: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    required?: boolean;
    placeholder?: string;
    textarea?: boolean;
}

const Input: React.FC<InputProps> = ({ label, type, name, value, onChange, required = false, placeholder = "", textarea = false }) => {
    return (
        <StyledInputContainer>
            <StyledLabel htmlFor={name}>{label}</StyledLabel>
            {textarea ? (
                <StyledTextArea
                    id={name}
                    name={name}
                    value={value}
                    onChange={onChange}
                    required={required}
                    placeholder={placeholder}
                />
            ) : (
                <StyledInputField
                    id={name}
                    type={type}
                    name={name}
                    value={value}
                    onChange={onChange}
                    required={required}
                    placeholder={placeholder}
                />
            )}
        </StyledInputContainer>
    );
};

export default Input;
