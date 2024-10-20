import PaginaDeProduto from "../components/Pagina_de_Produto";

export default function SemanaDainovacao(){
    const imagem1 =require('../../../public/assets/semanainovacao/semanainovacao2.svg')
    const imagem2 =require('../../../public/assets/semanainovacao/semanainovacao1.svg')
    return(
        <div className="">
        <PaginaDeProduto
            titulo={"Semana da Inovação"}
            modelo={"identidade para Podcast"}
            objetivo={"desenvolver a identidade visual para o Podcast “ Justiça em foco”. A logo deve transmitir a essência do podcast, utilizando elementos visuais que remetam ao mundo jurídico, ao mesmo tempo em que se mantenha atraente para o público geral."}
            sobre={"Sobre: O Justiça em Foco é um podcast do Tribunal de Justiça de Roraima (TJRR) que visa promover a transparência e a educação jurídica. O programa aborda temas relevantes do sistema judiciário, esclarecendo dúvidas da população sobre processos legais e direitos civis."}
            imagem1={imagem1}
            imagem2={imagem2}
            
        ></PaginaDeProduto>
    </div>
    );
}