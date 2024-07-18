import Counter from "../../Componentes/Counter/Counter";

export default (() => {
    const anoNascimento = 2003;
    const idade = new Date().getFullYear() - anoNascimento;

    return (<>
        <div className="bg-gradient-to-b from-corSecundaria to-black flex flex-col p-10 text-center">
            <div className="text-corFonte text-3xl font-bold" data-aos="fade-right" data-aos-duration="1500">Nossas Conquistas</div>

            <div className="flex w-full justify-around flex-wrap mt-10 gap-3" data-aos="fade-right" data-aos-duration="1500">
                <div className="h-40 w-48 flex flex-col justify-center items-center gap-4 text-corFonte ">
                    <span className="text-6xl font-semibold"><Counter numero={idade} /> </span>
                    <span className="">ANOS DE HISTÓRIA</span>
                </div>

                <div className="h-40 w-48 flex flex-col justify-center items-center gap-4 text-corFonte ">
                    <span className="text-6xl font-semibold">+{<Counter numero={5000} />}</span>
                    <span className="text-center">ATENDIMENTOS POR MÊS</span>
                </div>

                <div className="h-40 w-48 flex flex-col justify-center items-center gap-4 text-corFonte ">
                    <span className="text-6xl font-semibold">+{<Counter numero={6280} />}</span>
                    <span className="">ALUNOS FORMADOS</span>
                </div>

                <div className="h-40 w-48 flex flex-col justify-center items-center gap-4 text-corFonte ">
                    <span className="text-6xl font-semibold">+{<Counter numero={500} />}</span>
                    <span className="">CURSOS OFERECIDOS</span>
                </div>
            </div>


        </div>
    </>)
})