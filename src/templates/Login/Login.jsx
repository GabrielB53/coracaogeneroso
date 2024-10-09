import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import '../../components/css/senha.css';
import Header from '../../components/Header/Header';
import Footer from "../../components/Footer/Footer";


export default function Login() {
    const [erro, setErro] = useState(false);
    const navigate = useNavigate();
    
    const login = () => {
      navigate("/home");
  }

    const handleLogin = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        // Verifica se as credenciais correspondem aos dados armazenados no localStorage
        const storedEmail = localStorage.getItem("email");
        const storedPassword = localStorage.getItem("password");

        if (email === storedEmail && password === storedPassword) {
            // Redireciona para a página principal se o login for bem-sucedido
            navigate("/Home");
        } else {
            // Exibe uma mensagem de erro se as credenciais estiverem incorretas
            setErro(true);
        }
    };
    return (
        <>
            <Header/>
            <div className="body">
        <div className="forgot-box">
            <h2 className="h2">Login</h2>
            <form action="#" method="POST">
                <div className="input-group">
                    <label for="email">Login:</label>
                    <input type="email" id="email" name="email" placeholder="Digite seu email" required />
                </div>
                <div className="input-group">
                    <label for="senha">Senha:</label>
                    <input type="senha" id="senha" name="senha" placeholder="Digite sua senha" required />
                </div>
                <Link to={"/Login"}>
                <button type="submit" className="btn">Enviar</button>
                </Link>
                
                <div className="links">

                <Link to={"/EsqueciSenha"}>
                            <p><a href="#">Esqueci minha senha</a></p>
                </Link>
                <Link to={"/Cadastro"}>
                        <p><a href="#">Não tem conta? Cadastre-se</a></p>
                </Link>
            
                </div>
            </form>
        </div>
    </div>
            <Footer/>
        </>
    );
}