import styled from 'styled-components'

export const BriefStoreContainer = styled.section`
    width: 100%;
    max-width: 1440px;
    margin: 1.5rem 0;
    padding: 64px 0;

    display: flex;
    justify-content: space-around;
    align-items: center;

    background: ${props => props.theme['black']};

    .line {
        border-left: 1px solid ${props => props.theme['white']};
        height: 2.5rem;
    }
`

export const BriefDetailsContainer = styled.div`
    max-width: 25rem;
    display: flex;
    align-items: center;
    gap: 2.25rem;

    * {
        color: ${props => props.theme['white']};
    }

    h2 {
        font-family: 'Baloo 2', monospace;
        font-size: 1.5rem;
    }
`
