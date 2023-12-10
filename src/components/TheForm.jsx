import { useState } from "react"

export default function TheForm(props){
    
    const initialFormData = {
        title: "",
        slug: "",
        image: "",
        content: "",
        category: "",
        tags: "",
    }

    const [formData, setFormData] = useState(initialFormData)

    function updateFormData(newValue, keyPosition){

        const newFormData = {...formData};

        newFormData[keyPosition] = newValue;

        // passo l oggetto modificato al setFormData
        setFormData(newFormData);
    }

    async function handleFormSubmit(e){

        e.preventDefault();

        const response = await fetch("http://localhost:3000/posts", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        });

        if(response.status === 200){

            setFormData(initialFormData)

            props.setPosts([...props.posts, await response.json()])

        }else{
            alert("error")
        }


        // window.location.reload(false)
    }

    return(
        <div className="container mx-auto pt-10 w-[600px]">

            <h1 className="text-center font-bold"> FORM </h1>  

            <form action="" className="flex flex-col gap-4 mx-auto pt-10" onSubmit={handleFormSubmit}>

                <label htmlFor="title_input" className="block font-medium mb-2">Title</label>
                <input type="text" value={formData.title} id="title_input" className="border p-4" placeholder="Insert Title"
                    onChange={(e) => updateFormData(e.target.value, 'title')} />

                <label htmlFor="slug_input" className="block font-medium mb-2">Slug</label>
                <input type="text" value={formData.slug} id="slug_input" className="border p-4" placeholder="Insert Slug"
                    onChange={(e) => updateFormData(e.target.value, 'slug')} />

                <label htmlFor="image_input" className="block font-medium mb-2">Image</label>
                <input type="text" value={formData.image} id="image_input" className="border p-4" placeholder="Insert Image URL"
                    onChange={(e) => updateFormData(e.target.value, 'image')} />

                <label htmlFor="content_input" className="block font-medium mb-2">Content</label>
                <textarea value={formData.content} name="content_input" id="content_input" cols="30" rows="10" className="border p-4" placeholder="Content..."
                    onChange={(e) => updateFormData(e.target.value, 'content')} ></textarea>

                <label htmlFor="category_input" className="block font-medium mb-2">Category</label>
                <input type="text" value={formData.category} id="category_input" className="border p-4" placeholder="Insert Category"
                    onChange={(e) => updateFormData(e.target.value, 'category')} />

                <label htmlFor="tags_input" className="block font-medium mb-2">Tags</label>
                <input type="text" value={formData.tags} id="tags_input" className="border p-4" placeholder="Insert Tag"
                    onChange={(e) => updateFormData(e.target.value, 'tags')} />

                <button className=" w-[100px] p-3 bg-blue-400 hover:bg-blue-600 text-white">Submit</button>

            </form>

        </div>
    )
}