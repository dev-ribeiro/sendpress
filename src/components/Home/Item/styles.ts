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
    background: ${props => props.theme['black']};
    color: ${props => props.theme['white']};

    h3 {
        font-size: 1.125rem;
    }

    a {
        color: ${props => props.theme['white']};
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1.25rem;
    }
`

export const ProductImageWrapper = styled.div`
    padding: 0.25rem;
    background: ${props => props.theme['yellow-light']};
    border-radius: 8px;
    display: flex;
    align-items: center;
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
    align-items: stretch;
    gap: 0.5rem;

    select {
        width: 3rem;
        border-radius: 8px;
        text-align: center;
        line-height: 160%;
        appearance: none;

        font-size: 1.125rem;

        /* Hide scrollbar */
        &::-webkit-scrollbar{
            display: none;
        }

        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */
    }

    @media (max-width:768px) {
        label {
            font-size: 1.5rem;
        }

        select {
            font-size: 1rem;
        }
    }

    & > button {
        border: none;
        background: none;
        cursor: pointer;

        padding: 0.5rem;
        border-radius: 8px;
        color: ${props => props.theme['white']};
        background: ${props => props.theme['orange-400']};
    }
`
