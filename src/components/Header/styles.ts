import styled from 'styled-components'

export const HeaderContainer = styled.header`
    width: 100%;
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
    display: flex;
    gap: 1.875rem;
`

export const WhatsAppContainer = styled.div`
    padding: 0.75rem 2.5rem;
    display: flex;
    gap: 0.5rem;
    align-items: center;
    background-color: ${props => props.theme['purple-600']};

    svg {
        padding: 0.25rem;
        border-radius: 999px;
        color: #5DBA32;
        background-color: ${props => props.theme['gray-300']};
    }

    span {
        color: ${props => props.theme['white']};
    }
`
