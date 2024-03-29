import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body {
        max-width: 100vw;
        background: ${props => props.theme['gray-800']};
    }

    a, span, label {
        font-family: 'Roboto', monospace;
        text-decoration: none;

    }

    h1, h2, h3 {
        font-family: 'Baloo 2', monospace;
    }

    button {
        background: none;
        border: none;
    }

    @media (max-width:768px) {
        html, body {
            display: flex;
        }
    }
`
