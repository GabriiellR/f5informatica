import TransicaoPagina from "../../Componentes/TransicaoPagina/TransicaoPagina.jsx";
import Apresentacao from "./Apresentacao.jsx";
import ResumoCursos from "./ResumoCursos.jsx";
import Responsive from './Reponsive.jsx'
import Conquistas from "./Conquistas.jsx";
import PerguntasFrequentes from "./PerguntasFrequentes.jsx";

const Inicio = (() => {
    return (<>
        <Apresentacao />
        <ResumoCursos />
        <Responsive />
        <Conquistas />
        <PerguntasFrequentes />

    </>)
});

export default TransicaoPagina(Inicio);