import TituloCards from "./TituloCards"
import "../styles/VariaveisAnalisadas.css"
import "../styles/EsqueletoCards.css"
import { TbReportAnalyticsFilled } from "react-icons/tb";
import VariavelCard from "./VariaveisCards";
import { FaTemperatureLow } from "react-icons/fa";
import { FaCloudRain } from "react-icons/fa";
import { FaCloudSun } from "react-icons/fa";
import { GiHighGrass } from "react-icons/gi";
import { GiGroundSprout } from "react-icons/gi";

function VariaveisAnalisadas () {
    return(
        <div className="container-principal">
            <TituloCards icone={<TbReportAnalyticsFilled color="#0c3260" size={20} fontWeight={600}/>} texto={"Variáveis analisadas para a previsão de crescimento"}/>

            <div className="container-variaveis">
                <VariavelCard icone={<FaTemperatureLow size={20} color="#aa0707"/>} titulo={"Temperatura"} valorDaVariavel={"25.4°C"} descricao={"Média atual"}/>
                <VariavelCard icone={<FaCloudRain size={20} color="#0712aa"/>} titulo={"Preciptação"} valorDaVariavel={"8.7mm"} descricao={"Últimas 24h"}/>
                <VariavelCard icone={<FaCloudSun size={20} color="#f8d616"/>}  titulo={"Clima"} valorDaVariavel={"Nublado"} descricao={"Condição atual"}/>
                <VariavelCard icone={<GiHighGrass size={20} color="#22ca00"/>}  titulo={"Tipo de Grama"} valorDaVariavel={"Brachiaria"} descricao={"Predominante"}/>
                <VariavelCard icone={<GiGroundSprout size={20} color="#ca6c00"/>}  titulo={"pH do Solo"} valorDaVariavel={"6.2"} descricao={"Ideal"}/>
            </div>
        </div>
    )
}

export default VariaveisAnalisadas