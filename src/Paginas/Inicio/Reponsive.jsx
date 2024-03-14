import imagemCelular from '../../Imagens/Inicio/celular.png'
import imagemDesktop from '../../Imagens/Inicio/desktop.png'
import imagemTablet from '../../Imagens/Inicio/tablet.png'

export default (() => {

    return (<>
        <div className="min-h-screen justify-center bg-gradient-to-b from-black to-corSecundaria flex flex-col p-10">

            <div className="text-corFonte text-3xl font-bold text-center">Assista do seu jeito</div>
            <div className="text-corFonte text-xl font-semibold text-center mt-2">Assista e aproveite a tela grande da TV ou assista no tablet, laptop, celular e outros aparelhos.</div>


            <div className='flex flex-wrap justify-around'>
                <img className='' src={imagemDesktop} />
                <img className='' src={imagemCelular} />
                <img className='' src={imagemTablet} />
            </div>

        </div>
    </>)
})