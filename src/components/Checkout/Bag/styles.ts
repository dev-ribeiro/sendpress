import styled from 'styled-components'

export const ShoppingBagContainer = styled.div`
    padding: 2.25rem 2.5rem;
    background: ${props => props.theme['black']};
    border-radius: 12px;

    /* padding: 1rem; */
    @media (max-width:768px) {
        width: 700px;
        padding: 1rem;
        font-size: 10px;
    }
`

export const HeaderContainer = styled.header`
    margin-bottom: 1.5625rem;
    padding: 0.5rem;
    display: grid;
    grid-template-columns: 3fr 1fr 1fr;
    justify-items: center;
    border-bottom: 1px solid ${props => props.theme['black']};
    border-color: ${props => props.theme['white']};

    h2 {
        font-size: 1.5rem;
        color: ${props => props.theme['white']};
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
