import { BiGroup, BiHome, BiUserCircle } from "react-icons/bi"
import { LogoPorto } from "../LogoPorto/LogoPorto"
import { StyledHeader, StyledLink, StyledLogin, StyledMenuItem, StyledRotas, StyledWrapperMenu } from "./Header.style"
import { BsTelephone } from "react-icons/bs"
import { LuUserSquare2 } from "react-icons/lu"

export const Header =() => {
    return (
        <>
        <StyledHeader>

            <LogoPorto />

                <StyledRotas>
                    <StyledWrapperMenu>

                        <StyledMenuItem>
                            <BiHome size="1.5rem" color="#00a1fc" />
                            <StyledLink href="/">Home</StyledLink>
                        </StyledMenuItem>

                        <StyledMenuItem>
                            <BiGroup size="1.5rem" color="#00a1fc" />
                            <StyledLink href="/equipe">Equipe</StyledLink>
                        </StyledMenuItem>

                        <StyledMenuItem>
                            <BsTelephone size="1.2rem" color="#00a1fc" />
                            <StyledLink href="/contato">Contato</StyledLink>
                        </StyledMenuItem>

                        <StyledMenuItem>
                            <LuUserSquare2 size="1.5rem" color="#00a1fc" />
                            <StyledLink href="/perfil">Perfil</StyledLink>
                        </StyledMenuItem>
                        
                    </StyledWrapperMenu>
                </StyledRotas>

                <StyledLogin>
                    <BiUserCircle size="1.5rem" color="#00a1fc" />
                    <StyledLink href="/login">Login</StyledLink>
                </StyledLogin>

        </StyledHeader>
        </>
    )
}