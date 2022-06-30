import { Container } from "./style";
import { Link } from "react-router-dom";

export function Register() {
    return (
        <Container>
            <input type="email" name="" id="login" placeholder="Email"/>
            <input type="email" name="" id="login" placeholder="Repetir email"/>
            <input type="password" name="" id="pass" placeholder="Senha"/>
            <input type="password" name="" id="pass" placeholder="Repetir senha"/>
            <button>Cadastrar</button>
            <Link to={'/'}><button>Voltar</button></Link>
           
        </Container>
    )
}