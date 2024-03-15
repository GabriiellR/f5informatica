import { Accordion } from "flowbite-react"

export default (() => {
    return (<>
        <div className="min-h-screen bg-gradient-to-b from-black to-corPrimaria flex flex-col p-10">
            <div className="text-corFonte text-3xl font-bold" data-aos="fade-right" data-aos-duration="1500">Perguntas Frequentes</div>

            <div className="mt-14" data-aos="fade-left" data-aos-duration="1500">

                <Accordion collapseAll className="border-none focus:border-none">
                    <Accordion.Panel >
                        <Accordion.Title className="focus:border-none bg-gray-900 h-20 text-corFonte hover:bg-corSecundaria border-none">O que é a f5 informática?</Accordion.Title>
                        <Accordion.Content className="bg-corSecundaria text-corFonte">
                            <p className="mb-2">
                                Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons,
                                dropdowns, modals, navbars, and more.
                            </p>
                        </Accordion.Content>
                    </Accordion.Panel>
                </Accordion>


            </div>
        </div>
    </>)
})