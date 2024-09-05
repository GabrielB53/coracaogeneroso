import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Perfil from "./pages/Perfil"
import Sobre from "./pages/Sobre"
import Cadastro from "./pages/Cadastro"
import Senha from "./pages/EsqueciSenha"
import Suporte from "./pages/Suporte"

export default function App() {

  return (
    <div>
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Home" element={<Home/>} />
      <Route path="/Login" element={<Login/>} />
      <Route path="/Perfil" element={<Perfil/>} />
      <Route path="/Sobre" element={<Sobre/>} />
      <Route path="/Cadastro" element={<Cadastro/>} />
      <Route path="/EsqueciSenha" element={<Senha/>} />
      <Route path="/Suporte" element={<Suporte/>} />
     </Routes>
     </BrowserRouter>
    </div>
  )
}

