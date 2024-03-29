import styled from 'styled-components'

export const FooterContainer = styled.footer`
    max-width: 1440px;
    margin: auto;
    margin-top: 1rem;
    padding: 3.125rem 0;
    background: ${props => props.theme['black']};
    text-align: center;

    h1 {
        font-family: 'Yanone Kaffeesatz', sans-serif;
        color: ${props => props.theme['white']};
        font-size: 3rem;
    }
`
