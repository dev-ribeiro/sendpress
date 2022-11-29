import Image from 'next/image'
import {
  CartProductsWrapper,
  ClientPanelContainer,
  HeaderContainer,
  LogoContainer,
  WhatsAppContainer
} from './styles'
import logo from '../../assets/logo.png'
import { House, Phone, ShoppingCartSimple } from 'phosphor-react'
import CustomLink from '../CustomLink'
import { whatsappNumber } from '../../utils/contactList'
import { useCheckout } from '../../hooks/useCheckout'
import { useContext } from 'react'
import { ProductContext } from '../../contexts/ProductContexts'

interface HeaderProps {
  variant?: 'home' | 'checkout'
}

export function Header({ variant }: HeaderProps) {
  const { checkoutCart } = useCheckout()

  return (
    <HeaderContainer>
      <LogoContainer>
        <CustomLink href='/'>
          <Image src={logo} alt={''} />
        </CustomLink>
        <ClientPanelContainer>
          {
            variant === 'home' || !variant
              ? (
                <CustomLink href='/checkout' >
                  <CartProductsWrapper>
                    {checkoutCart.length > 0 && (
                      <span>{checkoutCart.length}</span>
                    )}
                    <ShoppingCartSimple size={32} weight="fill" />
                  </CartProductsWrapper>
                </CustomLink>
              )
              : (
                <CustomLink href='/' >
                  <House size={32} weight="fill" />
                </CustomLink>
              )
          }
        </ClientPanelContainer>
      </LogoContainer>
      <CustomLink href={`https://wa.me/+55${whatsappNumber}`}>
        <WhatsAppContainer>
          <Phone size={32} />
          <span>FALE CONOSCO PELO WHATSAPP</span>
        </WhatsAppContainer>
      </CustomLink>
    </HeaderContainer>
  )
}
