import { ContainerLogo, LogoImage,TitleLogo  } from "./LogoPorto.style";

export const LogoPorto = () => {
    return (
        <ContainerLogo>
            <LogoImage src="/Logo-Porto.png" alt="Logo da Porto Seguros" />
            <TitleLogo>Porto</TitleLogo>
        </ContainerLogo>
    );
}
