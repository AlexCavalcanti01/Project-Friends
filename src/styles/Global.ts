import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root {
        --fundo: #EFF4F9;
    }
    
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        font-family: 'Inter', sans-serif;
    }

    html {
        @media (max-width: 1280px) {
            font-size: 93.75%; // 15px
        }
    }
    body{
        background: var(--fundo);
    }

    button {
        cursor: pointer;
        border: none;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
`;