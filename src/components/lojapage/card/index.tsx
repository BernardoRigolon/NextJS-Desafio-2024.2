'use client'

import { Minus, Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type LojaCardProps = {
    price: string;
    description: string;
    title: string;
}

export default function LojaCard({price, description, title}: LojaCardProps)
{

    const [isNavOpen, setIsNavOpen] = useState(false)
    const toggleNav = () => setIsNavOpen(!isNavOpen)

    const toggleNavO = () => {
        if(isNavOpen) {
            toggleNav()
        }
    }

    return (
        <div className="bg-[#D9D9D9] w-80 border-black border-[10px]">
            <Link href={'/post/${post.id}'}>
            <Image 
            src = {'/camisajapao.png'}
            alt = "Camisa Feminina II Japão 2022"
            width={900}
            height={900}
            className="w-[300px] h-[300px]"
            />
            </Link>
            <div className="py-4 px-6 gap-2">
                <p className="text-xl">{title}</p>
                <span className="flex items-center justify-end gap-8">
                    <h1 className="text-4xl text-center">{price}</h1>
                    {isNavOpen ?
                    <Minus 
                    onClick={toggleNavO}
                    className="cursor-pointer"
                    />
                    :
                    <div>
                        <Plus 
                        onClick={toggleNav}
                        className="cursor-pointer"
                        />
                    </div>
                    }
                </span>
                {isNavOpen && (
                    <div className="flex flex-col py-5 gap-y-5">
                        <span className="text-2xl">Detalhes</span>
                        <span className="text-xl">{description}</span>
                        <Link href={'/post/${post.id}'} className="justify-center flex">
                        <button className="bg-black w-5/6 text-center border-black border p-2.5 text-3xl rounded-xl text-white cursor-pointer hover:bg-black/50 transition-all duration-200">Ver Mais</button>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    )
}