import './PostInList.css'
import { useState } from 'react';
import Post from '../model/Post'
import SocialPosts from './SocialPosts';
import PostForm from './PostForm'

interface Props{
  post:Post;
  onDelete?:()=>void;

}

function PostInList({post,onDelete}:Props){




  return (
<div className="PostInList"> 
<div>
    <p className="fontSize"> {post.title}</p> <p> {post.thought}</p> 
    </div>
    <div >
   <i onClick={onDelete}className="material-icons ">delete</i>
    </div>
</div>
  )
  
}

export default PostInList;