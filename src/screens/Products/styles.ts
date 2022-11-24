import styled from 'styled-components'

export const ProductContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    * {
        max-width: 85rem;
    }
`

export const ApresentationProductContainer = styled.div`
    padding: 2.5rem;
    display: flex;
    justify-content: center;
    gap: 1.5rem;

    img {
        border-radius: 12px;
    }
`

export const ProductCartSummary = styled.section`
    padding: 0.625rem;
    display: flex;
    flex-direction: column;
    gap: 0.625rem;

    h2 {
        margin-bottom: 12px;
        font-size: 1.5rem;
    }
`

interface ButtonInteractionType {
    variant: 'cart' | 'buy'
}

export const ButtonInteractionContainer = styled.button<ButtonInteractionType>`
    width: 100%;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.625rem;
    background: ${props => props.variant === 'cart'
    ? props.theme['yellow-400']
    : props.theme['purple-600']};
    border-radius: 8px;
    cursor: pointer;

    svg {
        color: ${props => props.theme['white']};
    }

    span {
        font-size: 1rem;
        color: ${props => props.theme['white']};
    }
`

export const AmountSelectorContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;

    input[type="number"]{
        width: 3.125rem;
        padding: 4px;
        border: none;
        border-radius: 6px;
        background: ${props => props.theme['yellow-400']};

        &:focus {
            outline: none;
        }

        /* Remove arrows of number input */
        &::-webkit-outer-spin-button,
        &::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }
        -moz-appearance: textfield;
    }
`

export const ProductDescriptionContainer = styled.section`
    margin-bottom: 2rem;

    h2 {
        padding: 0.625rem 0;
        border-top-right-radius: 6px;
        border-top-left-radius: 6px;
        background: ${props => props.theme['gray-900']};
        color: ${props => props.theme['white']};
        text-align: center;
        font-size: 20px;
    }

    & > div {
        padding: 0.625rem;
        background: ${props => props.theme['gray-300']};
        font-family: 'Roboto', sans-serif;
        line-height: 160%;
        text-indent: 2rem;
        text-align: justify;
    }
`
