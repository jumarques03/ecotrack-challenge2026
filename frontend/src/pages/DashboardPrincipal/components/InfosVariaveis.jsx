import TituloCards from "./TituloCards"
import "../styles/EsqueletoCards.css"
import { FaInfoCircle } from "react-icons/fa";

function InfosVariaveis () {
    return(
        <div className="container-principal">
            <TituloCards icone={<FaInfoCircle color="#0c3260" size={20} fontWeight={600}/>} texto={"Informações das variáveis analisadas"}/>
        </div>
    )
}

export default InfosVariaveis