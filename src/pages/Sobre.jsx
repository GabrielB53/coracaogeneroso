
import { Link } from "react-router-dom"
import '../css/sobre.css'

export default function Sobre() {
 return (
    
<div>

<body>
  <header>
    <div className="comeco">
      <h1 className="titulo">CORACAO GENEROSO</h1>
    </div>
    <div className="menu-sanduiche">
      <input type="checkbox" id="menu-toggle" />
      <label for="menu-toggle" className="menu-icon">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
      </label>
      <nav className="menu">
          <ul>
              <Link to={"/Home"}>
             Home
              </Link>
              <Link to={"/Sobre"}>
              Sobre
              </Link>

              <Link to={"/Perfil"}>
              Perfil
              </Link>

              <Link to={"/Login"}>
              Entrar
              </Link>
             
          </ul>
      </nav>
  </div>
</header>
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
<img className="doacao1" src="doacao.jpeg" alt="doacao" />
   
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
    <footer class="footer">
        <div class="container">
         <div class="linha">
           <div class="footer-coluna">
             <h4>Site</h4>
             <ul>
               <li><a href="#">Sobre Nós</a></li>
               <li><a href="#">Outros serviços</a></li>
               <li><a href="#">Politica de Privacidade</a></li>
             </ul>
           </div>
           <div class="footer-coluna">
             <h4>Precisa de Ajuda</h4>
             <ul>
               <li><a href="#">FAQ</a></li>
               <li><a href="#">Pontos de coleta</a></li>


               <Link to={"/Suporte"}>
               Suporte
               </Link>
               


             </ul>
           </div>
           <div class="footer-coluna">
             <h4>premio do mês</h4>
             <ul>
               <li><a href="#">Ranking atual</a></li>
               <li><a href="#">Sorteados anteriormente</a></li>
               <li><a href="#">Doação</a></li>
               <li><a href="#"></a></li>
             </ul>
           </div>
           <div class="footer-coluna">
             <h4>Nos siga </h4>
             <div class="social">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="facebook" viewBox="0 0 16 16">
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
                  </svg>
                  
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="passaro" viewBox="0 0 16 16">
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15"/>
                  </svg>
    
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="insta" viewBox="0 0 16 16">
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
                  </svg>
    
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="linkedin" viewBox="0 0 16 16">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                  </svg>
             </div>
           </div>
         </div>
        </div>
     </footer>

</body>
</div>

)
}