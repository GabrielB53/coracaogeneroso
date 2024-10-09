import { Routes, Route } from "react-router-dom"
import App from "../templates/App/App"
import Login from "../templates/Login/Login"
import Perfil from "../templates/Jogado/Perfil"
import Sobre from "../templates/Jogado/Sobre"
import Cadastro from "../templates/Login/Cadastro"
import Senha from "../templates/Login/EsqueciSenha"
import Suporte from "../templates/Jogado/Suporte"
import LoginAdm from "../templates/Login/LoginAdm"
import Home from "../templates/Home/Home"
import Usuario from "../templates/Usuario/Usuario"
import UsuarioEditar from "../templates/Usuario/UsuarioEditar"
import UsuariosLista from "../templates/Usuario/UsuariosLista"
import UsuarioDeletar from "../templates/Usuario/UsuarioDeletar"


const AppRoutes = () => {
  return (
    <div>
      <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Login" element={<Login/>} />
      <Route path="/Perfil" element={<Perfil/>} />
      <Route path="/Sobre" element={<Sobre/>} />
      <Route path="/Cadastro" element={<Cadastro/>} />
      <Route path="/EsqueciSenha" element={<Senha/>} />
      <Route path="/Suporte" element={<Suporte/>} />
      <Route path="/LoginAdm" element={<LoginAdm/>} />
      <Route path="/Home" element={<Home/>} />
      <Route path="/Usuario" element={<Usuario/>} />
      <Route path="/Usuarios" element={<UsuariosLista/>} />
      <Route path="/UsuarioEditar" element={<UsuarioEditar/>} />
      <Route path="/UsuarioDeletar" element={<UsuarioDeletar/>} />
      </Routes>
    </div>

  )
}
export default AppRoutes