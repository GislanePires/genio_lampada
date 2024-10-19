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
    background-image: url("https://github.com/mariaccarolina/TurmaFDV/blob/main/imagens/Imagem%20palacio.png?raw=true");
    display: flex;
    justify-content: center;
    background-repeat: content;
    background-size: 85%;
    background-position:center;
  
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

    @keyframes wave {
        0%, 100% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(-10px);
        }
    }

`;
const Main = styled.main`
// padding-bottom:2rem;
height:90%;
display:flex;
flex-direction: column;
justify-content:center;
align-items:center;
`;
const Imagem = styled.img`
height:35rem;
width: 35rem;
transition: all 0.8s ease;
        position: relative;
        overflow: hidden;

        &:hover {
            transform: translateY(-5px);
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
