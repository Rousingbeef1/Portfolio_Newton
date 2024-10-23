import PaginaDeProduto from "../components/Pagina_de_Produto";

export default function SemanaDainovacao(){
    const imagem1 =require('../../../public/assets/semanainovacao/semanainovacao2.svg')
    const imagem2 =require('../../../public/assets/semanainovacao/semanainovacao1.svg')
    return(
        <div className="">
        <PaginaDeProduto
            titulo={"Semana da Inovação"}
            modelo={"Capa para evento"}
            objetivo={"Desenvolver a identidade para o evento “Semana da Inovação”, utilizando elementos e cores que reforcem a temática do evento, além de atrair o público-alvo para se inscrever nas palestras."}
            sobre={"Sobre: A identidade visual criada para o evento da EJURR, promovido pelo TJRR, traz uma combinação de laranja e preto, cores escolhidas para refletir a energia e a seriedade do evento. No centro da composição, uma lâmpada estrategicamente posicionada conecta de forma simbólica a proposta do evento à sua logo, iluminando a ideia central e criando uma conexão visual impactante e coerente com o tema."}
            imagem1={imagem1}
            imagem2={imagem2}
            
        ></PaginaDeProduto>
    </div>
    );
}