import HeaderHome from "../../components/Header/HeaderHome"
import Sidebar from '../../components/Menu/Sidebar'

const Home = () => {
    return (
        <div className="d-flex">
           <Sidebar />
           <div className="p-3 w-100">
                <HeaderHome 
                    goto={'/'}
                    title={'Inicial'}
                    />
                    <div className="mt-3">
                    <h2 className="text-center fw-bold m-4">Bem-vindo!</h2>
                 <main className="container"> 
                 <div class="div2">
      <p class="doador1"> <strong> DOADOR </strong> SEM FRONTEIRAS</p>
      <p class="p1">
         Doadores Sem Fronteiras são as pessoas que fazem doações mensais e recorrentes para
          Coração Generoso, que são fundamentais para manter nosso trabalho de ajudar pessoas <br />
          É graças a essas contribuições constantes que podemos ajudar cada vez mais.
        </p>
    </div>
                 </main>
            </div>
        </div>
      </div>
    )
}

export default Home