import {useNavigate } from "react-router-dom"
import Header from "../../components/Header/HeaderHome"
import Sidebar from '../../components/Menu/Sidebar'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

const Usuario = () => {
    const navigate = useNavigate();

    const listaUser = () => {
        navigate('/Usuarios');  
    };
    const deletarUser = () => {
        navigate('/UsuarioDeletar');  
    };
    return (
        <div className="d-flex">
           <Sidebar />
           <div className="p-3 w-100">
           <Header 
                    goto={'/home'}
                    title={'Usuário'}
                    />
               <section className="mt-2 p-2 shadow-lg caixota">
                    <div className="d-flex justify-content-around">
                    <ButtonGroup variant="contained" color="error" aria-label="Basic button group">
                    <Button onClick={listaUser}>Lista de Usuários</Button>
                    <Button onClick={deletarUser}>Deletar Usuário</Button>
                    </ButtonGroup>
                    </div>
                </section>
           </div>
        </div>
    )
}

export default Usuario