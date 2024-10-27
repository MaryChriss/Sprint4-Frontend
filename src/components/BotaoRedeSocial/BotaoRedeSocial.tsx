import { IconType } from "react-icons";
import { StyledMeios } from "./BotaoRedeSocial.style";

interface BotaoRedeSocialProps {
    Icone: IconType; 
    url: string; 
    label: string; 
    iconSize?: string | number;
}

export const BotaoRedeSocial = ({ Icone, url, label,  iconSize = '2rem' }: BotaoRedeSocialProps)  => (
    <StyledMeios>
    <a href={url} target="_blank" rel="noopener noreferrer">
        <Icone size={iconSize} />
        {label}
    </a>
    </StyledMeios>
);
