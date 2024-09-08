import Image from "next/image";

type LojaCardProps = {
    price: string;
    description: string;
    title: string;
}

export default function IndivPostPage({price, description, title}: LojaCardProps) {
    return (
        <div className="bg-[#D9D9D9] w-1/2 border-black border-[10px] flex flex-wrap">
            <Image 
            src = {'/camisajapao.png'}
            alt = "Camisa Feminina II Japão 2022"
            width={900}
            height={900}
            className="w-[300px] h-[300px] border-black border"
            />
            <div className="py-10 mx-auto gap-2 flex flex-col items-center gap-5">
                <p className="text-xl">{title}</p>
                <span className="flex items-center justify-center">
                    <h1 className="text-4xl">{price}</h1>
                </span>
                    <div className="flex flex-col gap-y-5">
                        <span className="text-2xl">Detalhes</span>
                        <span className="text-xl">{description}</span>
                    </div>
            </div>
        </div>
    )
}