import { useEffect, useState } from "react";

export default function TheCall(props){

// const [posts, setPosts] = useState([]);

async function callPosts() {
    const data = await (await fetch("http://localhost:3000/posts")).json()
    props.setPosts(data)
}

useEffect(() => {
    callPosts()
}, [])

    return(
        
        <div className="flex flex-col gap-3 mx-auto pt-10 w-[600px]">
                {props.posts.map((post, i) => (
                    <PostSection key={i} post={post}></PostSection>
                ))}
        </div>
    )
}

function PostSection({post}){

    return(

        <div>
            <h1 className="font-bold">{post.title}</h1>
            <img className="w-full h-[300px] object-cover" src={post.image} alt="" />
            <p className="font-medium">{post.content}</p>
            <ul>
                {post.tags.map((tag, i) => (
                    <li key={i}>{tag.title}</li>
                ))}
            </ul>
        </div>

    )
}