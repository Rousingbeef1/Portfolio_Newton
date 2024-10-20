import PaginaDeProduto from "../components/Pagina_de_Produto";

export default function SemanaDainovacao(){
    const imagem1 =require('../../../public/assets/tanaconta/tanaconta1.svg')
    const imagem2 =require('../../../public/assets/tanaconta/tanaconta2.svg')
    const imagem3 =require('../../../public/assets/tanaconta/tanaconta3.svg')
    const imagem4 =require('../../../public/assets/tanaconta/tanaconta4.svg')
    const imagem5 =require('../../../public/assets/tanaconta/tanaconta5.svg')
    
    return(
        <div className="">
        <PaginaDeProduto
            titulo={"Tá na conta"}
            modelo={"Identidade para Podcast."}
            objetivo={" Criar posts para Site Interno com o intuito de anunciar aos servidores do TJRR que o salário mensal já está disponível na conta. Garantir que os servidores do TJRR recebam a informação sobre o pagamento de maneira visualmente atraente e de fácil reconhecimento, promovendo o engajamento e a clareza da comunicação interna."}
            sobre={" Cada post utiliza uma cor específica para representar o mês correspondente, como roxo para agosto e amarelo para setembro. Essas cores são escolhidas para dar identidade a cada mês e manter os posts visuais interessantes e diferenciados. A combinação de cores vibrantes e claras ajuda a captar a atenção dos servidores e a comunicar a informação de forma rápida e eficaz."}
            imagem1={imagem1}
            imagem2={imagem2}
            imagem3={imagem3}
            imagem4={imagem4}
            imagem5={imagem5}
        ></PaginaDeProduto>
    </div>
    );
}