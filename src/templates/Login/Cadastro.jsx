import React, { useState, useEffect } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup'; 
import axios from 'axios';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
import '../../components/css/cadastro.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { useNavigate } from 'react-router-dom';

export default function Cadastro() {
    const [dados, setDados] = useState({});
    const [clicou, setClicou] = useState(false);
    const [alerta, setAlerta] = useState({ show: false, message: '', type: '' });
    const navigate = useNavigate();

    const validationSchema = Yup.object().shape({
        nome: Yup.string().required('Nome é obrigatório'),
        email: Yup.string().email('Email inválido').required('Email é obrigatório'),
        senha: Yup.string().required('Senha é obrigatória'),
        cpf: Yup.string().length(11, 'CPF deve ter 11 dígitos').required('CPF é obrigatório'),
        telefone: Yup.string().optional(),
        sexo: Yup.string().optional(),
        dataNascimento: Yup.date().optional(),
    });

    const enviarDados = () => {
        axios.post('http://localhost:8080/usuario', dados)
            .then(response => {
                console.log(response);
                setAlerta({ show: true, message: 'Usuário cadastrado com sucesso!', type: 'success' });
                setTimeout(() => {
                    navigate('/login');
                }, 2000);
            })
            .catch(error => {
                console.log(error);
                setAlerta({ show: true, message: 'Erro ao enviar dados.', type: 'error' });
            })
            .finally(() => {
                setClicou(false); 
            });
    };

    useEffect(() => {
        if (clicou) {
            enviarDados();
        }
    }, [clicou]);

    return (
        <div className="">
            <Header />
            <section className="m-2 p-2 shadow-lg centered-container">
                <Formik
                    initialValues={{
                        nome: '',
                        email: '',
                        senha: '',
                        cpf: '',
                        telefone: '',
                        sexo: '',
                        dataNascimento: '',
                    }}
                    validationSchema={validationSchema}
                    onSubmit={(values, actions) => {
                        setDados(values);
                        setClicou(true);
                    }}
                >
                    {props => (
                        <form onSubmit={props.handleSubmit} className="form-section row g-3">
                            <div className="col-md-12">
                                <input
                                    className="form-control"
                                    type="text"
                                    onChange={props.handleChange}
                                    onBlur={props.handleBlur}
                                    value={props.values.nome}
                                    placeholder="Nome"
                                    name="nome"
                                />
                                {props.touched.nome && props.errors.nome && (
                                    <div id="feedback">{props.errors.nome}</div>
                                )}
                            </div>
                            <div className="col-md-12">
                                <input
                                    className="form-control"
                                    type="text"
                                    onChange={props.handleChange}
                                    onBlur={props.handleBlur}
                                    value={props.values.email}
                                    name="email"
                                    placeholder="Emailegal@gmail.com"
                                />
                                {props.touched.email && props.errors.email && (
                                    <div id="feedback">{props.errors.email}</div>
                                )}
                            </div>
                            <div className="col-md-12">
                                <input
                                    className="form-control"
                                    type="password"
                                    onChange={props.handleChange}
                                    onBlur={props.handleBlur}
                                    value={props.values.senha}
                                    name="senha"
                                    placeholder="Senha"
                                />
                                {props.touched.senha && props.errors.senha && (
                                    <div id="feedback">{props.errors.senha}</div>
                                )}
                            </div>
                            <div className="col-md-12">
                                <input
                                    className="form-control"
                                    type="text"
                                    onChange={props.handleChange}
                                    onBlur={props.handleBlur}
                                    value={props.values.cpf}
                                    name="cpf"
                                    placeholder="CPF"
                                    maxLength={11}
                                />
                                {props.touched.cpf && props.errors.cpf && (
                                    <div id="feedback">{props.errors.cpf}</div>
                                )}
                            </div>
                            <div className="col-md-12">
                                <input
                                    className="form-control"
                                    type="text"
                                    onChange={props.handleChange}
                                    onBlur={props.handleBlur}
                                    value={props.values.telefone}
                                    name="telefone"
                                    placeholder="Telefone"
                                />
                                {props.touched.telefone && props.errors.telefone && (
                                    <div id="feedback">{props.errors.telefone}</div>
                                )}
                            </div>
                            <div className="col-md-12">
                                <select
                                    className="form-control"
                                    onChange={props.handleChange}
                                    onBlur={props.handleBlur}
                                    value={props.values.sexo}
                                    name="sexo"
                                >
                                    <option value="" label="Selecione o Sexo" />
                                    <option value="masculino" label="Masculino" />
                                    <option value="feminino" label="Feminino" />
                                    <option value="outro" label="Outro" />
                                </select>
                                {props.touched.sexo && props.errors.sexo && (
                                    <div id="feedback">{props.errors.sexo}</div>
                                )}
                            </div>
                            <div className="col-md-12">
                                <input
                                    className="form-control"
                                    type="date"
                                    onChange={props.handleChange}
                                    onBlur={props.handleBlur}
                                    value={props.values.dataNascimento}
                                    name="dataNascimento"
                                />
                                {props.touched.dataNascimento && props.errors.dataNascimento && (
                                    <div id="feedback">{props.errors.dataNascimento}</div>
                                )}
                            </div>
                            <div className="col-12">
                                <button type="submit" className="btn btn-secondary">SALVAR</button>
                            </div>
                            {alerta.show && (
                                <div className="mt-3 col-12">
                                    <Alert
                                        icon={alerta.type === 'success' ? <CheckIcon fontSize="inherit" /> : null}
                                        severity={alerta.type}
                                        onClose={() => setAlerta({ show: false, message: '', type: '' })}
                                    >
                                        {alerta.message}
                                    </Alert>
                                </div>
                            )}
                        </form>
                    )}
                </Formik>
            </section>
            <Footer />
        </div>
    );
}
