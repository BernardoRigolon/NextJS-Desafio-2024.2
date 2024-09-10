import { editPost } from "@/actions/admin/actions";
import { IndivCard } from "../../../../../types/home/home";

export default async function EditPage({post}: {post: IndivCard}) {

    const updatePost = editPost.bind(null, post?.id)
    
    return (
        <div className="w-full flex justify-center">
            <form className="bg-[#D9D9D9] w-[300px] md:w-2/3 border-black border-[10px] flex flex-col py-10 px-5 gap-10 rounded-xl" action={updatePost}>
                <label className="text-3xl">Título do Produto</label>
                <input
                name="title"
                placeholder="Título"
                defaultValue={post?.title}
                                className="placeholder:text-black text-2xl"
                />
                                <label className="text-3xl">Preço do Produto</label>
                <input
                name="price"
                placeholder="Preço"
                type="number"
                defaultValue={post?.price}
                                className="placeholder:text-black text-2xl"
                />
                                <label className="text-3xl">Descrição do Produto</label>
                <input
                name="description"
                placeholder="Descrição"
                defaultValue={post?.description}
                                className="placeholder:text-black text-2xl"
                />
                                <label className="text-3xl">Imagem do Produto</label>
                <input
                name="image"
                placeholder="Imagem"
                defaultValue={post?.image}
                                className="placeholder:text-black text-2xl"
                />
                                <button className="w-full lg:w-6/12 xl:w-3/12 2xl:w-2/12 bg-sky-600 hover:bg-sky-700 text-white rounded-md px-6 py-2">
                        Editar
                    </button>
            </form>
        </div>
    )
}