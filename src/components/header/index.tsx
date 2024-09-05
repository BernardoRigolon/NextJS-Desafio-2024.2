import { HomeIcon, LogInIcon, Menu, PhoneIcon, ShoppingCart, StoreIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const links = [
    {href: '/', label: <HomeIcon />},
    {href: '/contato', label: <PhoneIcon />},
    {href: '/loja', label: <ShoppingCart />},
    {href: '/admin', label: <StoreIcon />},
    {href: '/login', label: <LogInIcon />}
]

export default function Header()
{
    return(
        <header className="bg-black sticky top-0 z-20 w-full mx-auto h-20 py-8 px-4 md:p-0">
            <div className="flex flex-wrap items-center justify-center w-full h-20 mx-auto gap-8">
            <Link href='/' className="flex gap-4 items-center">
                <Image
                src={'/logo.png'}
                alt = "Logo do site"
                width = {904}
                height = {904}
                className = "h-14 w-14"
                />
                </Link>
            <span className="text-white hidden md:block text-3xl font-semibold">Torcida Mista</span>
            <nav className="flex justify-end">
                <div className="hidden w-full md:flex justify-end items-center gap-16">
                    {links.map((link, index) => 
                    <Link href = {link.href} key={index}>
                        <span className="text-white text-2xl p-2 rounded-xl">{link.label}</span>
                    </Link>
                    )}
                </div>
                <div className="md:hidden">
                    <div className="flex gap-4">
                        <Menu />
                    </div>
                </div>
            </nav>
            </div>
            <div className="bg-[#038C00] w-full h-5 border-y border-black"></div>
        </header>
    )
}