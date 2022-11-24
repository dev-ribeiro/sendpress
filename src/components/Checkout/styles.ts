import styled from 'styled-components'

export const CheckoutScreenContainer = styled.div`
    min-width: 100vw;
    margin-top: 2.1875rem;
    padding: 0 8px;
    display: flex;
    justify-content: center;
    gap: 36px;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
`
