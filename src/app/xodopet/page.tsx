import PaginaDeProduto from "../components/Pagina_de_Produto";

export default function SemanaDainovacao(){
    const imagem1 =require('../../../public/assets/xodopet/xodopet1.svg')
    const imagem2 =require('../../../public/assets/xodopet/xodopet2.svg')
    return(
        <div className="">
        <PaginaDeProduto
            titulo={"PET SHOP"}
            modelo={"Postagem Mídias Sociais"}
            objetivo={"Criar posts para redes sociais com o intuito de divulgar produtos e promoções de um petshop. Aumentar o engajamento nas redes sociais e promover os produtos e ofertas do petshop de maneira atrativa e divertida."}
            sobre={"A cor laranja é predominante, trazendo energia e dinamismo, capturando a atenção do público. O verde escuro oferece contraste, representando confiança e qualidade. As artes incluem um cachorro engraçado para gerar simpatia e apelo emocional, além de imagens de ração e o preço, criando uma comunicação clara e direta sobre as ofertas do petshop."}
            imagem1={imagem1}
            imagem2={imagem2}
            
        ></PaginaDeProduto>
    </div>
    );
}