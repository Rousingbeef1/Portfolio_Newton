import PaginaDeProduto from "../components/Pagina_de_Produto";

export default function justicaEmFoco() {
    const imagem1 = require('../../../public/assets/iogurtenatural/iogurtenatural.svg')
    const imagem2 = require('../../../public/assets/iogurtenatural/iogurtenatural2.svg')
    return (
        <div className="">
            <PaginaDeProduto
                titulo={"IOGURTE NATURAL"}
                modelo={"Postagem Medias Sociais"}
                objetivo={"Criar uma série de modelos de post para redes sociais que promovam o iogurte natural, destacando seus benefícios e sabor. Os posts devem ser visualmente atraentes e alinhados com a identidade da marca."}
                sobre={"Utilizar roxo para transmitir frescor e qualidade, associado à saúde do produto, e amarelo para evocar alegria e energia, estimulando o apetite. Incluir imagens do iogurte com acompanhamentos como frutas e granola, tipografia moderna e legível, além de ícones que remetam à saúde. A mensagem deve destacar os benefícios do iogurte natural, como ser rico em probióticos e sugerir combinações para consumo em diferentes momentos do dia."}
                imagem1={imagem1}
                imagem2={imagem2}
            ></PaginaDeProduto>
        </div>
    );
}