import Image from 'next/image'
import { ClientPanelContainer, CTAContainer, HeaderContainer, LogoContainer, WhatsAppContainer } from './styles'
import logo from '../../assets/logo.png'
import { Heart, Phone, ShoppingCartSimple } from 'phosphor-react'

export function Header(){
  return (
    <HeaderContainer>
      <CTAContainer>
        <strong>TEMOS UMA OFERTA ESPECIAL PARA VOCE!</strong>
      </CTAContainer>
      <LogoContainer>
        <Image src={logo} alt={''} />
        <ClientPanelContainer>
          <Heart size={32} weight="fill" />
          <ShoppingCartSimple size={32} weight="fill" />
        </ClientPanelContainer>
      </LogoContainer>
      <WhatsAppContainer>
        <Phone size={32} />
        <span>FALE CONOSCO PELO WHATSAPP</span>
      </WhatsAppContainer>
    </HeaderContainer>
  )
}
