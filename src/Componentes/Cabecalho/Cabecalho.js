import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faHamburger } from "@fortawesome/free-solid-svg-icons";
import { Sidebar } from "flowbite-react";


export default (() => {
    return <>

        <header className=" text-corFonte w-full h-20 p-4 sticky top-0   bg-corPrimaria">
            <div className="flex items-center h-full justify-between">

                <div className="text-xl mr-16 flex gap-3">
                    <button className="" >
                        <span className="md:hidden"><FontAwesomeIcon icon={faBars} /></span>
                    </button>

                    <span>F5</span>
                </div>

                <nav className="hidden md:flex">
                    <ul className="flex gap-7">
                        <a className="hover:text-corSecundaria" href="#">Início</a>
                        <a className="hover:text-corSecundaria" href="#">Sobre nós</a>
                        <a className="hover:text-corSecundaria" href="#">Cursos</a>
                        <a className="hover:text-corSecundaria" href="#">Serviços</a>
                        <a className="hover:text-corSecundaria" href="#">Contato</a>
                    </ul>
                </nav>

                <div><button type="button" class="text-corFonte font-bold  bg-corSecundaria focus:outline-none focus:ring-4 focus:ring-blue-300 rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2">Matricule-se</button></div>

            </div>
        </header>



        {/* <Sidebar aria-label="Default sidebar example" className="bg-corPrimaria ">
            <Sidebar.Items className="">
                <Sidebar.ItemGroup>
                    <Sidebar.Item href="#" className="text-corFonte hover:bg-corSecundaria">
                        <FontAwesomeIcon icon={faHamburger} />  Dashboard
                    </Sidebar.Item>
                    <Sidebar.Item href="#" label="Pro" labelColor="dark" className="text-corFonte hover:bg-corSecundaria">
                        <FontAwesomeIcon icon={faHamburger} /> Kanban
                    </Sidebar.Item>
                    <Sidebar.Item href="#" label="3" className="text-corFonte hover:bg-corSecundaria">
                        <FontAwesomeIcon icon={faHamburger} /> Inbox
                    </Sidebar.Item>
                    <Sidebar.Item href="#" className="text-corFonte hover:bg-corSecundaria">
                        <FontAwesomeIcon icon={faHamburger} /> Users
                    </Sidebar.Item>
                    <Sidebar.Item href="#" className="text-corFonte hover:bg-corSecundaria">
                        <FontAwesomeIcon icon={faHamburger} /> Products
                    </Sidebar.Item>
                    <Sidebar.Item href="#" className="text-corFonte hover:bg-corSecundaria">
                        <FontAwesomeIcon icon={faHamburger} /> Ssgn In
                    </Sidebar.Item>
                    <Sidebar.Item href="#" className="text-corFonte hover:bg-corSecundaria">
                        <FontAwesomeIcon icon={faHamburger} />Sign Up
                    </Sidebar.Item>
                </Sidebar.ItemGroup>
            </Sidebar.Items>
        </Sidebar> */}

    </>
});