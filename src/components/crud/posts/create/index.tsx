import { createPost } from "@/actions/admin/actions";

export default function CreatePosts() {
    return(
        <div>
            <form action={createPost}>
                <label>Título do Produto</label>
                <input
                name="title"
                placeholder="Título"
                />
                                <label>Preço do Produto</label>
                <input
                name="price"
                placeholder="Preço"
                type="number"
                />
                                <label>Descrição do Produto</label>
                <input
                name="description"
                placeholder="Descrição"
                />
                                <label>Imagem do Produto</label>
                <input
                name="image"
                placeholder="Imagem"
                />
                <button className="w-full lg:w-6/12 xl:w-3/12 2xl:w-2/12 bg-sky-600 hover:bg-sky-700 text-white rounded-md px-6 py-2">
                        Criar
                    </button>
            </form>
        </div>
    )
}