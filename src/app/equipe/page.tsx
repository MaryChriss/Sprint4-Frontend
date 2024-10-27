"use client";
import { BiLogoGithub, BiLogoLinkedinSquare } from "react-icons/bi";
import { BotaoRedeSocial } from "../../components/BotaoRedeSocial/BotaoRedeSocial";
import { Layout } from "../../components/Layout/Layout";
import { StyledColaborador, StyledColaboradores, StyledContext, StyledDetails2, StyledEquipe, StyledInfos, StyledRedes, } from "./Equipe.style";
import Image from "next/image";

export default function Equipe() {
    return (
        <Layout>

            <StyledEquipe>

                <StyledInfos>
                    <StyledDetails2>
                        <Image className="deitails" src="/TopicsPequen.png" alt="" width={480}  height={304} />
                    </StyledDetails2>
                    <StyledContext>
                        <h1>Nossa Equipe:</h1>
                        <p>
                            Conheça as pessoas por trás do nosso projeto. Nossa equipe está dedicada a oferecer
                            <br />
                            o melhor serviço e suporte para garantir que você tenha a melhor experiência
                            possível.
                        </p>
                    </StyledContext>
                </StyledInfos>

                <StyledColaboradores>

                    <StyledColaborador>
                        <Image src="/mariFoto.jpg" alt="" className="imagem" width={200} height={200} />
                        <p>Mariana Christina <br />
                            RM: 554773
                        </p>
                        <StyledRedes>
                            <BotaoRedeSocial
                                Icone={BiLogoGithub}
                                url="https://github.com/MaryChriss"
                                label="GitHub"

                            />
                            <BotaoRedeSocial
                                Icone={BiLogoLinkedinSquare}
                                url="https://www.linkedin.com/in/mariana-fernandes-92690425a/"
                                label="LinkedIn"
                            />
                        </StyledRedes>
                    </StyledColaborador>

                    <StyledColaborador>
                        <Image src="/henriqueFoto.jpeg" alt="" className="imagem" width={200} height={200} />
                        <p>Henrique Maciel <br />
                            RM: 556480
                        </p>
                        <StyledRedes>
                            <BotaoRedeSocial
                                Icone={BiLogoGithub}
                                url="https://github.com/Maciel0123"
                                label="GitHub"
                            />
                            <BotaoRedeSocial
                                Icone={BiLogoLinkedinSquare}
                                url="https://www.linkedin.com/in/henrique-maciel-a70140312/"
                                label="LinkedIn"
                            />
                        </StyledRedes>
                    </StyledColaborador>

                    <StyledColaborador>
                        <Image src="/gabiFoto.jpg" alt="" className="imagem" width={200} height={200} />
                        <p>Gabriela Moguinho <br />
                            RM: 556143
                        </p>
                        <StyledRedes>
                            <BotaoRedeSocial
                                Icone={BiLogoGithub}
                                url="https://github.com/gabrielamoguinho"
                                label="GitHub"
                            />
                            <BotaoRedeSocial
                                Icone={BiLogoLinkedinSquare}
                                url="https://www.linkedin.com/in/gabriela-moguinho-a18762265/"
                                label="LinkedIn"
                            />
                        </StyledRedes>
                    </StyledColaborador>

                </StyledColaboradores>
            </StyledEquipe>

        </Layout>
    );
}
