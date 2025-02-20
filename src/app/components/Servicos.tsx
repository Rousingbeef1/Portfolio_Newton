'use client'

import { useEffect, useState } from "react";
import ItemServico from "./ItemServico";

export default function Servicos(){
    const design = require('../../../public/assets/webdesign.webp')
    const identidadeVisual = require('../../../public/assets/identidadevisual.webp')
    const designgrafico = require('../../../public/assets/designgrafico.webp')
    const publicidade = require('../../../public/assets/publicidade.webp')

    const [visible, setVisible] = useState(false); // Estado para controlar a visibilidade
    let cont = 0
    useEffect(() => {
     
        const observer = new IntersectionObserver((entries) => {
            
            entries.forEach(entry => {
                if(cont<=1){
                if (entry.isIntersecting) {
                    setVisible(true);
                cont++ 
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
    },[]); 

    return(
        <section id="Servicos" className=" flex flex-col items-center py-32 bg-[#f7f3ff]">
            <h2 className="font-poppinssemibold text-center text-5xl pb-8 animate-slide-fade-direita text-black ">SERVIÇOS</h2>
            <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 bg-slat h-4/5 w-4/5 max-w-[1500px] gap-20 ${visible? 'animate-slide-fade-direita' : ''}`}>
                <ItemServico imagem={design} titulo={"Web Design"} definicao={"Web design é a criação da aparência e usabilidade de sites, focando no layout, cores, tipografia e navegação. O objetivo é garantir uma experiência agradável e funcional para o usuário, com design responsivo e acessível em diferentes dispositivos."}></ItemServico>
                <ItemServico imagem={identidadeVisual} titulo={"Identidade visual"} definicao={"Identidade visual é o conjunto de elementos gráficos que representam visualmente uma marca, como logotipo, cores, tipografia e símbolos. Ela cria uma imagem única e consistente ajudando a diferenciar seus valores e personalidade."}></ItemServico>
                <ItemServico imagem={designgrafico} titulo={"Design Gráfico"} definicao={"Design gráfico é a criação de peças visuais, como logotipos, embalagens e anúncios, para comunicar mensagens de forma clara e atraente. Envolve o uso de cores, formas, tipografia e imagens para impactar o público e transmitir uma ideia."}></ItemServico>
                <ItemServico imagem={publicidade} titulo={"Publicidade"} definicao={"Publicidade é a criação de conteúdos estratégicos para promover produtos, serviços ou marcas, com o objetivo de atrair e engajar o público. Em plataformas como Instagram, envolve a criação de posts visuais impulsionando a empresa."}></ItemServico>
            </div>
        </section>
    );
}