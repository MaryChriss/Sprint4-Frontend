import React from "react";
import { Footer } from "../../components/Footer/Footer";
import RightSection from "../../components/RightSection/RightSection";
import { StyledLeftSectionContainer, StyledName, StyledTitulo } from "./Login.style";
import { useRouter } from "next/router";

export const Login: React.FC = () => {
    const router = useRouter();

    const handleClick = () => {
        router.push('/')
    }

    return (
        <>
            <StyledName onClick={handleClick}>Brain Drive</StyledName>
            <StyledLeftSectionContainer>
                <div>
                    <StyledTitulo>Bem-vindo ao Brain Drive! <br />
                        Seu assistente virtual para <br />
                        diagnóstico automotivo.
                    </StyledTitulo>
                    <p>
                        Descubra problemas no seu veículo com facilidade e siga as <br />
                        recomendações para mantê-lo em perfeito estado. Faça login <br />
                        para começar!
                    </p>
                </div>

                <RightSection />
            </StyledLeftSectionContainer>
            <Footer />
        </>
    );
};

