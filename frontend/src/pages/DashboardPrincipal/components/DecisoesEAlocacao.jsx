import TituloCards from "./TituloCards"
import "../styles/EsqueletoCards.css"
import { FaBrain } from "react-icons/fa";

function DecisoesEAlocacao () {
    return(
        <div className="container-principal">
            <TituloCards icone={<FaBrain color="#0c3260" size={20} fontWeight={600}/>} texto={"Central de Decisões e Alocação"}/>
        </div>
    )
}

export default DecisoesEAlocacao