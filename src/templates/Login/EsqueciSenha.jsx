
import { Link } from "react-router-dom"
import '../../components/css/senha.css';
import Header from '../../components/Header/Header';
import Footer from "../../components/Footer/Footer";


export default function EsqueciSenha() {
    return (

        <>
        <div>  
  <Header/>
<div className="body">
        <div className="forgot-box">
            <h2 className="h2">Recuperar Senha</h2>
            <form action="#" method="POST">
                <div className="input-group">
                    <label for="email">Informe seu Email:</label>
                    <input type="email" id="email" name="email" placeholder="Digite seu email" required />
                </div>
                <div className="input-group">
                    <label for="senha">Informe sua nova senha:</label>
                    <input type="senha" id="senha" name="senha" placeholder="Digite sua nova senha" required />
                </div>
                <div className="input-group">
                    <label for="senha">Confirme sua nova senha</label>
                    <input type="senha" id="senha" name="senha" placeholder="Digite sua nova senha" required />
                </div>

                <Link to={"/Login"}>
                <button type="submit" className="btn">Enviar</button>
                </Link>
                
                <div className="links">

                <Link to={"/Login"}>
                <p><a href="#">Voltar ao Login</a></p>
                </Link>
            
                </div>
            </form>
        </div>
    </div>
    <Footer/>
</div>
        </>

    )

}