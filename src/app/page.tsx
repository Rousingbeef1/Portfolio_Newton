import Image from "next/image";
import Forms from "./components/Forms";
import AreaProdutos from "./components/AreaProdutos";
import Servicos from "./components/Servicos";
import Video from "./components/Video";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
        <Video/>
        <NavBar/>
        <AreaProdutos/>
        <Servicos/>
        <Forms/>
        <Footer/>
    </div>
  );
}
