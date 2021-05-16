import './PostForm.css'
import SocialPosts from './SocialPosts'
import Post from '../model/Post'
import {FormEvent, useState} from 'react'
import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

interface Prop {
  onSubmit:(post:Post)=>void;
  onClose:()=>void;
 
}

function PostForm({onSubmit, onClose}:Prop){
const [title, setTitle] =useState("")
const [thought, setThought] =useState("")


function handleSubmit(e:FormEvent){
  e.preventDefault();

  const post:Post={
    title: title,
    thought: thought
  }
  onSubmit(post);

  setTitle("")
  setThought("")
}


  return (
    <form className="PostForm"  onSubmit={handleSubmit}>
      <div className="titleAndDeleteForm">
      <label htmlFor="title">Title</label>
    
      <label className="closeButton"onClick={onClose}><i className="material-icons">close</i></label>
      </div>
        <input className="titleForm" name ="title"type="text" value={title} onChange={e=> setTitle(e.target.value)}/>
     
        <label htmlFor="thought">Thought</label>
        <div className="thoughtForm">
        <textarea className="textArea" name="thought" value={thought} onChange={e=> setThought(e.target.value)} />
        </div>
        <button className="addPost">Add Post</button>
    
    </form >
  )
}

export default PostForm;