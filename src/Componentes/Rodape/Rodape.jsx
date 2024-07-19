import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";



export default (() => {

    var anoAtual = new Date().getFullYear();
    var linkedin = "https://www.linkedin.com/in/gabriel-rodrigues-154940196/";
    return (<>
        <footer class="hidden bottom-0 left-0 z-20 w-full p-4 text-corFonte bg-corSecundaria md:flex md:items-center md:justify-between md:p-6">
            <span class=" ">© {anoAtual} F5 Informática - Escola de ensino profissionalizante.<br />
                <a href={linkedin} target="_blank" class="hover:underline"> Desenvolvido por Gabriel Dias</a>

            </span>
            <ul class="flex flex-wrap items-center mt-3 text-sm font-medium gap-4">
                <li>
                    <a href="#https://www.instagram.com/f5informatica_oficial/" target="_BLANK" class="hover:text-corPrimaria"><FontAwesomeIcon icon={faInstagram} /></a>
                </li>
                <li>
                    <a href="https://api.whatsapp.com/send/?phone=31988641232&text=Ola+tenho+interesse+nos+produtos+da+loja&type=phone_number&app_absent=0" target="_BLANK" class="hover:text-corPrimaria"><FontAwesomeIcon icon={faWhatsapp} /></a>
                </li>
                <li>
                    <a href="mailto:atendimentosac@outlook.com?subject=Informe o assunto&body=Escreva o conteúdo do e-mail" target="_BLANK" class="hover:text-corPrimaria"><FontAwesomeIcon icon={faEnvelope} /></a>
                </li>
                <li>
                    <a href="https://www.facebook.com/f5informaticaoficial/?locale=pt_BR" target="_BLANK" class="hover:text-corPrimaria"><FontAwesomeIcon icon={faFacebook} /></a>
                </li>
            </ul>
        </footer>

    </>

    )
})