import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SocialPosts from "./Components/SocialPosts";
import PostInList from "./Components/PostInList";
import PostForm from './Components/PostForm';
import Post from './model/Post';


function App() {
  return (
    <div className="App">
     <SocialPosts />

     
    </div>
  );
}

export default App;
