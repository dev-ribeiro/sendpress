import styled from 'styled-components'

export const ShoppingBagContainer = styled.div`
    padding: 2.25rem 2.5rem;
    background: ${props => props.theme['gray-100']};
`

export const HeaderContainer = styled.header`
    margin-bottom: 1.5625rem;
    padding: 0.5rem;
    display: grid;
    grid-template-columns: 3fr 1fr 1fr;
    justify-items: center;
    border-bottom: 1px solid ${props => props.theme['black']};

    h2 {
        font-size: 1.5rem;
    }

    h2:first-child{
        justify-self: self-start;
    }
`

export const SelectedItemsContainer = styled.section`
    padding: 1.5rem 0.5rem;
    display: grid;
    grid-template-columns: 3fr 1fr 1fr;
    justify-items: center;
    align-items: center;
    background: ${props => props.theme['gray-300']};
    border-radius: 8px;

    .fakeImage {
        width: 50px;
        height: 50px;
        background: red;
        border-radius: 999px;
    }

    div:first-child{
        justify-self: self-start;
        display: flex;
        align-items: center;
        gap: 12px;
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
    }

    & > button {
        color: ${props => props.theme['gray-900']};
    }
`
