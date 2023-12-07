export default function TheForm2(){
    return(
        <div className="container mx-auto pt-10 w-[600px]">

            <h1 className="text-center font-bold"> FORM </h1>  

            <form action="" className="flex flex-col gap-4 mx-auto pt-10">

                <label htmlFor="title_input" className="block font-medium mb-2"></label>
                <input type="text" value="" id="title_input" className="border p-4" placeholder="Insert Title" />

                <label htmlFor="slug_input" className="block font-medium mb-2"></label>
                <input type="text" value="" id="slug_input" className="border p-4" placeholder="Insert Slug" />

                <label htmlFor="image_input" className="block font-medium mb-2"></label>
                <input type="text" value="" id="image_input" className="border p-4" placeholder="Insert Image URL" />

                <label htmlFor="content_input" className="block font-medium mb-2"></label>
                <input type="text" value="" id="content_input" className="border p-4" placeholder="Insert Content" />

                <label htmlFor="category_input" className="block font-medium mb-2"></label>
                <input type="text" value="" id="category_input" className="border p-4" placeholder="Insert Category" />

                <label htmlFor="tags_input" className="block font-medium mb-2"></label>
                <input type="text" value="" id="tags_input" className="border p-4" placeholder="Insert Tag" />

                <button className=" w-[100px] p-3 bg-blue-400 hover:bg-blue-600 text-white">Submit</button>

            </form>

        </div>
    )
}