
import ProdutoCard from "./ProdutoCard";



export default function AreaProdutos() {

    const institucional = '/assets/backgroundinstitucional.png'
    const identidadeVisual = '/assets/identidadeVisual.png'
    const publicidade = '/assets/publicidadecelular.png'
    return (
        
        <section className="flex justify-center items-center py-20 ">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 my-8 bg-sla w-auto animate-slide-fade py-32 ">
                <ProdutoCard texto={"Institucional"} imagem={institucional} link={"/portfolioinstitucional"}></ProdutoCard>
                <ProdutoCard texto={"Identidade Visual"} imagem={identidadeVisual} link={"/paginaProdutosIdentidadeVisual"}></ProdutoCard>
                <ProdutoCard texto={"Publicidade"} imagem={publicidade} link={"/publicidade"}></ProdutoCard>
                <ProdutoCard texto={"Web Design"} imagem={"/portfolioinstitucional"}></ProdutoCard>
                <ProdutoCard texto={"Em breve"} imagem={"/portfolioinstitucional"}></ProdutoCard>
                <ProdutoCard texto={"Em breve"} imagem={"/portfolioinstitucional"}></ProdutoCard>
            </div>
        </section>
    );
}