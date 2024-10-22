'use client';
import { useEffect,  useState } from "react";
import ProdutoCard from "./ProdutoCard";

export default function AreaProdutos() {
    const institucional = '/assets/backgroundinstitucional.png';
    const identidadeVisual = '/assets/identidadeVisual.png';
    const publicidade = '/assets/publicidadecelular.png';

    const [visible, setVisible] = useState(false); // Estado para controlar a visibilidade

    useEffect(() => {
        // Função de callback do Intersection Observer
        const observer = new IntersectionObserver((entries) => {
            let cont = 0
            entries.forEach(entry => {
                if(cont<=1){
                if (entry.isIntersecting) {
                    setVisible(true);
                    cont = 1
                } else {
                    setVisible(false);
                }
            }
            });
        });

        const secao = document.querySelector('#sentinela');

        if (secao) {
            observer.observe(secao);
        }

        return () => {
            if (secao) {
                observer.unobserve(secao);
            }
        };
    }, []);

    return (
        <section id='Portfolio'className="flex justify-center items-center py-20 ">
            <div id="sentinela" className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 my-8 bg-sla w-auto ${visible ? 'animate-slide-fade' : ''} py-32 `}>
                <ProdutoCard texto={"Institucional"} imagem={institucional} link={"/portfolioinstitucional"} />
                <ProdutoCard texto={"Identidade Visual"} imagem={identidadeVisual} link={"/paginaProdutosIdentidadeVisual"} />
                <ProdutoCard texto={"Publicidade"} imagem={publicidade} link={"/publicidade"} />
                <ProdutoCard texto={"Web Design"} imagem={"/portfolioinstitucional"} link=""/>
                <ProdutoCard texto={"Em breve"} imagem={"/portfolioinstitucional"} link=""/>
                <ProdutoCard texto={"Em breve"} imagem={"/portfolioinstitucional"} link=""/>
            </div>
        </section>
    );
}
