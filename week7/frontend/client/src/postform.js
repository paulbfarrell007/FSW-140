import { useState,useEffect } from "react";
import axios from 'axios'
import post from "./post";

function postform({addpost,settoggle}){
    const initinputs = {text:''}
    const[input,setinput] = useState(initinputs)
    const[description,setdescription] = useState('')
    const[title,settitle] = useState('')
    const[posts,setposts] = useState([])

    useEffect(() => {
        getData()
       }, [])

    const getdata = async() => {
        let results = await axios.get('/getPosts')
        setPosts(results.data)
    }

return(
    <div>
        <form>
            <input
            onchange = {e=>settitle(e.target.value)}
            type = {'text'}
            placeholder = {'title'} />
            <input
            onchange = {e=>description(e.target.value)}
            type = {'text'}
            placeholder = {'description'}
            />
            <button type='submit' >
                submit
            </button>
        </form>

        <main>
            {post.map(post=>(
                <div key={post.postid}>
                    <h1>{post.title}</h1>
                    <p>{post.description}</p>
                </div>
            )
            )}
        </main>
    </div>
)


}
export default postform