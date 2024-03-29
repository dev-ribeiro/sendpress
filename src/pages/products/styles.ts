import styled from 'styled-components'

export const ProductContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 0.35rem;

    * {
        max-width: 85rem;
    }
`

export const ApresentationProductContainer = styled.div`
    padding: 2.5rem;
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 1.5rem;

    @media (max-width:768px) {
        grid-template-columns: 1fr;
    }
`

export const ProductImageWrapper = styled.div`
    padding: 1.5rem;
    /* aspect-ratio: 18 / 9; */
    display: flex;
    align-items: center;
    background: rgb(34,193,195);
    background: linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%);
    overflow: hidden;
    border-radius: 12px;

    img {
        object-fit: contain;
    }

    @media (max-width:768px) {
        min-height: 300px;

        img {
            object-fit: cover;
        }

    }
`

export const ProductCartSummary = styled.section`
    padding: 0.625rem;
    display: flex;
    flex-direction: column;
    gap: 0.625rem;
    color: ${props => props.theme['white']};

    h2 {
        margin-bottom: 12px;
        font-size: 1.5rem;
    }

    @media (max-width:768px) {
        gap: 1.5rem;

        h2 {
            font-size: 2rem;
        }
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

    @media (max-width:768px) {
        span {
            font-size: 1.75rem;
        }
    }
`

export const AmountSelectorContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;

    select {
        border-radius: 6px;
        text-align: center;
        line-height: 160%;
        width: 2rem;
        appearance: none;

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
`

export const ProductDescriptionContainer = styled.section`
    width: calc(100% - 2rem);
    margin: 2rem 0;

    h2 {
        padding: 0.625rem 0;
        border-top-right-radius: 6px;
        border-top-left-radius: 6px;
        background: ${props => props.theme['gray-900']};
        color: ${props => props.theme['white']};
        text-align: center;
        font-size: 1.25rem;
    }

    p {
        padding: 0.625rem;
        background: ${props => props.theme['gray-300']};
        font-family: 'Roboto', sans-serif;
        line-height: 160%;
        text-indent: 2rem;
        text-align: justify;
    }

    @media (max-width:768px) {
        h2 {
            font-size: 1.75rem;
        }

        p {
            font-size: 1.5rem;
        }
    }
`
