import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import '../css/cadastro.css';

export default function Cadastro() {
    const [cadastroFeito, setCadastroFeito] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        // Armazenando os dados de email e senha no localStorage
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);

        setCadastroFeito(true);

        // Redireciona para a página de login após o cadastro
        setTimeout(() => {
            navigate("/Login");
        }, 2000); // Espera 2 segundos antes de redirecionar
    };
    const Cadastro = () => {

        const [dados, setDados] = useState({})
        const [clicou, setClicou] = useState(false)
        
        function enviarDados(){
            axios.post('http://localhost:8080/api/v1/cadastro', 
                dados
            ).then(response => console.log(response))
            .then(dados => alert('Dados enviados com sucesso'))
            .catch(error => console.log(error))
        }
        
        useEffect(()=>{
           clicou ? enviarDados() : console.log('app no ar')
           return (()=>setClicou(false))
        }, [clicou])
        
        return (
        <div>
            <h1>Cadastrar Produto</h1>
            <Formik
                initialValues={{
                    id: 0,
                    nome: '',
                    sexo: '',
                    data_nasci: '',
                    idade: '',
                    cpf: null,
                    telefone: '',
                    logradouro: null,
                    cep: '',
                    bairro: null,
                    cidade: null,
                    uf: null,
                    email: '',
                    senha: '',
                    cod_status: '',
                }}
                onSubmit={(values, actions) => {
        
                    if(values.nome.length > 0){
                            setTimeout(() => {
                            setDados({
                                nome: values.nome,
                                descricao: values.descricao,
                                codigoBarras: values.codigoBarras,
                                foto: values.foto,
                                preco: values.preco,
                                categoria: values.categoria,
                                destaque: values.destaque,
                                statusProd: values.statusProd
                            })
                            setClicou(true)
                            // alert(JSON.stringify(values, null, 2));
                            // console.log(JSON.stringify(values, null, 2));
                            // actions.setSubmitting(false);
                        }, 1000);
                    } else {
                        alert('Favor preencher informações!')
                    }
                    
                }}
            >
                {props => (
                    <form onSubmit={props.handleSubmit}>
                        <div>
                            <input
                                type="number"
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                                value={props.values.id}
                                placeholder='0'
                                name="id"
                                disabled
                            />
                            {props.errors.id && <div id="feedback">{props.errors.id}</div>}
                        </div>
        
                        <div>
                            <input
                                type="text"
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                                value={props.values.nome}
                                placeholder="Nome do Usuario"
                                name="nome"
                            />
                            {props.errors.nome && <div id="feedback">{props.errors.nome}</div>}
                        </div>
        
                        <div>
                            <input
                                type="text"
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                                value={props.values.sexo}
                                name="sexo"
                                placeholder="sexo"
                            />
                            {props.errors.sexo && <div id="feedback">{props.errors.sexo}</div>}
                        </div>
                        <div>
                            <input
                                type="date"
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                                value={props.values.data_nasci}
                                name="data_nasci"
                                placeholder="dd/mm/aaaa"
                            />
                            {props.errors.data_nasci && <div id="feedback">{props.errors.data_nasci}</div>}
                        </div>
                        <div>
                            <input
                                type="number"
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                                value={props.values.idade}
                                name="idade"
                                placeholder="idade"
                             
                            />
                            {props.errors.idade && <div id="feedback">{props.errors.idade}</div>}
                        </div>
                        <div>
                            <input
                                type="number"
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                                value={props.values.cpf}
                                name="cpf"
                                placeholder="cpf"
                            />
                            {props.errors.cpf && <div id="feedback">{props.errors.cpf}</div>}
                        </div>
                        <div>
                            <input
                                type="number"
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                                value={props.values.telefone}
                                name="telefone"
                                placeholder="Telefone do Usuario"
                            />
                            {props.errors.telefone && <div id="feedback">{props.errors.telefone}</div>}
                        </div>
                        <div>
                            <input
                                type="text"
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                                value={props.values.logradouro}
                                name="logradouro"
                                placeholder="logradouro"
                            />
                            {props.errors.logradouro && <div id="feedback">{props.errors.logradouro}</div>}
                        </div>
                        <div>
                            <input
                                type="text"
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                                value={props.values.cep}
                                name="cep"
                                placeholder="cep"
                            />
                            {props.errors.cep && <div id="feedback">{props.errors.cep}</div>}
                        </div>
                        <div>
                            <input
                                type="text"
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                                value={props.values.bairro}
                                name="bairro"
                                placeholder="bairro"
                            />
                            {props.errors.bairro && <div id="feedback">{props.errors.bairro}</div>}
                        </div>
                        <div>
                            <input
                                type="text"
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                                value={props.values.cidade}
                                name="cidade"
                                placeholder="cidade"
                            />
                            {props.errors.cidade && <div id="feedback">{props.errors.cidade}</div>}
                        </div>
                        <div>
                            <input
                                type="text"
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                                value={props.values.uf}
                                name="uf"
                                placeholder="uf"
                            />
                            {props.errors.uf && <div id="feedback">{props.errors.uf}</div>}
                        </div>
                        <div>
                            <input
                                type="text"
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                                value={props.values.email}
                                name="email"
                                placeholder="email"
                            />
                            {props.errors.email && <div id="feedback">{props.errors.email}</div>}
                        </div>
                        <div>
                            <input
                                type="text"
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                                value={props.values.senha}
                                name="senha"
                                placeholder="senha"
                            />
                            {props.errors.senha && <div id="feedback">{props.errors.senha}</div>}
                        </div>
                        <div>
                            <input
                                type="text"
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                                value={props.values.cod_status}
                                name="cod_status"
                                placeholder="cod_status"
                            />
                            {props.errors.cod_status && <div id="feedback">{props.errors.cod_status}</div>}
                        </div>
                    </form>
                )}
            </Formik>
        </div>
        );
        }
        
    return (
        <>
            <body>
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
                    <div className="registro-box">
                        <h2 className="h2">Criar Conta</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="input-grupo">
                                <label htmlFor="nome">Nome Completo:</label>
                                <input type="text" id="nome" name="nome" placeholder="Digite seu nome" required />
                            </div>
                            <div className="input-grupo">
                                <label htmlFor="text">sexo:</label>
                                <input type="text" id="sexo" name="sexo" placeholder="Digite sua sexo" required />
                            </div>
                            <div className="input-grupo">
                                <label htmlFor="idade">Data de Nascimento:</label>
                                <input type="date" id="data_nasci" name="idade" required />
                            </div>
                            <div className="input-grupo">
                                <label htmlFor="number">idade:</label>
                                <input type="number" id="idade" name="idade" placeholder="Digite sua idade" required />
                            </div>
                            <div className="input-grupo">
                                <label htmlFor="cpf">CPF:</label>
                                <input type="number" id="cpf" name="cpf" placeholder="Digite seu CPF" required />
                            </div>
                            <div className="input-grupo">
                                <label htmlFor="telefone">telefone:</label>
                                <input type="number" id="telefone" name="telefone" placeholder="Digite seu telefone" required />
                            </div>
                            <div className="input-grupo">
                                <label htmlFor="logradouro">logradouro:</label>
                                <input type="text" id="logradouro" name="logradouro" placeholder="Digite seu logradouro" required />
                            </div>
                            <div className="input-grupo">
                                <label htmlFor="cep">CEP:</label>
                                <input type="text" id="cep" name="cep" placeholder="Digite seu CEP" required />
                            </div>
                            <div className="input-grupo">
                                <label htmlFor="bairro">bairro:</label>
                                <input type="text" id="bairro" name="bairro" placeholder="Digite seu bairro" required />
                            </div>
                            <div className="input-grupo">
                                <label htmlFor="cidade">cidade:</label>
                                <input type="text" id="cidade" name="cidade" placeholder="Digite sua cidade" required />
                            </div>
                            <div className="input-grupo">
                                <label htmlFor="uf">UF:</label>
                                <input type="text" id="uf" name="uf" placeholder="Digite a uf do seu estado" required />
                            </div>
                            <div className="input-grupo">
                                <label htmlFor="email">Email:</label>
                                <input type="email" id="email" name="email" placeholder="Digite seu email" required />
                            </div>
                            <div className="input-grupo">
                                <label htmlFor="password">Senha:</label>
                                <input type="password" id="password" name="password" placeholder="Digite sua senha" required />
                            </div>
                            <div className="input-grupo">
                                <label htmlFor="confirm-password">Confirme sua Senha:</label>
                                <input type="password" id="confirm-password" name="confirm-password" placeholder="Confirme sua senha" required />
                            </div>
                           
                           
                            <button type="submit" className="btn">Cadastrar</button>
                        </form>
                        {cadastroFeito && <p className="sucesso">Cadastro realizado com sucesso! Redirecionando para o login...</p>}
                        <div className="links">
                            <Link to={"/Login"}>
                                <p>Já tem uma conta? <a href="#">Entre aqui</a></p>
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
            </body>
        </>
    );
}