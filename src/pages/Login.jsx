import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import '../css/login.css';

export default function Login() {
    const [erro, setErro] = useState(false);
    const navigate = useNavigate();

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
            <header>
                <div className="comeco">
                    <h1 className="titulo">CORACAO GENEROSO</h1>
                </div>
                <div className="menu-sanduiche">
                    <input type="checkbox" id="menu-toggle" />
                    <label htmlFor="menu-toggle" className="menu-icon">
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </label>
                    <nav className="menu">
                        <ul>
                            <Link to={"/Home"}>Home</Link>
                            <Link to={"/Sobre"}>Sobre</Link>
                            <Link to={"/Perfil"}>Perfil</Link>
                            <Link to={"/Login"}>Entrar</Link>
                        </ul>
                    </nav>
                </div>
            </header>
            <div className="body">
                <div className="login-box">
                    <h2 className="h2">Login</h2>
                    <form onSubmit={handleLogin}>
                        <div className="input-group">
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" name="email" placeholder="Digite seu email" required />
                        </div>
                        <div className="input-group">
                            <label htmlFor="password">Senha:</label>
                            <input type="password" id="password" name="password" placeholder="Digite sua senha" required />
                        </div>
                        <button type="submit" className="btn">Entrar</button>
                        {erro && <p className="erro">Email ou senha incorretos!</p>}
                    </form>
                    <div className="links">
                        <Link to={"/EsqueciSenha"}>
                            <p><a href="#">Esqueci minha senha</a></p>
                        </Link>
                        <Link to={"/Cadastro"}>
                            <p><a href="#">Não tem conta? Cadastre-se</a></p>
                        </Link>
                    </div>
                </div>
            </div>
            <footer className="footer">
                <div className="container">
                    <div className="linha">
                        {/* Footer */}
                    </div>
                </div>
            </footer>
        </>
    );
}