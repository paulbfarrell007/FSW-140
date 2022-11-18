import './App.css';
import React, { useState, useEffect } from 'react';
import PostList from './PostList'



function App() {
  const [post,setPost] = useState([])
  
  const addpost = text => {
    var newpost = {text:text,isComplete:false}
    const update = [...post,newpost]
    setPost(update) 
  }

  const deletePost = id => {
    const temp = [...post]
    const newpost = temp.filter((post)=>post.id!==id)
    setPost(newpost)
  }

  const editPost = (id,update) => {
    const temp = [...post]
    const editindex = temp.findIndex((post)=>post.id===id)
    temp[editindex].text = update
    setPost(editindex)
  }

  return (
   <div>
    <PostList post={post} key = {post.id} addpost={addpost} deletePost={deletePost} editPost={editPost} />

   </div> 
  );
}

export default App;
