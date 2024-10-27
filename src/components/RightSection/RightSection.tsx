import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormLogin from "../FormLogin/FormLogin";
import { StyledContentBox, StyledRightSectionContainer } from "./RightSection.style";
import FormCadastro from "../FormCadastro/FormCadastro";

const RightSection: React.FC = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [userData, setUserData] = useState<{ email: string; password: string } | null>(null);
    const navigate = useNavigate();

    const toggleForm = () => {
        setIsLogin(!isLogin);
    };

    const handleLogin = (email: string, password: string) => {
        if (userData && userData.email === email && userData.password === password) {
        navigate("/");
        } else {
        alert("CPF ou senha incorretos.");
        }
    };

    return (
        <StyledRightSectionContainer>
        <StyledContentBox>
            {isLogin ? (
            <FormLogin toggleForm={toggleForm} handleLogin={handleLogin} />
            ) : (
            <FormCadastro toggleForm={toggleForm} setUserData={setUserData} />
            )}
        </StyledContentBox>
        </StyledRightSectionContainer>
    );
};

export default RightSection;
