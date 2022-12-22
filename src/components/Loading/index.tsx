import { LoadingContainer } from './styles'

export function Loading(){
  return (
    <LoadingContainer>
      <div className="lds-facebook"><div></div><div></div><div></div></div>
    </LoadingContainer>
  )
}
