export default function Management() {
    return (
        <div className="w-full flex flex-col items-center py-20">
            <table className="w-5/6">           
            <thead>
            <tr className="flex w-full py-7 px-20 justify-between lg:text-4xl text-[#D5D918] border-black border-[5px]">
            <th scope="col">ID</th>
            <th scope="col">Nome</th>
            <th scope="col">Preço</th>
            <th scope="col">Descrição</th>
            <th scope="col">Ações</th>
            </tr>
            </thead>           
            <tbody className="bg-[#E3E3E3] w-full border-black border-[5px]">
            <tr className="flex w-full lg:text-xl justify-between px-20 py-10">
            <th>1</th>
            <th>Camisa Adidas Japão</th>
            <th>R$ 200,00</th>
            <th>Camisa Adidas Japão - M Fem.</th>
            <th>oioiooio</th>
            </tr>
            </tbody>
            </table>
        </div>
    )
}