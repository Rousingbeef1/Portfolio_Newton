


export default function Forms() {

    return (
        <section className="w-screen overflow-hidden">
            <div className="bg-[#240024] w-screen py-32 ">
                <div className=" w-min mx-auto ">
                    <h2 className="mx-auto w-min text-5xl pb-14 font-poppinssemibold">Contatos</h2>
                    <div className="flex bg-gra w-[60vw]">
                        <div className="flex flex-col items-center flex-wrap w-full ">
                            <form className="grid grid-cols-4 w-full md:w-[50%] gap-3 min-w-[10px]" action="" method="post">
                                <input className="rounded-md h-8 col-span-2 p-8 py-5 text-black" type="text" placeholder="Nome" />
                                <input className="rounded-md h-8 col-span-2 p-8 py-5 text-black" type="email" name="" id="" placeholder="E-mail" />
                                <input className="rounded-md h-8 col-span-2 p-8 py-5 text-black" type="text" placeholder="Telefone" />
                                <input className="rounded-md h-8 col-span-2 p-8 py-5 text-black" type="text" placeholder="Título" />
                                <input className="rounded-md h-12 col-span-4 p-8 py-10 text-black" type="text" name="" id="" placeholder="Mensagem" />
                                <button className="mt-2 h-10 col-span-4 bg-white text-[#b5b5b5] hover:bg-green-300 hover:text-white rounded-md p-2" type="submit">Enviar</button>
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