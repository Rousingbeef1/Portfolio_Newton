import NavBar from "../components/Navbar";
import ProdutoCard from "../components/ProdutoCard";

export default function publicidade(){
    const cachorro = '/assets/cachorro.jpg'
    return(
        <>
        <NavBar />
        <section className="flex justify-center items-center bg-white w-screen ">
            <div className="flex justify-center items-center h-screen">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 my-8 bg-sla w-auto ">
                    <ProdutoCard texto={"Xodó Pet"} imagem={cachorro}></ProdutoCard>
                    <ProdutoCard texto={"Doação de Gibi"} imagem={undefined}></ProdutoCard>
                    <ProdutoCard texto={"Tá na Conta"} imagem={undefined}></ProdutoCard>
                    <ProdutoCard texto={"Em breve"} imagem={undefined}></ProdutoCard>
                    <ProdutoCard texto={"Em breve"} imagem={undefined}></ProdutoCard>
                    <ProdutoCard texto={"Em breve"} imagem={undefined}></ProdutoCard>
                </div>
            </div>
        </section>
    </>  
    );
}