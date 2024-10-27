import React, { ButtonHTMLAttributes } from 'react';
import Link from 'next/link';
import { StyledBotao } from './Botao.style';


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    href?: string;
}

    export const Botao: React.FC<ButtonProps> = ({ children, href = '', ...props }) => {
        if (href) {
            return (
                <Link href={href} passHref>
                <StyledBotao {...props}>
                    {children}
                </StyledBotao>
                </Link>
            );
            }
        
            return (
            <StyledBotao {...props}>
                {children}
            </StyledBotao>
            );
        };