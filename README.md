# Sistema de Diagnóstico Automotivo 🚗📋

Este projeto é um sistema web de diagnóstico automotivo utilizando inteligência artificial (IA) para auxiliar os usuários a identificarem problemas nos seus veículos de forma simples e rápida.

## Funcionalidades 📲

- **Cadastro de clientes e veículos**: Permite que os usuários cadastrem-se no sistema e tambem seus veículos.
- **Diagnóstico automatizado**: Utilizando IA, o sistema faz perguntas e gera um diagnóstico preliminar com possíveis causas para o problema descrito.
- **Direcionamento para a oficina mais próxima**: O usuário é orientado a ir à oficina mais próxima da Porto, conforme o diagnóstico.
- **Interface intuitiva**: A interface foi desenhada para ser simples e direta, garantindo uma boa experiência ao usuário.

## Tecnologias Utilizadas 💻

- **Next.js 13** para a interface de usuário e roteamento otimizado.
- **React** com Vite para a interface de usuário.
- **Styled-Components** para estilização do layout.
- **React-DOM** Manipulação do DOM no React.
- **React-Icons** Biblioteca de ícones.
- **React-Router-Dom** Gerenciamento de rotas e navegação.
- **Inteligência Artificial** para o processo de diagnóstico (Watson Assistent).
- **Formspree** API publica para o formulario ser enviado para o email da equipe
- **Java** para a API de backend, responsável pela lógica de negócios e comunicação com o banco de dados.

## Como Utilizar o Sistema ⁉️🖥️

1. **Inicie a conversa**: O chatbot começará a interação com você. Clique no ícone do chatbot para iniciar o processo.
2. **Descreva o problema**: Informe ao chatbot o que está acontecendo com seu veículo de forma clara e detalhada.
3. **Responda às perguntas**: O chatbot fará uma série de perguntas para entender melhor o problema do seu carro.
4. **Receba o diagnóstico**: Com base nas suas respostas, o chatbot fornecerá um diagnóstico preliminar sobre o problema do seu veículo.
5. **Vá até a agência mais próxima**: Após o diagnóstico, você será orientado a comparecer à oficina Porto mais próxima para uma análise detalhada.

## Páginas do Sistema 📑

### Página Inicial

A página inicial contém uma apresentação da inteligência artificial utilizada no sistema e como ela facilita o processo de diagnóstico automotivo. Ela explica como o chatbot analisa as informações fornecidas pelo usuário e fornece um diagnóstico preciso. Além disso, a página explica o passo a passo de como utilizar a IA para obter o diagnóstico.

### Página da Equipe

A página da equipe apresenta os integrantes do projeto, seus RM's, e links para seus perfis no GitHub e LinkedIn. É uma forma de reconhecer quem está por trás do desenvolvimento deste projeto.

### Pagina de Login

Esta página é aonde o cliente se cadastra colocando suas informações (e-mail, telefone, senha etc..) assim que se cadastra e possivel fazer o login e ser direcionado a sua pagina de perfil

### Página de Perfil

A página de perfil apresenta as informações do usuário colocadas ao fazer o login e tambem e aonde ele pode cadastrar seus veiculo colocando informações como Marca, modelo e ano.

### Página de Dúvidas

A página "Dúvidas" foi criada para facilitar a comunicação com os usuários. Ela contém um formulário que permite ao usuário enviar suas questões diretamente à equipe de suporte, preenchendo os seguintes campos obrigatórios:

- **Nome**: Campo obrigatório onde o usuário insere seu nome.
- **Email**: Campo obrigatório para o contato por email.
- **Telefone**: Campo opcional para inserção de número de telefone.
- **Mensagem**: Campo obrigatório para o usuário descrever suas dúvidas ou questões.

Após preencher os campos, o usuário pode enviar sua mensagem utilizando o botão "Enviar". Nossa equipe entrará em contato com o mais breve possível para resolver quaisquer dúvidas.

## Equipe 🫂

- **Mariana Christina** - RM: 554773
  - [GitHub](https://github.com/MarianaChristina)
  - [LinkedIn](https://www.linkedin.com/in/MarianaChristina)

- **Henrique Maciel** - RM: 556480
  - [GitHub](https://github.com/HenriqueMaciel)
  - [LinkedIn](https://www.linkedin.com/in/HenriqueMaciel)

- **Gabriela Moguinho** - RM: 556143
  - [GitHub](https://github.com/GabrielaMoguinho)
  - [LinkedIn](https://www.linkedin.com/in/GabrielaMoguinho)

## Como rodar o projeto localmente 🔁

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/MaryChriss/Sprint3-Front.git 

2. **Entre no diretório do projeto:**
   ```bash
   cd sprint3-front

3. **Instale as dependências do projeto:**
   ```bash
   npm install
   
4. **Execute o projeto:**
   ```bash
    npm run dev

4. Backend: Certifique-se de que o backend em Java está rodando. Isso pode ser feito clonando o repositório correspondente e executando a API, conforme as instruções nele.
   - Repositorio: https://github.com/MaryChriss/Sprint4-Java.git
