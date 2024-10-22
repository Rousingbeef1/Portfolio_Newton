import Navbar2 from "../components/NavBar2";
import ProdutoCard from "../components/ProdutoCard";

export default function portfolioInstitucional(){
        const inovacao = '/assets/inovacao.png'
        const gibi = '/assets/gibi.png'
        const taNaConta = '/assets/tanaconta1.png'
        return (
            <>
                <Navbar2/>
              
                    <div className="flex justify-center items-center sm:h-screen">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 my-8 bg-sla w-auto ">
                            <ProdutoCard texto={"Semana da Inovação"} imagem={inovacao} link="/semanadainovacao"></ProdutoCard>
                            <ProdutoCard texto={"Doação de Gibi"} imagem={gibi} link="/doacaogibis"></ProdutoCard>
                            <ProdutoCard texto={"Tá na conta"} imagem={taNaConta} link="/tanaconta"></ProdutoCard>
                            <ProdutoCard texto={"Em breve"} imagem={undefined} link=""></ProdutoCard>
                            <ProdutoCard texto={"Em breve"} imagem={undefined} link=""></ProdutoCard>
                            <ProdutoCard texto={"Em breve"} imagem={undefined} link=""></ProdutoCard>
                        </div>
                    </div>
           
            </>
        );
}