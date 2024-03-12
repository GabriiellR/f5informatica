import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default ((props) => {

    return (
        <>
            <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow">

                <img class="rounded-t-lg w-full" src={props.imagem} alt="" />

                <div class="p-5">
                    <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-corPrimaria">{props.titulo}</h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{props.descricao}</p>
                    <a href="#" class="inline-flex items-center  px-5 py-2 text-sm font-medium text-white bg-corSecundaria rounded-lg hover:text-corPrimaria">Saiba mais</a>
                </div>
            </div>
        </>
    )

})