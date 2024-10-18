import PaginaDeProduto from "../components/Pagina_de_Produto";

export default function DoacaoGibis() {
    const imagem1 = require('../../../public/assets/campanhadoacao.png')
    const imagem2 = require('../../../public/assets/doacaopublico.png')
    return (
        <div className="">
            <PaginaDeProduto
                titulo={"Doação de Gibi"}
                modelo={"identidade para Podcast"}
                objetivo={"Objetivo: Criar posts para redes sociais e site, promovendo e incentivando a campanha de doação de gibis e mangás, organizada pelo TJRR, por meio do projeto Leitura Abre Portas. Desejando Aumentar a conscientização e o engajamento dos servidores e do público sobre a campanha de doação, incentivando a participação ativa e despertando o interesse pela leitura por meio dos gibis e mangás."}
                sobre={"A arte segue um estilo inspirado em histórias em quadrinhos (HQ), com o uso de balões de fala e cores vibrantes, trazendo um tom lúdico e divertido para a campanha. Para conectar o público com o universo dos gibis e mangás, foram incorporados símbolos representativos de personagens populares, como o coelhinho da Mônica, o anel do Lanterna Verde, e o batarang do Batman, criando uma associação visual que reforça o tema da doação de quadrinhos."}
                imagem1={imagem1}
                imagem2={imagem2}
            ></PaginaDeProduto>
        </div>
    );
}