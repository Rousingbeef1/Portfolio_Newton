'use client'
import Image from 'next/image'

interface propriedades{
    imagem: string,
    titulo:string,
    definicao:string
}

export default function ItemServico(props:propriedades){

    return(
        <div className='flex flex-col gap-8 justify-center items-center bg-amb p-2 mx-4'>
            <Image width={80} height={80} src={props.imagem} alt={'imagem'}></Image>
            <h3 className='text-black text-3xl font-extralight'>{props.titulo}</h3>
            <p className='text-center text-black font-poppinsextralight font-extralight'>{props.definicao}</p>
        </div>
    );
}