import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faHome, faPeopleGroup, faBookOpen, faDesktop, faPhone } from "@fortawesome/free-solid-svg-icons";
import { Sidebar } from "flowbite-react";
import { useState } from "react";


export default (() => {

    const [toggleSidebar, setToggleSidebar] = useState(false);

    return <>
        <header className="text-corFonte w-full h-20 p-4 sticky top-0  bg-corPrimaria">
            <div className="flex items-center h-full justify-between">

                <div className="text-xl mr-16 flex gap-3">
                    <button>
                        <span className="md:hidden" onClick={(() => toggleSidebar == true ? setToggleSidebar(false) : setToggleSidebar(true))} >
                            <FontAwesomeIcon icon={faBars} />
                        </span>
                    </button>

                    <span className="font-bold hover:text-corSecundaria">F5 Informática</span>
                </div>

                <nav className="hidden md:flex">
                    <ul className="flex gap-7">
                        <a className="hover:text-corSecundaria p-2 font-bold" href="#">Início</a>
                        <a className="hover:text-corSecundaria p-2 font-bold" href="#">Sobre nós</a>
                        <a className="hover:text-corSecundaria p-2 font-bold" href="#">Cursos</a>
                        <a className="hover:text-corSecundaria p-2 font-bold" href="#">Serviços</a>
                        <a className="hover:text-corSecundaria p-2 font-bold" href="#">Contato</a>
                    </ul>
                </nav>

                <div><button type="button" class="text-corFonte hover:text-corPrimaria font-bold bg-corSecundaria focus:outline-none focus:ring-4 focus:ring-blue-300 rounded-full text-sm px-4 py-2.5 text-center me-1">Matricule-se</button></div>
            </div>
        </header>

        {toggleSidebar &&

            <Sidebar className="bg-corPrimaria fixed">
                <Sidebar.Items>
                    <Sidebar.ItemGroup>
                        <Sidebar.Item href="#" className="text-corFonte hover:bg-corSecundaria">
                            <FontAwesomeIcon icon={faHome} />  Início
                        </Sidebar.Item>
                        <Sidebar.Item href="#" className="text-corFonte hover:bg-corSecundaria">
                            <FontAwesomeIcon icon={faPeopleGroup} /> Sobre nós
                        </Sidebar.Item>
                        <Sidebar.Item href="#" className="text-corFonte hover:bg-corSecundaria">
                            <FontAwesomeIcon icon={faBookOpen} /> Cursos
                        </Sidebar.Item>
                        <Sidebar.Item href="#" className="text-corFonte hover:bg-corSecundaria">
                            <FontAwesomeIcon icon={faDesktop} /> Serviços
                        </Sidebar.Item>
                        <Sidebar.Item href="#" className="text-corFonte hover:bg-corSecundaria">
                            <FontAwesomeIcon icon={faPhone} /> Contato
                        </Sidebar.Item>
                        <Sidebar.Item href="#" className="text-corFonte hover:bg-corSecundaria">
                            <div><button type="button" class="text-corFonte hover:text-corPrimaria font-bold bg-corSecundaria focus:outline-none focus:ring-4 focus:ring-blue-300 rounded-full  py-3 text-center w-full">Entrar</button></div>
                        </Sidebar.Item>
                    </Sidebar.ItemGroup>
                </Sidebar.Items>
            </Sidebar>
        }
    </>
});