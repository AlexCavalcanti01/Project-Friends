import { Container } from "./styles";
import googleL from '../../assets/google.svg'
import { Link } from "react-router-dom";
export function Login() {
    return (
        <Container>
            <input type="email" name="" id="login" placeholder="Email ou telefone"/>
            <input type="password" name="" id="pass" placeholder="Senha"/>
            <button>Entrar</button>
            <div>
                <img src={googleL} alt="" />
                <a href="">Entrar com o Google</a>
            </div>
            <a href="#">Esqueceu a senha? Clique aqui para recuperar.</a>
            <div id="linha"> <hr /> ou <hr /> </div>,
            <Link to={'register'}><button id="new">Crie sua conta</button></Link>
        </Container>
    )
}