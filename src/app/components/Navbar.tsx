import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
    const logo = require('../../../public/assets/logo.png')
    return (
        <nav style={{ position: 'sticky', top: '0px' }} className=" md:flex justify-between items-center gap-6 bg-white text-[#304254] text-lg font-poppinsBold h-8 border-x-gray-300 border-[2px] px-0 pb-12 md:px-4 md:py-6 z-10">
            <div className="flex items-center  md:items-center gap-2">
                <Image src={logo} alt={"Logo designer Newton Campos"} width={80} height={80}></Image>
                <span className="font-poppins text-[#240024]">Newton Campos</span>
            </div>
            <div className="md:flex gap-5 hidden">
                <Link className="hover:text-slate-300 font-poppins text-[#240024]" href={"#Home"}>Home</Link>
                <Link className="hover:text-slate-300 font-poppins text-[#240024]" href={"#Portfolio"}>Portfólio</Link>
                <Link className="hover:text-slate-300 font-poppins text-[#240024]" href={"#Servicos"}>Serviços</Link>
                <Link className="hover:text-slate-300 font-poppins text-[#240024]" href={"#Contatos"}>Contatos</Link>
            </div>
        </nav>
    );
}