/* eslint-disable @next/next/no-html-link-for-pages */
import Image from 'next/image'
import {
  CartProductsWrapper,
  ClientPanelContainer,
  HeaderContainer,
  LogoContainer,
  IconsContainer
} from './styles'
import logo from '../../assets/logo.png'
import { House, InstagramLogo, Phone, ShoppingCartSimple } from 'phosphor-react'
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
      <IconsContainer>
        <a href={`https://wa.me/+55${whatsappNumber}`} target="blank">
          <Phone size={32} />
          <span>FALE CONOSCO PELO WHATSAPP</span>
        </a>
        <a href="https://instagram.com/sendpress_official?igshid=YmMyMTA2M2Y=" target="blank">
          <InstagramLogo size={32}/>
          <span>SIGA A GENTE NO INSTAGRAM</span>
        </a>
      </IconsContainer>
    </HeaderContainer>
  )
}
