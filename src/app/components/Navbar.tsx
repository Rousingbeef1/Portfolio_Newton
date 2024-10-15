import Link from "next/link";

export default function NavBar(){
    let visivel = false
    return(
        <nav style={{position:'sticky', top:'0px'}} className="flex justify-end items-center gap-6 bg-white text-[#304254] text-lg font-poppinsBold h-8 border-x-gray-300 border-[2px] px-4 py-6">
            <Link className="hover:text-slate-300" href={"https://www.youtube.com/watch?v=m8kPhXkIpXA"}>Home</Link>
            <Link className="hover:text-slate-300" href={"https://www.youtube.com/watch?v=m8kPhXkIpXA"}>Portfólio</Link>
            <Link className="hover:text-slate-300" href={"https://www.youtube.com/watch?v=m8kPhXkIpXA"}>Serviços</Link>
            <Link className="hover:text-slate-300" href={"https://www.youtube.com/watch?v=m8kPhXkIpXA"}>Contatos</Link>
        </nav>
    );
}