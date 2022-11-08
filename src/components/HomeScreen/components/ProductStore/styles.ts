import styled from 'styled-components'

export const ProductStoreContainer = styled.div`
    min-width: 70rem;
    max-width: 100%;
`

export const FormProductContainer = styled.form`
    width: 100%;
    margin: 24px 0;
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
        color: ${props => props.theme['orange-400']};
    }
`

export const CategoriesWrapper = styled.section`
    display: flex;
    gap: 1.25rem;
    justify-content: space-around;

    button {
        padding: 1rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        border: none;
        background: none;
    }
`

export const StoreContainer = styled.section`
    padding: 1rem 0.5rem;
    display: grid;
    grid-template-columns: repeat(4,1fr);
    justify-content: center;
    gap: 32px;
`
