/* eslint-disable @next/next/no-html-link-for-pages */
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
import { whatsappNumber } from '../../utils/contactList'
import { useCheckout } from '../../hooks/useCheckout'
import { useContext } from 'react'
import { ProductContext } from '../../contexts/ProductContexts'
import Link from 'next/link'

interface HeaderProps {
  variant?: 'home' | 'checkout'
}

export function Header({ variant }: HeaderProps) {
  const { checkoutCart } = useCheckout()

  return (
    <HeaderContainer>
      <LogoContainer>
        <Link href='/' prefetch={false}>
          <Image src={logo} alt={''} />
        </Link>
        <ClientPanelContainer>
          {
            variant === 'home' || !variant
              ? (
                <Link href='/checkout' prefetch={false} >
                  <CartProductsWrapper>
                    {checkoutCart.length > 0 && (
                      <span>{checkoutCart.length}</span>
                    )}
                    <ShoppingCartSimple size={32} weight="fill" />
                  </CartProductsWrapper>
                </Link>
              )
              : (
                <Link href='/' prefetch={false} >
                  <House size={32} weight="fill" />
                </Link>
              )
          }
        </ClientPanelContainer>
      </LogoContainer>
      <Link href={`https://wa.me/+55${whatsappNumber}`} prefetch={false} >
        <WhatsAppContainer>
          <Phone size={32} />
          <span>FALE CONOSCO PELO WHATSAPP</span>
        </WhatsAppContainer>
      </Link>
    </HeaderContainer>
  )
}
