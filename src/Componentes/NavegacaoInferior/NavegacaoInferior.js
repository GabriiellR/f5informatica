import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faHome, faPeopleGroup, faBookOpen, faDesktop, faPhone } from "@fortawesome/free-solid-svg-icons";

export default (() => {

    return <>
        <div className="md:hidden bg-corPrimaria text-corFonte fixed bottom-0 left-0 z-50 w-full h-16">
            <div className="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
                <button type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-corSecundaria ">
                    <FontAwesomeIcon icon={faHome} />
                    <span className="text-corFonte">Início</span>
                </button>
                <button type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-corSecundaria">
                    <FontAwesomeIcon icon={faPeopleGroup} />
                    <span className="text-corFonte">Sobre nós</span>
                </button>
                <button type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-corSecundaria">
                    <FontAwesomeIcon icon={faDesktop} />
                    <span className="text-corFonte">Serviços</span>
                </button>
                <button type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-corSecundaria">
                    <FontAwesomeIcon icon={faPhone} />
                    <span className="text-corFonte">Contato</span>
                </button>
            </div>
        </div>
    </>

})