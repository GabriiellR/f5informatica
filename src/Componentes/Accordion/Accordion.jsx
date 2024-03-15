import { Accordion } from "flowbite-react"


export default ((props) => {

    return (<>
        <Accordion collapseAll className="border-none focus:border-none mt-4">
            <Accordion.Panel >
                <Accordion.Title className="focus:ring-purple-900 bg-gray-900 h-20 text-corFonte hover:bg-purple-900">{props.titulo}</Accordion.Title>
                <Accordion.Content className="bg-gray-900 text-corFonte p-5">
                    <p className="mb-2 mt-2">
                        {props.descricao}
                    </p>
                </Accordion.Content>
            </Accordion.Panel>
        </Accordion>
    </>)
})