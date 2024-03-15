import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default ((props) => {

    return (
        <>
            <div class="max-w-80 bg-gray-900 border border-gray-200 rounded-lg shadow hover:shadow-2xl ">

                <img class="rounded-t-lg w-full" src={props.imagem} alt="" />

                <div class="p-5">
                    <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-corPrimaria">{props.titulo}</h5>
                    </a>
                    <p class="mb-3 font-normal text-corFonte dark:text-gray-400">{props.descricao}</p>
                    <a href="#" class="inline-flex items-center  px-5 py-2 text-sm font-medium text-white bg-corPrimaria rounded-lg hover:text-corSecundaria">Saiba mais</a>
                </div>
            </div>
        </>
    )

})