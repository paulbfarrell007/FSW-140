import { useState } from "react";
import postform from './postform'

function post({post,deletePost,editPost,addpost}){
    const initinputs = {text:''}
    const[input,setinput] = useState(initinputs)
    const[errmsg,seterrmsg] = useState('')
    const[toggle,settoggle] = useState(true)

    const handlechange = (e) => {
        var {value,title,description} = e.target
        setinput({
            ...input,
            [title]: value,
            [description]: value
        })
    }

    const handlesubmit = (update) => {
        editPost(update,post.id)
        settoggle(prevtoggle => !prevtoggle)
    }

    return(
        <li >
            {!toggle?
            <>
            <postform addpost = {handlesubmit} editPost = {settoggle} />
            <button onClick={()=> settoggle (prevtoggle => !prevtoggle)} >exit</button>
            </>
            :
            <>
            <div>
            <button onClick={()=> deletePost(post.id)} >delete</button>
            <button onClick={()=> settoggle (prevtoggle => !prevtoggle)} >edit</button>
            </div> 
            </>
            }
        </li>
    )
}
export default post