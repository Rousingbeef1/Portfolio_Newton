import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import Navbar2 from "./NavBar2";

interface pagina_de_produto{
    imagem1?: StaticImport,
    imagem2?: StaticImport,
    imagem3?: StaticImport,
    imagem4?: StaticImport,
    imagem5?: StaticImport,
    imagem6?: StaticImport,
    imagem7?: StaticImport,
   

    titulo: string,
    modelo: string,
    objetivo: string,
    sobre: string,
}

export default function PaginaDeProduto(props:pagina_de_produto) {
    let ativaSetima = false
    let ativaSexta = false
    let ativaTerceira = false
    let ativa = false

    if(props.imagem4==undefined){
        ativa = false
    }
    else{
        ativa = true
    }

    if(props.imagem3==undefined){
        ativaTerceira = false
    }
    else{
        ativaTerceira = true
    }

    if(props.imagem7==undefined){
        ativaSetima = false
    }
    else{
        ativaSetima = true
    }
    
    if(props.imagem6==undefined){
        ativaSexta = false
    }
    else{
        ativaSexta = true
    }


    

    return (
        <>
            <Navbar2></Navbar2>

            <section className="grid grid-cols-1 gap-12 md:grid-cols-2 bg-white md:my-32 md:px-40 h-screen p-">
                <div className={`flex flex-col gap-14 md:row-start-1 pb-40`}>
                    <Image className="w-auto h-auto" src={props.imagem1!} alt={""} width={300} height={300} ></Image>
                    <Image className="w-auto h-auto" src={props.imagem2!} alt={"2"} width={300} height={300}></Image>
                    <Image className={`${ativaTerceira? 'block': 'hidden'} w-auto h-auto`} src={props.imagem3!} alt={"3"} width={300} height={300}></Image>
                    <div className={`${ativa? 'grid': 'hidden'} grid-flow-col- grid-rows-2 grid-cols-2 md:grid-cols-2 md:grid-rows-2 gap-14`}>
                        <Image className={`${!props.imagem4? 'hidden': ''}`} src={props.imagem4!} alt={"4"} width={300} height={300}></Image>
                        <Image src={props.imagem5!} alt={"5"} width={300} height={300}></Image>
                        <Image className={`${ativaSexta? 'grid': 'hidden'}`} src={props.imagem6!} alt={"6"} width={300} height={300}></Image>
                        <Image className={`${ativaSetima? 'grid': 'hidden'}`} src={props.imagem7!} alt={"7"} width={300} height={300}></Image>
                   
                    </div>
                </div>
                <div className="row-start-1 md:order-0 p-4">
                    <h1 className=" md:text-[2vw] text-2xl mb-4 md:leading-normal text-black">Projeto:<br />{props.titulo}</h1>
                    <span className="font-poppinsBold md:text-[1vw] text-lg text-black">Modelo: </span>
                    <span className="font-poppins md:text-[1vw] text-lg text-black">{props.modelo}</span>
                    <p className="font-poppins md:text-[1vw] leading-relaxed text-lg text-black">Objetivo:{props.objetivo}</p>
                    <p className="font-poppins md:text-[1vw] leading-relaxed mt-4 text-lg text-black">
                        <span className="font-poppinsBold text-lg md:text-[1vw] text-black">Sobre:</span> {props.sobre}
                    </p>
                </div>
            </section>
        </>
    );
    
}