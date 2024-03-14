import TransicaoPagina from "../../Componentes/TransicaoPagina/TransicaoPagina.jsx";
import Apresentacao from "./Apresentacao.jsx";
import ResumoCursos from "./ResumoCursos.jsx";
import Responsive from './Responsive.jsx'
import Conquistas from "./Conquistas.jsx";
import PerguntasFrequentes from "./PerguntasFrequentes.jsx";
import Aos from "aos";

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