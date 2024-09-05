export default function ContactPage() {
    return (
        <div className="flex flex-col w-full items-center gap-9 py-16">
            <h1 className="text-[#05FF00] text-4xl md:text-5xl text-center">Quer Entrar em Contato Conosco?</h1>
            <p className="text-white text-2xl md:text-3xl text-center">Se interessou por algo? Gostou do que viu? Surgiu alguma dúvida?</p>
            <h2 className="text-white text-3xl md:text-4xl text-center">Não Perca Tempo!</h2>
            <div className="bg-[#E3E3E3] h-[400px] w-[300px] border-[#AB6424] border-[15px] rounded-xl flex flex-col items-center gap-5 py-6">
                <input className="bg-[#E3E3E3] w-5/6 h-[50px] border border-black placeholder:italic placeholder:text-black p-2" placeholder="Nome" type="text" name="nome"></input>
                <input className="bg-[#E3E3E3] w-5/6 h-[50px] border border-black placeholder:italic placeholder:text-black p-2" placeholder="E-mail" type="text" name="email"></input>
                <input className="bg-[#E3E3E3] w-5/6 h-[50px] border border-black placeholder:italic placeholder:text-black p-2" placeholder="Assunto" type="text" name="assunto"></input>
                <input className="bg-[#E3E3E3] w-5/6 h-[50px] border border-black placeholder:italic placeholder:text-black p-2" placeholder="Mensagem" type="text" name="mensagem"></input>
                <div className="py-10 w-full flex flex-col items-center">
                <button className="bg-[#D5D918] w-5/6 h-[50px] text-black text-3xl border border-black">Entre em Contato</button>
                </div>
            </div>
        </div>
    )
}