import Link from "next/link";


export default function () {

    return (
        <section className="w-screen">
            <div className="bg-[#240024] w-screen py-20 ">
                <div className=" w-min mx-auto ">
                    <h2 className="mx-auto w-min text-3xl pb-14 font-bold">Contatos</h2>
                    <div className="flex bg-gra w-[60vw]">
                        <div className="flex flex-col items-center flex-wrap w-full ">
                            <form className="grid grid-cols-4 w-full md:w-1/2 gap-3 min-w-[10px]" action="" method="post">
                                <input className="rounded-md h-8 col-span-2" type="text" placeholder="Nome" />
                                <input className="rounded-md h-8 col-span-2" type="email" name="" id="" placeholder="E-mail" />
                                <input className="rounded-md h-8 col-span-2" type="text" placeholder="Telefone" />
                                <input className="rounded-md h-8 col-span-2" type="text" placeholder="Título" />
                                <input className="rounded-md h-12 col-span-4" type="text" name="" id="" placeholder="Mensagem" />
                                <button className="mt-2 h-10 col-span-4 bg-white text-[#240024] hover:bg-green-300 hover:text-white rounded-md" type="submit">Enviar</button>
                            </form>
                        <div>

                        </div>

                        </div >



                    </div>
                </div>

            </div>
        </section>
    );
}