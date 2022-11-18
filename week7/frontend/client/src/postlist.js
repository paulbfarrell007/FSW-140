import post from './post'
import postform from './postform'

function PostList(props){

return(
<div>
    <h1> Welcome </h1>
    <postform addpost={props.addpost} />
    <ul>
        {props.post?.map((post)=>{
            return(
                <post post = {post} key = {post.id} deletepost = {props.deletepost} editpost = {props.editpost} />
            )
        })}
    </ul>

</div>
)


}

export default PostList