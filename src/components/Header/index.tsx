import { Container } from './styles'
import logo from '../../assets/logo.svg'

export function Header() {
   return (
    <Container>
        <h2>Friends</h2>
        <p>Junte-se a seus amigos e compartilhem momentos inesquecíveis juntos.</p>
        <img src={logo} alt="Nome Friends" />
    </ Container>
   )
}