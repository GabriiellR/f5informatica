import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHome, faPeopleGroup, faDesktop, faPhone } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";

export default (() => {

    const pagina = useLocation();

    return <>
        <div className="md:hidden bg-corPrimaria text-corFonte fixed bottom-0 left-0 z-50 w-full h-16">
            <div className="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
                <Link to="/" className={`inline-flex flex-col items-center justify-center px-5 hover:bg-corSecundaria ${pagina.pathname == '/' ? 'bg-corSecundaria' : ''}`}>
                    <FontAwesomeIcon icon={faHome} />
                    <span className="text-corFonte">Início</span>
                </Link>
                <Link to="/sobrenos" className={`inline-flex flex-col items-center justify-center px-5 hover:bg-corSecundaria ${pagina.pathname == '/sobrenos' ? 'bg-corSecundaria' : ''}`}>
                    <FontAwesomeIcon icon={faPeopleGroup} />
                    <span className="text-corFonte">Sobre nós</span>
                </Link>
                <Link to="/servicos" className={`inline-flex flex-col items-center justify-center px-5 hover:bg-corSecundaria ${pagina.pathname == '/servicos' ? 'bg-corSecundaria' : ''}`}>
                    <FontAwesomeIcon icon={faDesktop} />
                    <span className="text-corFonte">Serviços</span>
                </Link>
                <Link to="/contato" className={`inline-flex flex-col items-center justify-center px-5 hover:bg-corSecundaria ${pagina.pathname == '/contato' ? 'bg-corSecundaria' : ''}`}>
                    <FontAwesomeIcon icon={faPhone} />
                    <span className="text-corFonte">Contato</span>
                </Link>
            </div>
        </div>
    </>

})