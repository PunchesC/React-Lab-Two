import './SocialPosts.css';
import Post from '../model/Post';
import { useState } from 'react';
import PostInList from './PostInList';
import PostForm from './PostForm';

interface Props {
  post: Post;
}

function SocialPosts() {
  const [display, setDisplay] = useState(false);
  const [posts, setPosts] = useState<Post[]>([]);

  function handleAddPost(post: Post): void {
    setPosts([...posts, post]);
    setDisplay(false);
  }

  function handleDeletePost(index:number):void{
    setPosts(prevPosts => [
      ...prevPosts.slice(0,index),
      ...prevPosts.slice(index +1)
    ]);
  }

  return (
    <div className="SocialPosts">

      <header>
        <h1>My Thoughts</h1>
      
      </header>
      <section>{display && <PostForm onSubmit={handleAddPost} onClose={()=>setDisplay(false)} />}</section>
      <section>
        <button className="blueButton" onClick={()=>setDisplay(true)}>New Thought</button>
      </section>
      <section>
        {posts.map((post, i) => (
          <PostInList
            key={i}
            post={post}
            onDelete={() => handleDeletePost(i)}
          />
        ))}
      </section>
    </div>
  );
}

export default SocialPosts;
