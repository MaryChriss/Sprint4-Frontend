"use client";

import { BiComment } from "react-icons/bi";
import { BiListUl } from "react-icons/bi";
import { BiMessageAltCheck } from "react-icons/bi";
import { BiCar } from "react-icons/bi";
import { Layout } from "@/components/Layout/Layout";
import Image from 'next/image';
import { StyledDescription, StyledFirstStep, StyledHome, StyledImgPrinc, StyledSecondStep, StyledStepByStep, StyledSteps, StyledStepsContainer, StyledSub, StyledText, StyledThirdStep } from "./home.style";

export default function Home() {
    return (
        <Layout>
            <StyledHome>

                <StyledDescription>

                    <StyledText>
                        <h1>Conheça nossa inteligência artificial avançada, <br /> 
                        projetada para simplificar <br />
                        o processo de diagnóstico do seu veículo.</h1>

                        <p>O Brain Drive irá analisar e compreender as informações que você <br />
                        fornece sobre o problema do seu carro, oferecendo um <br />
                        auto-diagnóstico preciso e facilitando sua visita às nossas agências.
                        </p>
                    </StyledText>

                    <StyledImgPrinc>
                        <Image className="decoration1" src="/BolinhasDeco.png" alt="imagem com bolinhas" width={96} height={96}/>
                        <Image className="fundo" src="/InteligenciaArt.png" alt="robo representando IA" width={352} height={352} />
                        </StyledImgPrinc>
                </StyledDescription>

                <StyledSub>
                    <h2>Usando a IA em alguns passos:</h2>
                </StyledSub>

                <StyledStepByStep>

                    <StyledStepsContainer>

                        <StyledFirstStep>
                            <StyledSteps>
                                <Image src="/WatsonIA.png" alt="Icone watson"  width={63} height={63} />
                                <h3>Passo 1: Inicie a conversa</h3>
                                <p>Clique no ícone do chatbot para iniciar a conversa com nossa inteligência artificial.</p>
                            </StyledSteps>
            
                            <StyledSteps>
                                <BiComment size="2rem"/>
                                <h3>Passo 2: Descreva o Problema</h3>
                                <p>Descreva o problema que você está enfrentando com o seu carro de forma clara e detalhada.
                                Exemplo: "Meu carro está fazendo um barulho estranho quando eu viro à esquerda."</p>
                            </StyledSteps>
                        </StyledFirstStep>

                        <StyledSecondStep>
                            <StyledSteps>
                                <BiListUl size="2.5rem"/>
                                <h3>Passo 3: Responda às Perguntas</h3>
                                <p>O chatbot fará uma série de perguntas para entender melhor o problema do seu carro.</p>
                            </StyledSteps>
            
                            <StyledSteps>
                                <BiMessageAltCheck size="2rem"/>
                                <h3>Passo 4: Receba o Diagnóstico</h3>
                                <p>Com base nas suas respostas, o chatbot fornecerá um diagnóstico preliminar do problema do seu carro, juntamente com possíveis causas.</p>
                            </StyledSteps>
                        </StyledSecondStep>

                        <StyledThirdStep>
                            <StyledSteps>
                                <BiCar size="2.2rem"/>
                                <h3>Passo 5: Vá até a agencia Porto mais próxima.</h3>
                            </StyledSteps>
                        </StyledThirdStep>

                    </StyledStepsContainer>

                </StyledStepByStep>
            </StyledHome>
        </Layout>
    )
}
