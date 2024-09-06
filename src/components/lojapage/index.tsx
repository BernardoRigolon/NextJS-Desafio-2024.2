import { SearchIcon } from "lucide-react";
import LojaCard from "./card";

export default function LojaPage() {
    return (
        <div className="flex flex-col items-center gap-[50px] md:gap-[70px]">
            <div className="bg-black w-[300px] md:w-3/4 h-[50px] border-[#299E00] border-[5px] rounded-3xl mt-[50px] md:mt-[70px] py-1 px-3"><span className="text-[#299E00] flex items-center text-2xl gap-2"><SearchIcon />Pesquisar</span></div>
        <div className="flex flex-col md:flex-row justify-center items-center wrap gap-[50px] md:gap-[115px]">
            <LojaCard
            price = "R$ 200,00"
            description= "Camisa Adidas Japão II 2022 - M Fem."
            name = "Camisa Adidas Japão II 2022 - M Fem."
            />
            <LojaCard
            price = "R$ 200,00"
            description= "Camisa Adidas Japão II 2022 - M Fem."
            name = "Camisa Adidas Japão II 2022 - M Fem."
            />
            <LojaCard
            price = "R$ 200,00"
            description= "Camisa Adidas Japão II 2022 - M Fem."
            name = "Camisa Adidas Japão II 2022 - M Fem."
            />
        </div>
        </div>
    )
}