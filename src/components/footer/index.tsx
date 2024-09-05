import Image from "next/image";

export default function Footer() {
    return(
        <div className="bg-black text-center w-full py-8 h-60 flex md:flex-col gap-y-8 items-center justify-center flex-wrap">
            <Image
            src = {'/bola.png'}
            alt = 'Bola'
            width={720}
            height={720}
            className="h-60 w-60"
            />
            <span className="text-white text-7xl">Torcida Mista</span>
            <span className="text-[#A6A6A6] text-xl">2024 - 2024 Torcida Mista. Todos os direitos reservados. Desenvolvido por CODEJR</span>
            <ul className="h-60 w-48 hidden md:block">
                <li className="absolute">
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
            className="h-32 w-32"
            />
                </li>
                <li className="absolute">
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