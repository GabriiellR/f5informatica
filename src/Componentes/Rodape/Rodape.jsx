import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin, faYoutube } from "@fortawesome/free-brands-svg-icons";


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
                    <a href="#" class="hover:text-corPrimaria"><FontAwesomeIcon icon={faInstagram} /></a>
                </li>
                <li>
                    <a href="#" class="hover:text-corPrimaria"><FontAwesomeIcon icon={faLinkedin} /></a>
                </li>
                <li>
                    <a href="#" class="hover:text-corPrimaria"><FontAwesomeIcon icon={faYoutube} /></a>
                </li>
                <li>
                    <a href="#" class="hover:text-corPrimaria"><FontAwesomeIcon icon={faFacebook} /></a>
                </li>
            </ul>
        </footer>

    </>

    )
})