'use client'

import Image from 'next/image'
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Forms() {
    const [ativar, setAtivar] = useState(false)
    const [instaCheca, setInstaCheca] = useState(false)
    const whatsappoff = require('../../../public/assets/whatsappdesativado.png')
    const whatsappon = require('../../../public/assets/whatsaappativado.png')
    const instagramoff = require('../../../public/assets/instagramdesativado.png')
    const instagramon = require('../../../public/assets/instagramativado.png')
    const [imagem, setImagem] = useState(whatsappoff)
    const [imagem2, setImagem2] = useState(instagramoff)
    useEffect(() => {
        if (ativar === true) {
            setImagem(whatsappon)

        }
        else {
            setImagem(whatsappoff)
        }

    }, [ativar])

    useEffect(() => {
        if (instaCheca === false) {
            setImagem2(instagramoff)
        }
        else {
            setImagem2(instagramon)
        }

    }, [instaCheca])
    return (
        <section id='Contatos' className="w-screen overflow-hidden">
            <div className="bg-[#240024] w-screen py-40 ">
                <div className=" w-min mx-auto ">
                    <h2 className="mx-auto w-min text-5xl pb-14 font-poppinssemibold">CONTATOS</h2>
                    <div className="flex bg-gra w-[60vw]">
                        <div className="flex flex-col items-center flex-wrap w-full ">
                            <form className="grid grid-cols-4 w-full md:w-[50%] gap-3 min-w-[10px]" action="" method="post">
                                <input className="rounded-md h-8 col-span-2 px-2 py-5 text-black" type="text" placeholder="Nome" />
                                <input className="rounded-md h-8 col-span-2 px-2 py-5 text-black" type="email" name="" id="" placeholder="E-mail" />
                                <input className="rounded-md h-8 col-span-2 px-2 py-5 text-black" type="text" placeholder="Telefone" />
                                <input className="rounded-md h-8 col-span-2 px-2 py-5 text-black" type="text" placeholder="Título" />
                                <input className="rounded-md h-12 col-span-4 px-2 py-10 text-black" type="text" name="" id="" placeholder="Mensagem" />
                                <button className="mt-2 h-10 col-span-4 bg-white text-[#b5b5b5] hover:bg-green-300 hover:text-white rounded-md p-2" type="submit">Enviar</button>
                            </form>
                            <div className='flex gap-8 mt-6'>
                                <div className='relative'>
                                    <Link href={'https://wa.me/559591624873'}>                                    
                                        <Image onMouseOver={(e) => { setAtivar(!ativar) }} onMouseLeave={(e) => { setAtivar(!ativar) }} src={imagem} alt={''} width={100} height={100}></Image>
                                    </Link>
                                </div>
                                <div>
                                    <Link href={'https://www.instagram.com/_niutin_/'}> 
                                        <Image onMouseOver={(e) => { setInstaCheca(!instaCheca) }} onMouseLeave={(e) => { setInstaCheca(!instaCheca) }} src={imagem2} alt={''} width={100} height={100}></Image>
                                    </Link>
                                </div>
                            </div>

                            <div>

                            </div>

                        </div >



                    </div>
                </div>

            </div>
        </section>
    );
}