import Image from 'next/image'
import { ClientPanelContainer, HeaderContainer, LogoContainer, WhatsAppContainer } from './styles'
import logo from '../../assets/logo.png'
import { House, Phone, ShoppingCartSimple } from 'phosphor-react'
import CustomLink from '../CustomLink'
import { whatsappNumber } from '../../utils/contactList'

interface HeaderProps {
  variant?: 'home' | 'checkout'
}

export function Header({ variant }: HeaderProps) {
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
                  <ShoppingCartSimple size={32} weight="fill" />
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
