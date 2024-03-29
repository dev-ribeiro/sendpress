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
import { ArrowUDownLeft, InstagramLogo, Phone, ShoppingCartSimple } from 'phosphor-react'
import { whatsappNumber } from '../../utils/contactList'
import Link from 'next/link'
import { useContext } from 'react'
import { StoreContext } from '../../contexts/StoreContext'

interface HeaderProps {
  variant?: 'default' | 'checkout'
}

export function Header({ variant }: HeaderProps) {
  const { checkout } = useContext(StoreContext)

  return (
    <HeaderContainer>
      <LogoContainer>
        <Link href='/' prefetch={false}>
          <Image src={logo} alt={''} />
        </Link>
        <ClientPanelContainer>
          {variant === 'default' && (
            <Link href='/checkout' prefetch={false} >
              <CartProductsWrapper>
                {checkout.length > 0 && (
                  <span>{checkout.length}</span>
                )}
                <ShoppingCartSimple size={32} weight="fill" />
              </CartProductsWrapper>
            </Link>
          )}
          {variant === 'checkout' && (
            <Link href='/' prefetch={false} >
              <ArrowUDownLeft size={22} />
              <span>Continue comprando</span>
            </Link>
          )}
        </ClientPanelContainer>
      </LogoContainer>
      <IconsContainer>
        <a href={`https://wa.me/+55${whatsappNumber}`} target="blank">
          <Phone size={32} />
          <span>FALE CONOSCO PELO WHATSAPP</span>
        </a>
        <a href="https://instagram.com/sendpress_official?igshid=YmMyMTA2M2Y=" target="blank">
          <InstagramLogo size={32} />
          <span>SIGA A GENTE NO INSTAGRAM</span>
        </a>
      </IconsContainer>
    </HeaderContainer>
  )
}
