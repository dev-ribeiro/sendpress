import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    a, span {
        font-family: 'Roboto', monospace;
    }

    h1, h2, h3 {
        font-family: 'Baloo 2', monospace;
    }
`
