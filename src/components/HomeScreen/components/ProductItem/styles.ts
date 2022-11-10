import styled from 'styled-components'

export const ProductItemContainer = styled.div`
    padding: 1rem;
    min-height: 310px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    gap: 1.25rem;
    border-radius: 36px 6px;
    font-size: 1.5rem;

    h3 {
        font-size: 1.125rem;
    }
`

export const ProductImageWrapper = styled.div`
    width: 170px;
    height: 145px;
    border-radius: 8px;
    background: ${props => props.theme['purple-600']};
`

export const ProductsCategoriesWrapper = styled.div`
    display: flex;

    span {
        padding: 0.25rem;
        border-radius: 8px;
        background: ${props => props.theme['yellow-light']};
        color: ${props => props.theme['yellow-dark']};
        font-size: 1rem;
    }
`

export const PriceProductWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1.4375rem;

    strong {
        font-family: 'Baloo 2', sans-serif;
    }
`

export const UserInteractionsContainer = styled.div`
    display: flex;
    align-items: center;

    button {
        border: none;
        background: none;
        cursor: pointer;
    }

    & > button {
        padding: 0.5rem;
        border-radius: 8px;
        color: ${props => props.theme['white']};
        background: ${props => props.theme['purple-600']};
    }
`

export const HandleAmountSelectedsWrapper = styled.div`
    padding: 0.5rem;
    margin-right: 12px;
    display: flex;
    gap: 8px;
    background: ${props => props.theme['gray-100']};
    border-radius: 6px;

    svg {
        color: ${props => props.theme['purple-600']};
    }
`