"use client";

import React, { useState } from "react";
import FormLogin from "../FormLogin/FormLogin";
import { StyledContentBox, StyledRightSectionContainer } from "./RightSection.style";
import FormCadastro from "../FormCadastro/FormCadastro";
import { useRouter } from "next/navigation";

export const RightSection: React.FC = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [userData, setUserData] = useState<{ email: string; password: string } | null>(null);
    const router = useRouter();

    const toggleForm = () => {
        setIsLogin(!isLogin);
    };

    const handleLogin = (email: string, password: string) => {
        if (userData && userData.email === email && userData.password === password) {
            router.push("/perfil");
        } else {
            alert("Email ou senha incorretos.");
        }
    };

    return (
        <StyledRightSectionContainer>
            <StyledContentBox>
                {isLogin ? (
                    <FormLogin toggleForm={toggleForm} />
                ) : (
                    <FormCadastro toggleForm={toggleForm} />
                )}
            </StyledContentBox>
        </StyledRightSectionContainer>
    );
};
