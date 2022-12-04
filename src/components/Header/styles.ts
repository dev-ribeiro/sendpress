import styled from 'styled-components'

export const HeaderContainer = styled.header`
    width: 100%;
    max-width: 1440px;
    margin: auto;
`

export const LogoContainer = styled.div`
    padding: 1.5625rem 2.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${props => props.theme['yellow-400']};

    img {
        width: 180px;
        height: 60px;
    }
`

export const ClientPanelContainer = styled.div``

export const CartProductsWrapper = styled.div`
    position:  relative;

    span {
        width: 15px;
        height: 15px;
        margin-top: -5px;
        margin-right: -5px;
        position: absolute;
        top: 0;
        right: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 999px;
        background: ${props => props.theme['purple-600']};
        font-size: 14px;
        font-family: 'Roboto', sans-serif;
        color: ${props => props.theme['white']};
    }
`

export const IconsContainer = styled.div`
    padding: 0.75rem 2.5rem;
    display: flex;
    gap: 0.5rem;
    align-items: center;
    background-color: ${props => props.theme['purple-600']};

    a {
        display: flex;
        align-items: center;
        gap: 0.25rem;

        span {
            color: ${props => props.theme['white']};
        }

        svg {
            background-color: ${props => props.theme['gray-300']};
            text-decoration: none;
            border-radius: 999px;
            padding: 0.25rem;
        }
    }
`
