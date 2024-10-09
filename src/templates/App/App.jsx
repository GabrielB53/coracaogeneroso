import { Link } from "react-router-dom"
import '../../components/css/home.css';
import Header from '../../components/Header/Header'
import Footer from "../../components/Footer/Footer";
import imgApp from '../../assets/images/app.jpeg'
import imgCoracao from '../../assets/images/coracaoinicial.png'
import imgDinheiro from '../../assets/images/dinheiro.webp'
import imgMao from '../../assets/images/mao.webp'
function App(){
 return (
<>
<div>
    <Header/>
    <main>
      <article>
     
    <br />
    <br />

    <div class="div2">
      <p class="doador1"> <strong> DOADOR </strong> SEM FRONTEIRAS</p>
      <p class="p1">
         Doadores Sem Fronteiras são as pessoas que fazem doações mensais e recorrentes para
          Coração Generoso, que são fundamentais para manter nosso trabalho de ajudar pessoas <br />
          É graças a essas contribuições constantes que podemos ajudar cada vez mais.
        </p>
    </div>
    <br />
    <br />

    <div class="div2">
      <p class="doador2">PONTOS DE  <strong> COLETA </strong> </p>
      <p class="p1">
        O ponto de coleta de Barueri recebem doações como utensílios, movéis e até dinheiro para ajudar pessoas que realmente necessitam.
         O ponto de coleta, arrecada movéis, itens de higiene pessoal, utensílios, e dinheiro.<br />
          As entregas poderão ser feitas na unidade de Barueri.
        </p>

        <br />
        <br />

        <p class="doador3">BAIXE JÁ O NOSSO <br /> <strong> INCRIVEL APP <br /> </strong> PARA DOAR AINDA  <strong> MAIS  </strong></p>
        
        <br />
        <br />

        <p class="doador4">Aplicativo <strong> inovador,</strong>  <strong> personalizado </strong>
          para a sua <strong> doação  </strong></p>

        <br />

        <p class="p2">
        <strong>  É fácil, é social, é digital!</strong>
        </p>

        <br />
<p class="p1">
O App Coração Generoso permite que pessoas físicas façam doações únicas ou mensais para ajudar pessoas que necessitam de doações no país.
 Basta clicar no ponto de coleta e doar! 
 <br />
 <br />
 A cada doação você tem mais chance de ficar em primeiro lugar do nosso ranking de doadores. E pode concorrer a varios premios ajudando milhares de pessoas.
 <br />
 <br />
 Você também ganha pontos compartilhando o App pelo WhatsApp, Facebook, Twitter ou Instagram. Se um amigo fizer uma doação através do seu compartilhamento, você ganha mais pontos!
 <br />
 <br />
 Baixe o Doar Fácil nas lojas iOS ou Android e faça sua doação!
</p>

<br />
<br />

<img className="app" src={imgApp} alt="AppMobile" />


<button class="botao2">Conheça o Aplicativo</button>
    </div>

    <br />
    <br />

    <div class="div3"> 
      <p class="doador5">SEJA UM <strong> DOADOR </strong> AGORA MESMO! PELO <strong> CORACAO GENEROSO </strong> VOCÊ CONTRIBUI PARA AS CAUSAS MAIS RELEVANTES DO BRASIL E AJUDA A <strong> TRANSFORMAR MILHARES DE VIDAS </strong> </p>

      <br />

      <p class="p3">
        Veja alguns dos nossos números e entenda a grandiosidade do nosso projeto para beneficiar vidas:
        </p>
              <div class="container">
                <div class="item">
                    <img src={imgCoracao} alt="Coracao Icon" />
                    <p>Já conseguimos mais de duzentas mil doações.</p>
                </div>
                <div class="item">
                    <img src={imgDinheiro} alt="Dinheiro Icon" />
                    <p>Já conseguimos mais de duzentas mil doações.</p>
                </div>
                <div class="item">
                    <img src={imgMao} alt="Mao Icon" />
                    <p>Já conseguimos mais de duzentas mil doações.</p>
                </div>
            </div>
    </div>
    </article>
      </main>
      <Footer/>
    <script src="index.js"></script>
</div>
</>
)
} export default App;
