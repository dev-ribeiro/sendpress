import styled from 'styled-components'

export const OrderSummaryContainer = styled.div`
    padding: 2.25rem 2.5rem;
    background: ${props => props.theme['gray-100']};
    border-radius: 8px;
    align-self: flex-start;

    & > h3 {
        padding: 0.5rem;
        font-size: 24px;
        border-bottom: 1px solid ${props => props.theme['black']};
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
`

export const FinishOrderButton = styled.button`
    width: 100%;
    margin: 0.75rem 0;
    padding: 0.75rem 0;
    border-radius: 6px;
    background: ${props => props.theme['purple-600']};
    color: ${props => props.theme['gray-100']};
`
