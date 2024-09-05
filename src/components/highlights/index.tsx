import HighlightsCard from "./card";

export default function Highlights(){
    return (
        <div className="flex flex-col w-full justify-center items-center">
            <h1 className="text-[#05FF00] text-4xl md:text-6xl py-[70px]">Em Destaque</h1>
            <div className="flex flex-col md:flex-row gap-[70px] lg:gap-[120px] pb-[70px] md:pb-[130px]">
                <HighlightsCard
                price = "R$ 200,00"
                description= "Camisa Adidas Japão II 2022 - M Fem."
                 />
                 <HighlightsCard
                price = "R$ 200,00"
                description= "Camisa Adidas Japão II 2022 - M Fem."
                 />
                 <HighlightsCard
                price = "R$ 200,00"
                description= "Camisa Adidas Japão II 2022 - M Fem."
                 />
            </div>
        </div>
    )
}