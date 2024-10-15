import NavBar from "../components/Navbar";
import ProdutoCard from "../components/ProdutoCard";

export default function portfolioInstitucional(){
        const inovacao = '/assets/inovacao.png'
        const gibi = '/assets/gibi.png'
        const taNaConta = '/assets/agosto.png'
        return (
            <>
                <NavBar />
                <section className="flex justify-center items-center bg-white w-screen ">
                    <div className="flex justify-center items-center h-screen">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 my-8 bg-sla w-auto ">
                            <ProdutoCard texto={"Semana da Inovação"} imagem={inovacao}></ProdutoCard>
                            <ProdutoCard texto={"Doação de Gibi"} imagem={gibi}></ProdutoCard>
                            <ProdutoCard texto={"Tá na Conta"} imagem={taNaConta}></ProdutoCard>
                            <ProdutoCard texto={"Em breve"} imagem={undefined}></ProdutoCard>
                            <ProdutoCard texto={"Em breve"} imagem={undefined}></ProdutoCard>
                            <ProdutoCard texto={"Em breve"} imagem={undefined}></ProdutoCard>
                        </div>
                    </div>
                </section>
            </>
        );
}