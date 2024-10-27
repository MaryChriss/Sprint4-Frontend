import { BiGroup, BiHome, BiUserCircle } from "react-icons/bi";
import { LogoPorto } from "../LogoPorto/LogoPorto";
import { StyledHeader, StyledLink, StyledLogin, StyledMenuItem, StyledRotas, StyledWrapperMenu } from "./Header.style";
import { BsTelephone } from "react-icons/bs";
import { LuUserSquare2 } from "react-icons/lu";
import Link from "next/link";

export const Header = () => {
    return (
        <>
        <StyledHeader>
            <LogoPorto />

            <StyledRotas>
                <StyledWrapperMenu>

                    <StyledMenuItem>
                        <Link href="/" passHref>
                            <StyledLink>
                            <BiHome size="1.5rem" color="#00a1fc" /> Home
                            </StyledLink>
                        </Link>
                    </StyledMenuItem>

                    <StyledMenuItem>
                        <Link href="/equipe" passHref>
                            <StyledLink>
                            <BiGroup size="1.5rem" color="#00a1fc" /> Equipe
                            </StyledLink>
                        </Link>
                    </StyledMenuItem>

                    <StyledMenuItem>
                        <Link href="/contato" passHref>
                            <StyledLink>
                            <BsTelephone size="1.2rem" color="#00a1fc" /> Contato
                            </StyledLink>
                        </Link>
                    </StyledMenuItem>

                    <StyledMenuItem>
                        <Link href="/perfil" passHref>
                            <StyledLink>
                            <LuUserSquare2 size="1.5rem" color="#00a1fc" /> Perfil
                            </StyledLink>
                        </Link>
                    </StyledMenuItem>

                </StyledWrapperMenu>
            </StyledRotas>

            <StyledLogin>
                <Link href="/login" passHref>
                    <StyledLink>
                    <BiUserCircle size="1.5rem" color="#00a1fc" /> Login
                    </StyledLink>
                </Link>
            </StyledLogin>
            
        </StyledHeader>
        </>
    );
};
