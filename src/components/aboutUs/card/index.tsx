type AboutUsCardProps = {
    title: string;
    description: string;
}

export default function AboutUsCard({title, description}: AboutUsCardProps) {
    return (
        <div className="text-center bg-gradient-to-b from-black to-[#038C00] h-[400px] w-[300px] justify-center border-[5px] border-[#D5D918] rounded-xl py-7">
            <h1 className="text-white text-6xl">{title}</h1>
            <p className="text-white text-xl py-3">{description}</p>
        </div>
    )
}