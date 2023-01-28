import styled from 'styled-components'

export const OrderSummaryContainer = styled.div`
    padding: 2.25rem 2.5rem;
    border-radius: 8px;
    align-self: flex-start;
    background: ${props => props.theme['black']};
    color: ${props => props.theme['white']};

    & > h3 {
        padding: 0.5rem;
        font-size: 1.5rem;
        border-bottom: 1px solid ${props => props.theme['black']};
        border-color: ${props => props.theme['white']};
    }

    @media (max-width:768px) {
        width: 700px;
        align-self: center;
        font-size: 18px;
    }
`

export const Order = styled.div`
    margin-top: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 8px;

    div {
        display: flex;
        justify-content: space-between;
    }

    div:last-child {
        margin-top: 0.75rem;
        font-size: 1.25rem;
    }

    @media (max-width: 768px) {
        div:last-child {
            font-size: 1.5rem;
        }
    }
`

export const FinishOrderButton = styled.a`
    width: 100%;
    margin: 0.75rem 0;
    padding: 0.75rem 0;
    display: flex;
    justify-content: center;
    border-radius: 6px;
    background: ${props => props.theme['purple-600']};
    color: ${props => props.theme['gray-100']};
`
