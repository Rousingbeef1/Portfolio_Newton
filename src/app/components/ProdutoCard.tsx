'use client'
import Link from "next/link";

interface PropCards {
    texto: string,
    imagem?: string,
    link?: string
}

export default function ProdutoCard(propriedade: PropCards) {

    return (
        <Link style={{ backgroundImage: `url(${propriedade.imagem})` }} className={`filter grayscale-50 p- flex justify-center items-center font-bold text-[3.8vh] aspect-square bg-[#e1dff0] rounded-3xl bg-cover bg-no-repeat bg-center `} href={`${propriedade.link}`} >
            <div className="flex justify-center items-center bg-slate-950 hover:animate-surgir hover:opacity-0 rounded-3xl w-full h-full opacity-50 p-1 ">
                <h3 className="text-shadow text-center text-shadow-md text-5xl text-white w-80 leading-tight">{propriedade.texto}</h3>
            </div>
        </Link>
    );
}
