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
    display: flex;
    flex-direction: column;
    gap: 12px;
`
