import Image from 'next/image'
import { ClientPanelContainer, HeaderContainer, LogoContainer, WhatsAppContainer } from './styles'
import logo from '../../assets/logo.png'
import { Phone, ShoppingCartSimple } from 'phosphor-react'

export function Header(){
  return (
    <HeaderContainer>
      <LogoContainer>
        <Image src={logo} alt={''} width={180} height={60} />
        <ClientPanelContainer>
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
