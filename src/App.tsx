import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/Global";

import Routes from "./routes";
import { BrowserRouter } from "react-router-dom";

import styled from 'styled-components'
const Tela = styled.div`
  width: 1280px;
  height: 720px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 256px;
`;

export function App() {
  return (
    <BrowserRouter>
          <Tela>   
            <GlobalStyle />
            <Header />
            <Routes />
          </Tela>
    </BrowserRouter>
  );
}


