"use client";

import { useEffect, useState } from "react";
import { BiGroup, BiHome, BiUserCircle, BiLogOut } from "react-icons/bi";
import { LogoPorto } from "../LogoPorto/LogoPorto";
import { StyledHeader, StyledLink, StyledLogin, StyledMenuItem, StyledRotas, StyledWrapperMenu } from "./Header.style";
import { BsTelephone } from "react-icons/bs";
import { LuUserSquare2 } from "react-icons/lu";
import { useRouter } from "next/navigation"; // Utilize o `next/navigation` para Next.js 13

export const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const router = useRouter();

    useEffect(() => {
        if (typeof window !== "undefined") {
            const loginData = localStorage.getItem("loginData");
            setIsLoggedIn(!!loginData);
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("loginData");
        setIsLoggedIn(false);
        router.push("/");
    };

    return (
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
                {isLoggedIn ? (
                    <>
                        <BiLogOut size="1.5rem" color="#00a1fc" onClick={handleLogout} style={{ cursor: "pointer" }} />
                        <span onClick={handleLogout} style={{ cursor: "pointer", color: "#00a1fc" }}>Logout</span>
                    </>
                ) : (
                    <>
                        <BiUserCircle size="1.5rem" color="#00a1fc" />
                        <StyledLink href="/login">Login</StyledLink>
                    </>
                )}
            </StyledLogin>
        </StyledHeader>
    );
};
