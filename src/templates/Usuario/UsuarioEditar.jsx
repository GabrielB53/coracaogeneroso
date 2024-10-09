import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../../components/Header/HeaderHome";
import Sidebar from '../../components/Menu/Sidebar';
import { Formik } from "formik";
import * as Yup from 'yup';
import axios from "axios";
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';

const UsuarioEditar = () => {
    const { state } = useLocation(); 
    const usuario = state.usuario; 
    const navigate = useNavigate();
    const [alerta, setAlerta] = useState({ show: false, message: '', type: '' });

    const validationSchema = Yup.object().shape({
        nome: Yup.string().required('Nome é obrigatório'),
        email: Yup.string().email('Email inválido').required('Email é obrigatório'),
        senha: Yup.string(),
        sexo: Yup.string().required('Sexo é obrigatório'), 
        dataNascimento: Yup.date().required('Data de Nascimento é obrigatória'), 
        cpf: Yup.string().required('CPF é obrigatório'), 
        telefone: Yup.string().required('Telefone é obrigatório'), 
    });

    const handleFormSubmit = (values) => {
        axios.put(`http://localhost:8080/usuario/${usuario.id}`, values)
            .then(response => {
                setAlerta({ show: true, message: 'Usuário atualizado com sucesso!', type: 'success' });
                setTimeout(() => {
                    navigate('/Usuarios');
                }, 2000);
            })
            .catch(error => {
                setAlerta({ show: true, message: 'Erro ao atualizar usuário.', type: 'error' });
            });
    };

    return (
        <div className="d-flex">
            <Sidebar />
            <div className="p-3 w-100">
                <Header
                    goto={'/usuario'}
                    title={'Editar Usuário'}
                    
                />
                <section className="m-2 p-2 shadow-lg">
                    {alerta.show && (
                        <Alert
                            icon={alerta.type === 'success' ? <CheckIcon fontSize="inherit" /> : null}
                            severity={alerta.type}
                            sx={{
                                position: 'absolute',
                                bottom: 16,
                                right: 16,
                                zIndex: 1000,
                            }}
                            onClose={() => setAlerta({ show: false, message: '', type: '' })}
                        >
                            {alerta.message}
                        </Alert>
                    )}
                    <Formik
                        initialValues={usuario} 
                        validationSchema={validationSchema}
                        onSubmit={handleFormSubmit}
                    >
                        {props => (
                            <form onSubmit={props.handleSubmit} className="row g-3">
                                <div className="col-md-2">
                                    <label htmlFor="inputID" className="form-label">ID</label>
                                    <input type="text" className="form-control" id="inputID" readOnly 
                                        value={usuario.id} />
                                </div>
                                <div className="col-md-5">
                                    <label htmlFor="inputNome" className="form-label">Nome</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="inputNome"
                                        name="nome"
                                        onChange={props.handleChange}
                                        onBlur={props.handleBlur}
                                        value={props.values.nome}
                                    />
                                    {props.touched.nome && props.errors.nome && (
                                        <div id="feedback">{props.errors.nome}</div>
                                    )}
                                </div>
                                <div className="col-md-5">
                                    <label htmlFor="inputEmail4" className="form-label">Email</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="inputEmail4"
                                        name="email"
                                        onChange={props.handleChange}
                                        onBlur={props.handleBlur}
                                        value={props.values.email}
                                    />
                                    {props.touched.email && props.errors.email && (
                                        <div id="feedback">{props.errors.email}</div>
                                    )}
                                </div>

                                <div className="col-md-5">
                                    <label htmlFor="inputSenha" className="form-label">Senha (Deixe em branco para não alterar)</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="inputSenha"
                                        name="senha"
                                        onChange={props.handleChange}
                                        onBlur={props.handleBlur}
                                        value={props.values.senha}
                                    />
                                    {props.touched.senha && props.errors.senha && (
                                        <div id="feedback">{props.errors.senha}</div>
                                    )}
                                </div>

                                <div className="col-md-5">
                                    <label htmlFor="inputSexo" className="form-label">Sexo</label>
                                    <select
                                        id="inputSexo"
                                        className="form-select"
                                        name="sexo"
                                        onChange={props.handleChange}
                                        onBlur={props.handleBlur}
                                        value={props.values.sexo}
                                    >
                                        <option value="">Selecione o sexo</option>
                                        <option value="Masculino">Masculino</option>
                                        <option value="Feminino">Feminino</option>
                                    </select>
                                    {props.touched.sexo && props.errors.sexo && (
                                        <div id="feedback">{props.errors.sexo}</div>
                                    )}
                                </div>

                                <div className="col-md-5">
                                    <label htmlFor="inputDataNascimento" className="form-label">Data de Nascimento</label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        id="inputDataNascimento"
                                        name="dataNascimento"
                                        onChange={props.handleChange}
                                        onBlur={props.handleBlur}
                                        value={props.values.dataNascimento ? props.values.dataNascimento.substring(0, 10) : ''}
                                    />
                                    {props.touched.dataNascimento && props.errors.dataNascimento && (
                                        <div id="feedback">{props.errors.dataNascimento}</div>
                                    )}
                                </div>

                                <div className="col-md-5">
                                    <label htmlFor="inputCPF" className="form-label">CPF</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="inputCPF"
                                        name="cpf"
                                        onChange={props.handleChange}
                                        onBlur={props.handleBlur}
                                        value={props.values.cpf}
                                    />
                                    {props.touched.cpf && props.errors.cpf && (
                                        <div id="feedback">{props.errors.cpf}</div>
                                    )}
                                </div>

                                <div className="col-md-5">
                                    <label htmlFor="inputTelefone" className="form-label">Telefone</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="inputTelefone"
                                        name="telefone"
                                        onChange={props.handleChange}
                                        onBlur={props.handleBlur}
                                        value={props.values.telefone}
                                    />
                                    {props.touched.telefone && props.errors.telefone && (
                                        <div id="feedback">{props.errors.telefone}</div>
                                    )}
                                </div>

                                <div className="col-12 d-flex justify-content-between">
                                    <button type="submit" className="btn btn-primary">
                                        Gravar Alterações
                                    </button>
                                </div>
                            </form>
                        )}
                    </Formik>
                </section>
            </div>
        </div>
    );
}

export default UsuarioEditar;
