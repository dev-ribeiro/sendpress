import { LoadingContainer } from './styles'

export function LoadingSpinner(){
  return (
    <LoadingContainer>
      <div className="lds-facebook"><div></div><div></div><div></div></div>
    </LoadingContainer>
  )
}
