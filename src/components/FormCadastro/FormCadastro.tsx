import React, { useState } from "react";
import { Button, Input, SwitchLink } from "../FormLogin/FormLogin.style";
import { Styledh1Cadas } from "./FormCadastro.style";
import { FaCircleArrowLeft } from "react-icons/fa6";
import { useRouter } from "next/navigation";

interface FormCadastroProps {
    toggleForm: () => void;
    setUserData?: (data: { email: string; password: string }) => void;
}

const FormCadastro: React.FC<FormCadastroProps> = ({ toggleForm, setUserData }) => {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [name, setName] = useState("");

    const isValidEmail = (email: string) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!isValidEmail(email)) {
            alert("Por favor, insira um email válido.");
            return;
        }

        if (password !== confirmPassword) {
            alert("As senhas não coincidem.");
            return;
        }

        if (setUserData) {
            setUserData({ email, password});
        }

        alert("Cadastro realizado com sucesso! Agora faça o login.");
        toggleForm();
    };


    return (
        <>
            <FaCircleArrowLeft size={25} onClick={toggleForm}/>
            <Styledh1Cadas>Cadastre-se:</Styledh1Cadas>
            <form onSubmit={handleSubmit}>
                <Input
                    type="text"
                    placeholder="Nome Completo"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <Input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                    type="password"
                    placeholder="Senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Input
                    type="password"
                    placeholder="Confirme a senha"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <Button type="submit">Cadastrar</Button>
            </form>

            <SwitchLink onClick={toggleForm}>Já tem uma conta? Login</SwitchLink>
        </>
    );
};

export default FormCadastro;
