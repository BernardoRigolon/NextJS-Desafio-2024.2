import Image from "next/image";

export default function Footer() {
    return(
        <div className="bg-black text-center w-full py-8 min-h-60 flex flex-col-reverse lg:flex-row gap-y-5 lg:gap-10 items-center justify-center flex-wrap">
            <Image
            src = {'/bola.png'}
            alt = 'Bola'
            width={720}
            height={720}
            className="h-20 w-20 lg:h-60 lg:w-60"
            />
            <div className="flex flex-col gap-5 lg:gap-8">
            <span className="text-white text-3xl lg:text-7xl">Torcida Mista</span>
            <span className="text-[#A6A6A6] text-base lg:text-xl">2024 - 2024 Torcida Mista. Todos os direitos reservados. Desenvolvido por CODEJR</span>
            </div>
            <ul className="h-60 w-48 hidden lg:block">
                <li>
                <Image
            src = {'/ig.png'}
            alt = 'Instagram'
            width={720}
            height={720}
            className="h-20 w-20"
            />
                </li>
                <li>
                <Image
            src = {'/face.png'}
            alt = 'Facebook'
            width={720}
            height={720}
            className="h-32 w-32 z-30"
            />
                </li>
                <li>
                <Image
            src = {'/tt.png'}
            alt = 'Twitter'
            width={720}
            height={720}
            className="h-16 w-16"
            />
                </li>
            </ul>
        </div>
    )
}