import { CurrencyCircleDollar, Package, ShieldCheck } from 'phosphor-react'
import { BriefDetailsContainer, BriefStoreContainer } from './styles'

export function BriefStore() {
  return (
    <BriefStoreContainer>
      <BriefDetailsContainer>
        <ShieldCheck size={60} />
        <h2>PAGEMENTO SEGURO VIA PIX OU BOLETO</h2>
      </BriefDetailsContainer>
      <div className='line'/>
      <BriefDetailsContainer>
        <Package size={60} />
        <h2>GARANTIA DE ENTREGA</h2>
      </BriefDetailsContainer>
      <div className='line'/>
      <BriefDetailsContainer>
        <CurrencyCircleDollar size={60}/>
        <h2>GARANTIA DE REEMBOLSO</h2>
      </BriefDetailsContainer>
    </BriefStoreContainer>
  )
}
