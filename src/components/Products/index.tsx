import Image from 'next/image'
import { ShoppingCart } from 'phosphor-react'
import { AmountSelectorContainer, ApresentationProductContainer, ButtonInteractionContainer, ProductCartSummary, ProductContainer, ProductDescriptionContainer } from './styles'

interface ProductsScreenProps {
    pid: string | string[]
}

export function ProductsScreen({ pid }: ProductsScreenProps) {
  return (
    <ProductContainer>
      <ApresentationProductContainer>
        <Image
          src={'https://source.unsplash.com/random'}
          alt=""
          width={720}
          height={407}
        />
        <ProductCartSummary>
          <h2>Título do produto</h2>
          <AmountSelectorContainer>
            <label htmlFor="">Quantidade:</label>
            <input
              type="number"
              name=""
              id=""
              min={0}
              max={100}
            />
          </AmountSelectorContainer>
          <ButtonInteractionContainer variant='cart'>
            <ShoppingCart size={22} weight="fill" />
            <span>ENVIAR AO CARRINHO</span>
          </ButtonInteractionContainer>
          <ButtonInteractionContainer variant='buy'>
            <span>COMPRAR</span>
          </ButtonInteractionContainer>
        </ProductCartSummary>
      </ApresentationProductContainer>
      <ProductDescriptionContainer>
        <h2>Descrição do produto</h2>
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quae repudiandae ullam iure ratione, facilis blanditiis debitis ab mollitia enim odio perferendis earum corrupti explicabo, provident aliquam ipsam fuga dolores!</div>
      </ProductDescriptionContainer>
    </ProductContainer>
  )
}
