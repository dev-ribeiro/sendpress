import styled from 'styled-components'

export const CheckoutItemContainer = styled.section`
    padding: 1.5rem 0.5rem;
    display: grid;
    gap: 12px;
    grid-template-columns: 3fr 1fr 1fr;
    justify-items: center;
    align-items: center;
    background: ${props => props.theme['gray-300']};
    border-radius: 8px;

    & > h3 {
        font-size: 1.25rem;
    }

    @media (max-width: 768px) {
        font-size: 20px;

        & > h3 {
            font-size: 1.5rem;
        }
    }
`

export const CheckoutItemHeader = styled.header`
    justify-self: self-start;
    display: flex;
    align-items: center;
    gap: 12px;

    .fakeImage {
        width: 50px;
        height: 50px;
        background: red;
        border-radius: 999px;
    }
`

export const UserCheckoutActionsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;

    div {
        padding: 0.5rem;
        display: flex;
        gap: 8px;
        background: ${props => props.theme['gray-100']};
        border-radius: 6px;

        svg {
            color: ${props => props.theme['purple-600']};
        }

        span {
            font-size: 1rem;
        }
    }

    & > button {
        font-size: 0.8rem;
        color: ${props => props.theme['gray-900']};
    }

    @media (max-width:768px) {

    }
`
