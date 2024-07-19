import TransicaoPagina from "../../Componentes/TransicaoPagina/TransicaoPagina";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp, faLinkedin, faYoutube } from "@fortawesome/free-brands-svg-icons";


const Contato = (() => {

    return (
        <>
            <div className="bg-gradient-to-t from-corPrimaria to-black flex flex-col p-10 text-center">
                <div className="text-corFonte text-3xl font-bold" data-aos="fade-right" data-aos-duration="1500">Nossos Contatos</div>

                <div className="flex w-full justify-around flex-wrap mt-10 gap-3" data-aos="fade-right" data-aos-duration="1500">
                    <div className="h-40 w-48 flex flex-col justify-center items-center gap-4 text-corFonte ">
                        <span className="text-6xl font-semibold"><FontAwesomeIcon icon={faWhatsapp} /></span>
                        <a href="https://api.whatsapp.com/send/?phone=31988641232&text=Ola+tenho+interesse+nos+produtos+da+loja&type=phone_number&app_absent=0" target="_BLANK"><span className="">(31) 98864-1232</span></a>
                    </div>

                    <div className="h-40 w-48 flex flex-col justify-center items-center gap-4 text-corFonte ">
                        <span className="text-6xl font-semibold"><FontAwesomeIcon icon={faEnvelope} /></span>
                        <span className="">atendimentosac@outlook.com</span>
                    </div>

                    <div className="h-40 w-48 flex flex-col justify-center items-center gap-4 text-corFonte ">
                        <span className="text-6xl font-semibold"><FontAwesomeIcon icon={faPhone} /></span>
                        <span className="text-center">(31) 3911-7427</span>
                        <span className="text-center">(31) 3160-9228</span>
                    </div>

                    <div className="h-40 w-50 flex flex-col justify-center items-center gap-4 text-corFonte ">
                        <span className="text-6xl font-semibold"><FontAwesomeIcon icon={faClock} /></span>
                        <span className="">Segunda a sexta 08:30 às 18:20</span>
                        <span className="">Sábados 08:30 às 16:00</span>
                    </div>
                </div>

                <div className="p-5" data-aos="fade-right" data-aos-duration="1500">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d938.3019704469104!2d-44.15048285159803!3d-19.83115512624987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x132070e3a33d62f4!2sF5%20INFORMATICA%20LTDA!5e0!3m2!1spt-BR!2sbr!4v1615344210362!5m2!1spt-BR!2sbr" width="100%" height="500px" allowfullscreen="true"></iframe>
                    <div class="mt-3">
                        <span class="text-corFonte">Rua Vc 02, Nº 20, Loja B Nova Contagem | Contagem - MG | CEP - 32050-350</span>
                    </div>
                </div >
            </div>
        </>
    )

});

export default TransicaoPagina(Contato);