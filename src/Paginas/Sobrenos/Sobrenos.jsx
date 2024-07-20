import Timeline from "../../Componentes/Timeline/Timeline.jsx";
import TransicaoPagina from "../../Componentes/TransicaoPagina/TransicaoPagina"
import ParticlesSobreenos from '../../Componentes/Particles/Particles.jsx'

const Sobrenos = (() => {
    return (<>
        <div className="bg-gradient-to-l from-black via-corSecundaria to-black">
            <ParticlesSobreenos />
            <Timeline conteudos={
                [
                    { "titulo": "Fundação", "descricao": "Início das atividades com prestação de serviços de manutenção de computadores, venda de suprimentos e periféricos de tecnologia, operação de LanHouse, oferta de cursos profissionalizantes e outros serviços na área de tecnologia.", "ano": "Novembro 2003" },
                    { "titulo": "Marco Atendimento", "descricao": "Realização de mais de 5 mil atendimentos diversos por mês, marcando um impacto significativo na comunidade.", "ano": "Maio 2007" },
                    { "titulo": "Marco Formação", "descricao": "Formação e capacitação de 6.280 indivíduos, preparando-os para o mercado de trabalho e entrevistas de emprego..", "ano": "Agosto 2009" },
                    { "titulo": "Reconhecimento", "descricao": "Reconhecimento pelo SEBRAE com a nota nove como empreendimento exemplar.", "ano": "Janeiro 2011" },
                    { "titulo": "Reconhecimento", "descricao": "Estudo de caso pela UFMG, tornando-se uma referência regional e objeto de estudo pela Universidade Federal de Minas Gerais (UFMG).", "ano": "Setembro 2014" },
                    { "titulo": "Parceria", "descricao": "10 anos de parceria com o programa 'Fica Vivo', proporcionando assistência a jovens em situação de vulnerabilidade social.", "ano": "Setembro 2016" },
                    { "titulo": "Tempo atuação", "descricao": "18 anos de atuação, destacando-se pelo impacto social positivo em Nova Contagem e bairros circunvizinhos.", "ano": "Setembro 2021" },
                ]
            } />
        </div>
    </>)
})

export default TransicaoPagina(Sobrenos);