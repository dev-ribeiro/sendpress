import styled from 'styled-components'

export const ProductStoreContainer = styled.div`
    min-width: 70rem;
    max-width: 100%;

    @media (max-width:768px) {
        min-width: 700px;
        max-width: 100%;
    }
`

export const CategoriesContainer = styled.div`
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
        color: ${props => props.theme['white']};
        cursor: pointer;
    }

    @media (max-width:425px) {
        display: grid;
        grid-template-columns: repeat(4, 1fr) ;
        grid-template-rows: repeat(2, 1fr);
    }
`

export const StoreContainer = styled.section`
    padding: 1rem 0.5rem;
    display: grid;
    grid-template-columns: repeat(4,1fr);
    justify-content: center;
    gap: 32px;

    @media (max-width: 768px) {
        grid-template-columns: repeat(3,1fr);
    }

    @media (max-width: 570px) {
        grid-template-columns: repeat(2,1fr);
    }
`