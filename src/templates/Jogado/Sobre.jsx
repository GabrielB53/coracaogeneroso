import '../../components/css/sobre.css'
import Header from '../../components/Header/Header'
import Footer from "../../components/Footer/Footer"
import imgDoacao from '../../assets/images/doacao.jpeg'

export default function Sobre() {
 return (
    
<div>

<body>
 <Header/>
<section className="sobre">
        <div className="container">
            <h2>Sobre Nós</h2>
            <p>Com o apoio de pontos de coleta, recebemos diversos tipos de doações todos os dias, para podermos doar para quem mais necessita deles. Seja qual for a causa que te toca que você quer apoiar, aqui você vai sempre encontrar pessoas de bem que querem ajudar o próximo, pode confiar! E, claro, aqui você sempre será um herói .</p>
            <h2>Nossa Potencia</h2>
            <p>Nossa Rede, possui pontos de coleta, e principalmente, a solidariedade das milhões de pessoas que formam nossa audiência e, verdadeiramente, se importam.

Quer saber qual iniciativa dá match com você e fazer parte dessa rede de benfeitores, composta por centenas de organizações e movimentos sociais que lutam por um Brasil mais justo, todos os dias? É simples escolha doar e fazer o bem. É simples, seguro, poderoso e prazeroso!</p>
        </div>
    </section>
    

    <div className="container">
<img className="doacao1" src={imgDoacao} alt="doacao" />
   
   <div className="texto-doacao">
   <h1>Onde enviamos as doações?</h1>
    <p>Nossa equipe junto com os pontos de coleta, nos organizamos para que todos <br />  que  necessitam dessas e de muitas doações 
      recebam elas de forma rapida e<br /> segura para que ninguém fique sem nada. Todos da equipe e colaboradores <br />  sabem que é muito 
      importante que tudo ocorra como planejado e sem <br /> contra-tempos  para ajudar o maximo de pessoas.
    </p>
    </div>
    </div>
    <section className="sobre2">
        <div className="container2">
            <h2>Nossa Equipe</h2>
            <p>Nossa Equipe vem tendo um aumentando muito rapido assim podemos ajudar cada vez mais pesssoas que precisam e necessitam desssas doaçoes. Também as pessoas que fazem essas doações esta cada vez mais aumentando em uma escala cada vez maior, isso ajuda e muito para que possamos aumentar mais nossa rede de pontos de coleta.</p>
        </div>
    </section>
    
    <section className="time">
        <div className="container">
            <h2>Nosso Time</h2>
            <div className="membros-equipe">
                <div className="membros">
                    <h3>Arthur Martins</h3>
                    <p>Programador Front End</p>
                </div>
                <div className="membros">
                    <h3>Pedro Henrique</h3>
                    <p>Gerente | Programador Back End</p>
                </div>
                <div className="membros">
                    <h3>Nicolly Costa</h3>
                    <p>Figma Designer</p>
                </div>
                <div className="membros">
                    <h3>Isabella Marques</h3>
                    <p>Product Owner</p>
                </div>
                <div className="membros">
                    <h3>Guilherme Felix</h3>
                    <p>Funcionario</p>
                </div>
                <div className="membros">
                    <h3>Rafaela Kolle</h3>
                    <p>Figma Designer</p>
                </div>
            </div>
        </div>
    </section>
    <Footer/>

</body>
</div>

)
}