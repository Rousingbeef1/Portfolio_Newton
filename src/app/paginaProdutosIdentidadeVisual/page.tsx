import NavBar from "../components/Navbar";
import ProdutoCard from "../components/ProdutoCard";

export default function paginaprodutosidentidadevisual() {
    const pitanga = '/assets/identidadeVisual.png'
    const justicaEmFoco = '/assets/justicaemfoco.png'
    return (
        <>
            <NavBar />
            <section className="flex justify-center items-center bg-white w-screen ">
                <div className="flex justify-center items-center h-screen">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 my-8 bg-sla w-auto ">
                        <ProdutoCard texto={"Pitanga Brasil"} imagem={pitanga} link={"/pitangaBrasil"}></ProdutoCard>
                        <ProdutoCard texto={"Justiça em Foco"} imagem={justicaEmFoco} link={"/justicaemfoco"}></ProdutoCard>
                        <ProdutoCard texto={"Em breve"} imagem={undefined} ></ProdutoCard>
                        <ProdutoCard texto={"Em breve"} imagem={undefined}></ProdutoCard>
                        <ProdutoCard texto={"Em breve"} imagem={undefined}></ProdutoCard>
                        <ProdutoCard texto={"Em breve"} imagem={undefined}></ProdutoCard>
                    </div>
                </div>
            </section>
        </>
    );
}