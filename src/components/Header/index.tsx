import Image from 'next/image'
import { ClientPanelContainer, HeaderContainer, LogoContainer, WhatsAppContainer } from './styles'
import logo from '../../assets/logo.png'
import { Phone, ShoppingCartSimple } from 'phosphor-react'
import CustomLink from '../CustomLink'

export function Header(){
  return (
    <HeaderContainer>
      <LogoContainer>
        <CustomLink href='/'>
          <Image src={logo} alt={''} />
        </CustomLink>
        <ClientPanelContainer>
          <CustomLink href='/checkout' >
            <ShoppingCartSimple size={32} weight="fill" />
          </CustomLink>
        </ClientPanelContainer>
      </LogoContainer>
      <CustomLink href='https://wa.me/+5585986465315'>
        <WhatsAppContainer>
          <Phone size={32} />
          <span>FALE CONOSCO PELO WHATSAPP</span>
        </WhatsAppContainer>
      </CustomLink>
    </HeaderContainer>
  )
}
