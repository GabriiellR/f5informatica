import './Timeline.css';

export default ((props) => {
    return <>
        <div className="timeline text-corFonte">
            <ul>
                {props.conteudos && props.conteudos.map((conteudo, index) => (
                    <li>
                        <div className="right_content">
                            <h2>{conteudo.titulo}</h2>
                            <p className='bg-gradient-to-t from-corSecundaria to-black rounded-md p-4 opacity-70'>
                                {conteudo.descricao}
                            </p>
                        </div>
                        <div className="left_content">
                            <h3>{conteudo.ano} </h3>
                        </div>
                    </li>
                ))}

                <div className='clear-both'></div>
            </ul>
        </div>
    </>
});