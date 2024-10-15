
import ProdutoCard from "./ProdutoCard";



export default function AreaProdutos() {

    const institucional = '/assets/backgroundinstitucional.png'
    const identidadeVisual = '/assets/identidadeVisual.png'
    const publicidade = '/assets/publicidadecelular.png'
    return (
        
        <section className="flex justify-center items-center bg-white">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 my-8 bg-sla w-auto">
                <ProdutoCard texto={"Institucional"} imagem={institucional} link={"http://localhost:3000/portfolioinstitucional"}></ProdutoCard>
                <ProdutoCard texto={"Identidade Visual"} imagem={identidadeVisual} link={"http://localhost:3000/paginaProdutosIdentidadeVisual"}></ProdutoCard>
                <ProdutoCard texto={"Publicidade"} imagem={publicidade} link={"http://localhost:3000/portfolioinstitucional"}></ProdutoCard>
                <ProdutoCard texto={"Web Design"} imagem={"http://localhost:3000/portfolioinstitucional"}></ProdutoCard>
                <ProdutoCard texto={"Em breve"} imagem={"http://localhost:3000/portfolioinstitucional"}></ProdutoCard>
                <ProdutoCard texto={"Em breve"} imagem={"http://localhost:3000/portfolioinstitucional"}></ProdutoCard>
            </div>
        </section>
    );
}