
import { Link } from "react-router-dom"
import '../../components/css/suporte.css'
import Header from '../../components/Header/Header'
import Footer from "../../components/Footer/Footer";

export default function Suporte() {
    return (
<>
<div>
<Header/>
<br />
<div>
        <h1 className="h1">Suporte</h1>
        <h2 className="h2">Como funciona o suporte? </h2>
        <p className="texto">Nossa equipe de suporte está disponível 24 horas por dia para ajudá-lo 
            com qualquer dúvida ou problema.</p>
            <br />
            <h2 className="h2">Como posso entrar em contato com o suporte?</h2>

            <p className="texto">Você pode entrar em contato conosco por meio do formulário de contato abaixo ou pelo telefone 0800 123 4567.</p>
            <br />
        <form action="#" method="post">
            <label htmlFor="name" className="label">Nome</label>
            <input type="text" id="name" name="name" required className="input"/>

            <label htmlFor="email" className="label">Email</label>
            <input type="email" id="email" name="email" required  className="input"/>

            <label htmlFor="message" className="label">Mensagem</label>
            <textarea id="message" name="message" required className="textarea"></textarea>

            <Link to={"/Suporte"}>
            <button type="submit" className="button">Enviar</button>
          </Link>
           
        </form>
    </div>
</div>
</>

)
}