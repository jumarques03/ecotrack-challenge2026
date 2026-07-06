import "./index.css"
import GraficoLinha from "./components/GraficoLinha"
import VariaveisAnalisadas from "./components/VariaveisAnalisadas"
import DecisoesEAlocacao from "./components/DecisoesEAlocacao"
import Mapa from "./components/Mapa"
import Exportacao from "./components/Exportacao"

function HomePrincipal() {

  return (
    <div className="container">
        <div className="barra-lateral"><p>teste</p></div>

        <div className="div-main">
            <div className="header"></div>


            <div className="div-mapa-alocacao">
                <div className="mapa">
                    <Mapa/>
                </div>

                <div className="alocacao">
                    <DecisoesEAlocacao/>
                </div>
            </div>


            <div className="div-grafico-infos">
                <div className="grafico">
                    {/* COLOCAR COMPONENTE DO GRÁFICO AQUI */}
                    <GraficoLinha/>
                </div>
            
                <div className="infos">
                    <VariaveisAnalisadas/>
                </div>
            </div>
            
            
            <div className="div-exportacao">
                <Exportacao/>    
            </div> 
        </div>
    </div>
  )
}

export default HomePrincipal
