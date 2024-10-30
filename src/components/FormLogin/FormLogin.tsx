"use client";

import React, { useState } from "react";
import { BiUser } from "react-icons/bi";
import { FaLock, FaLongArrowAltLeft } from "react-icons/fa";
import { Button, Input, InputContainer, InputIcon, Styledh1, SwitchLink } from "./FormLogin.style";
import { useRouter } from "next/navigation";
import { FaCircleArrowLeft } from "react-icons/fa6";

interface FormLoginProps {
    toggleForm: () => void;
    handleLogin: (email: string, password: string) => void;
}

const FormLogin: React.FC<FormLoginProps> = ({ toggleForm, handleLogin }) => {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        handleLogin(email, password);
    };

    const handleClick = () => {
        router.push('/');
    };

    return (
        <>
            <FaCircleArrowLeft size={25} onClick={handleClick}/>
            <Styledh1>Login:</Styledh1>
            <form onSubmit={handleSubmit}>
                <InputContainer>
                    <InputIcon>
                        <BiUser size="1.5rem" color="#00a1fc" />
                    </InputIcon>
                    <Input
                        type="text"
                        placeholder="     E-mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </InputContainer>

                <InputContainer>
                    <InputIcon>
                        <FaLock size="1.5rem" color="#00a1fc" />
                    </InputIcon>
                    <Input
                        type="password"
                        placeholder="      Senha"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </InputContainer>

                <div>
                    <Button type="submit">Entrar</Button>
                </div>
            </form>
            <SwitchLink onClick={toggleForm}>É novo aqui? Cadastre-se</SwitchLink>
        </>
    );
};

export default FormLogin;
