import React from "react";
import { Link, useNavigate } from "react-router-dom";
import '../../components/css/senha.css';
import Header from '../../components/Header/Header';
import Footer from "../../components/Footer/Footer";
import { useFormik } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object({
    email: yup
        .string('Digite seu email')
        .email('Digite um email válido')
        .required('Email necessário'),
    password: yup
        .string('Digite sua senha')
        .min(8, 'A senha deve ter um tamanho mínimo de 8 letras')
        .required('Senha necessária'),
});

export default function Login() {
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            // Lógica de redirecionamento após o login bem-sucedido
            navigate("/home");
        },
    });

    return (
        <>
            <Header />
            <div className="body">
                <div className="forgot-box">
                    <h2 className="h2">Login</h2>
                    <form onSubmit={formik.handleSubmit}>
                        <div className="input-group">
                            <label htmlFor="email">Login:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Digite seu email"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                                required
                            />
                            {formik.touched.email && formik.errors.email && (
                                <div style={{ color: 'red' }}>{formik.errors.email}</div>
                            )}
                        </div>
                        <div className="input-group">
                            <label htmlFor="senha">Senha:</label>
                            <input
                                type="password"
                                id="senha"
                                name="password"
                                placeholder="Digite sua senha"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.password}
                                required
                            />
                            {formik.touched.password && formik.errors.password && (
                                <div style={{ color: 'red' }}>{formik.errors.password}</div>
                            )}
                        </div>
                        <button type="submit" className="btn">Enviar</button>

                        <div className="links">
                            <Link to="/EsqueciSenha">
                                <p><a href="#">Esqueci minha senha</a></p>
                            </Link>
                        
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
}
