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

export const ClientPanelContainer = styled.div`
    & > a {
        display: flex;
        align-items: center;
        gap: 0.5rem;

        span {
            font-size: 1.25rem;
        }
    }

    & > a:focus{
        color: inherit;
    }

    svg {
        color: ${props => props.theme['purple-600']};
    }
`

export const CartProductsWrapper = styled.div`
    position:  relative;

    span {
        width: 25px;
        height: 25px;

        margin-top: -10px;
        margin-right: -10px;
        position: absolute;
        top: 0;
        right: 0;

        display: flex;
        align-items: center;
        justify-content: center;

        border-radius: 999px;
        background: ${props => props.theme['purple-600']};
        opacity: 0.85;
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

    a:first-child{
        svg {
            color: #128c7e;
        }
    }

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
