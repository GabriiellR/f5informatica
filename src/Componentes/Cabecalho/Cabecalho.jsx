import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faHome, faPeopleGroup, faBookOpen, faDesktop, faPhone } from "@fortawesome/free-solid-svg-icons";
import { Sidebar } from "flowbite-react";
import { useState } from "react";
import { motion, useScroll } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

export default (() => {

    const [toggleSidebar, setToggleSidebar] = useState(false);
    const { scrollYProgress } = useScroll();
    const pagina = useLocation();

    return <>

        <header className="text-corFonte w-full h-20 p-4 sticky top-0  z-40 bg-corPrimaria">
            <div className="flex items-center h-full justify-between">

                <div className="text-xl mr-16 flex gap-3">
                    <button>
                        <span className="md:hidden" onClick={(() => toggleSidebar == true ? setToggleSidebar(false) : setToggleSidebar(true))} >
                            <FontAwesomeIcon icon={faBars} />
                        </span>
                    </button>

                    <span className="font-bold hover:text-corSecundaria hidden lg:block">F5 Informática</span>
                    <span className="font-bold hover:text-corSecundaria lg:hidden">F5</span>
                </div>

                <nav className="hidden md:flex">
                    <ul className="flex gap-7">
                        <Link to="/" className={`hover:text-corSecundaria p-2 font-bold ${pagina.pathname == '/' ? 'text-corSecundaria' : ''}`} href="#">Início</Link>
                        <Link to="sobrenos" className={`hover:text-corSecundaria p-2 font-bold ${pagina.pathname == '/sobrenos' ? 'text-corSecundaria' : ''}`} href="#">Sobre nós</Link>
                        <Link to="cursos" className={`hover:text-corSecundaria p-2 font-bold ${pagina.pathname == '/cursos' ? 'text-corSecundaria' : ''}`} href="#">Cursos</Link>
                        <Link to="servicos" className={`hover:text-corSecundaria p-2 font-bold ${pagina.pathname == '/servicos' ? 'text-corSecundaria' : ''}`} href="#">Serviços</Link>
                        <Link to="contato" className={`hover:text-corSecundaria p-2 font-bold ${pagina.pathname == '/contato' ? 'text-corSecundaria' : ''}`} href="#">Contato</Link>
                    </ul>
                </nav>

                <div><button type="button" class="text-corFonte hover:text-corPrimaria font-bold bg-corSecundaria focus:outline-none focus:ring-4 focus:ring-blue-300 rounded-full text-sm px-4 py-2.5 text-center me-1">Matricule-se</button></div>
            </div>
        </header>

        {toggleSidebar &&

            <Sidebar className="bg-corSecundaria w-full">
                <Sidebar.Items>
                    <Sidebar.ItemGroup className="py-4 px-2">
                        <Sidebar.Item className={`text-corFonte hover:bg-corPrimaria ${pagina.pathname == '/' ? 'bg-corPrimaria' : ''}`}>
                            <Link to="/"><FontAwesomeIcon icon={faHome} />  Início</Link>
                        </Sidebar.Item>
                        <Sidebar.Item  className={`text-corFonte hover:bg-corPrimaria ${pagina.pathname == '/sobrenos' ? 'bg-corPrimaria' : ''}`}>
                            <Link to="/sobrenos"> <FontAwesomeIcon icon={faPeopleGroup} /> Sobre nós</Link>
                        </Sidebar.Item>
                        <Sidebar.Item className={`text-corFonte hover:bg-corPrimaria ${pagina.pathname == '/cursos' ? 'bg-corPrimaria' : ''}`}>
                            <Link to="/cursos"> <FontAwesomeIcon icon={faBookOpen} /> Cursos</Link>
                        </Sidebar.Item>
                        <Sidebar.Item className={`text-corFonte hover:bg-corPrimaria ${pagina.pathname == '/servicos' ? 'bg-corPrimaria' : ''}`}>
                            <Link to="/servicos"> <FontAwesomeIcon icon={faDesktop} /> Serviços</Link>
                        </Sidebar.Item>
                        <Sidebar.Item className={`text-corFonte hover:bg-corPrimaria ${pagina.pathname == '/contato' ? 'bg-corPrimaria' : ''}`}>
                            <Link to="/contato"> <FontAwesomeIcon icon={faPhone} /> Contato</Link>
                        </Sidebar.Item>

                        <div className="py-2"><button type="button" class="text-corFonte hover:text-corSecundaria font-bold bg-corPrimaria rounded-full py-3 text-center w-full">Entrar</button></div>

                    </Sidebar.ItemGroup>
                </Sidebar.Items>
            </Sidebar>
        }

        <motion.div className="fixed left-0 right-0 top-0 h-2 bg-corSecundaria rounded-2xl z-50 origin-left"
            style={{ scaleX: scrollYProgress }} />
    </>
});