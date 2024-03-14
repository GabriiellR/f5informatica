import Devices from '../../Imagens/Inicio/devices.png'


export default (() => {

    return (<>
        <div className="min-h-screen bg-gradient-to-b from-black to-corSecundaria flex-col flex p-10 justify-around items-center">

            <div className='' data-aos="fade-left" data-aos-duration="1500">
                <div className="text-corFonte text-3xl font-bold text-center">Assista do seu jeito</div>
                <div className="text-corFonte text-xl font-semibold text-center mt-2">Assista e aproveite a tela grande da TV ou assista no tablet, laptop, celular e outros aparelhos. nossa plataforma, com sua notável responsividade, adapta-se perfeitamente a qualquer dispositivo, garantindo uma experiência fluida e cativante, onde quer que você esteja.</div>
            </div>

            <div className='flex flex-wrap justify-around grid-cols-6' data-aos="fade-right" data-aos-duration="1500">
                <img className='' src={Devices} />
            </div>

        </div>
    </>)
})