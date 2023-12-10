import { useState } from 'react';
import TheCall from './TheCall'
import TheForm from './TheForm'

export default function TheMain(){

    const [posts, setPosts] = useState([]);

    console.log(posts)


    return(
        <div>
            < TheForm posts={posts} setPosts={setPosts} />
            < TheCall posts={posts} setPosts={setPosts} />
        </div>
    )
}