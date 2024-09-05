import Image from "next/image";

export default function HeroSection() {
    return(
        <div className="w-full flex flex-col lg:grid lg:grid-flow-col lg:grid-cols-6 items-center gap-6">
            <div className="flex flex-col justify-center gap-12 lg:col-span-3 p-4 h-auto lg:max-h-[700px] overflow-hidden">
                <div className="flex flex-col gap-6 leading-relaxed">
                    <h1 className="text-[#05FF00] text-5xl">Bem vindo ao Torcida Mista!!!</h1>
                    <p className="text-white text-3xl text-justify w-10/12">Feito para você que compartilha a paixão do esporte conosco.
                         O Torcida Mista traz as melhores ofertas do mercado. Seja recente ou retrô, clube ou seleção,
                          oferecemos identificação, estilo e conforto em forma de camisas de futebol!</p>
                </div>
            </div>
            <div className="lg:col-span-3 relative group">
                <Image
                src = {'/logo.png'}
                alt="Logo Torcida Mista"
                width={1350}
                height={1503}
                className="h-[501px] w-[450px]"
                />
            </div>
        </div>
    )
}