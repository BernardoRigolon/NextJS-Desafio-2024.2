import Image from "next/image";

type HighlightsCardProps = {
    price: string;
    description: string;
}

export default function HighlightsCard({price, description}: HighlightsCardProps)
{
    return (
        <div className="bg-[#D9D9D9] w-80 h-[450px] border-black border-[10px]">
            <Image 
            src = {'/camisajapao.png'}
            alt = "Camisa Feminina II Japão 2022"
            width={900}
            height={900}
            className="w-[300px] h-[300px]"
            />
            <div className="py-4 px-6 gap-2">
                <p className="text-xl">{description}</p>
                <h1 className="text-4xl text-center">{price}</h1>
            </div>
        </div>
    )
}