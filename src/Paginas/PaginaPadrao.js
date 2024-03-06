import { Outlet } from "react-router-dom"
import Cabecalho from "../Componentes/Cabecalho/Cabecalho.js"
import Rodape from "../Componentes/Rodape/Rodape.js"

export default (() => {

    return <>
        <Cabecalho />
        <Outlet />
        <Rodape />
    </>
})