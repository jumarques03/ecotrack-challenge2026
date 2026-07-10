import TituloCards from "./TituloCards"
import "../styles/VariaveisAnalisadas.css"
import "../styles/EsqueletoCards.css"
import { TbReportAnalyticsFilled } from "react-icons/tb";
import VariavelCard from "./VariaveisCards";
import { FaTemperatureLow } from "react-icons/fa";
import { FaCloudRain } from "react-icons/fa";
import { FaCloudSun } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";
import variaveis from "../mock/variaveisAnalisadas.json"

function VariaveisAnalisadas () {
    return(
        <div className="container-principal">
            <TituloCards icone={<TbReportAnalyticsFilled color="#0c3260" size={20} fontWeight={600}/>} texto={"Variáveis analisadas para a previsão de crescimento"}/>

            <div className="container-variaveis">
                <VariavelCard icone={<FaTemperatureLow size={20} color="#aa0707"/>} titulo={"Temperatura"} valorDaVariavel={`${variaveis.temperatura}°C`} descricao={"Média atual"}/>
                <VariavelCard icone={<FaCloudRain size={20} color="#0712aa"/>} titulo={"Preciptação"} valorDaVariavel={`${variaveis.precipitacao}mm`} descricao={"Últimas 24h"}/>
                <VariavelCard icone={<FaCloudSun size={20} color="#f8d616"/>}  titulo={"Clima"} valorDaVariavel={`${variaveis.clima}`} descricao={"Condição atual"}/>
                <VariavelCard icone={<WiHumidity size={24} color="#22ca00"/>}  titulo={"Umidade"} valorDaVariavel={`${variaveis.umidade}%`} descricao={"Elevada"}/>
            </div>
        </div>
    )
}

export default VariaveisAnalisadas