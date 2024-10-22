import { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import Button from "./components";

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    boxing-size: border-box;
    }
    
    body{
    display: flex;
    background-image: url("https://github.com/mariaccarolina/TurmaFDV/blob/main/imagens/Imagem%20palacio.png?raw=true");
    justify-content: center;
    background-repeat: content;
    background-size: cover;
    background-position:center;
    height:100vh;

    @media (max-width:600px) {

    }

    @media (max-width:400px) {
    background-repeat:no-content;
    background-size:cover;
    }

    @media (max-width:350px){
    display:flex;
    flex-direction:column;
    align-items:center;
    background-size:cover;
    width:90%;
      
  }
  
}

`;
const Titulo = styled.h1`
color: #fff;
text-shadow: #020617 40px 0 10px;
font-family: "Sevillana", cursive;
font-weight: 400;
font-size: 3.4rem;
padding-top:2rem;
animation: wave 2s infinite ease-in-out;
word-wrap: break-word;

@keyframes wave {
  0%, 100% {
    transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
      }
      }
      @media (max-width:600px) {
        font-size:1rem;
      }
      @media (max-width:400px) {
      font-size:1.5rem;
      text-align: center;
      }
      @media (max-width:350px) {
        font-size:0.8rem;
        padding-left:2rem;
        // padding-top:3rem;
    }

`;
const Main = styled.main`
height:90%;
display:flex;
flex-direction: column;
justify-content:center;
align-items:center;
min-height: 90vh;
min-width: 100%;

  @media (max-width:350px) {
  width: 100vw;
  height:80vh;

  }
`;

const Imagem = styled.img`
height:35rem;
width: 30rem;
transition: all 0.8s ease;
        position: relative;
        overflow: hidden;

        &:hover {
            transform: translateY(-5px);
        }
@media (max-width:600px) {
  width:20rem;
  height:20rem;
}

@media (max-width:400px) {
  width:48%;
  height:40%;
}

@media (max-width:350px) {
  width:65%;
  height:50%;

}
`;

export default function App() {
  const [lampada, setLampada] = useState(false);
  const trocarLampada = () => {
    setLampada(!lampada);
  };

  return (
    <Main>
      < GlobalStyle />
      <Titulo>Liberte a magia da programação com a lâmpada de Alladim!</Titulo>
      <Imagem
        src={
          lampada
            ? "https://raw.githubusercontent.com/mariaccarolina/TurmaFDV/refs/heads/main/imagens/lampada-com-mago.png"
            : "https://raw.githubusercontent.com/mariaccarolina/TurmaFDV/refs/heads/main/imagens/lampada.png"
        }
        alt="Lâmpada"
      />
      <Button
      onClick={trocarLampada}
      />
    </Main>
  );
}
