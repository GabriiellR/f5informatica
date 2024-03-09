import { Outlet } from "react-router-dom"
import Cabecalho from "../Componentes/Cabecalho/Cabecalho.js"
import Rodape from "../Componentes/Rodape/Rodape.js"
import NavegacaoInferior from "../Componentes/NavegacaoInferior/NavegacaoInferior.js"

export default (() => {

    return <>
        <Cabecalho />
        <div className="min-h-screen">
            <Outlet />
        </div>
        <Rodape />
        <NavegacaoInferior />
    </>
})