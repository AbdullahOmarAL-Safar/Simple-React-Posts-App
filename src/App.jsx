import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Post from './Post.jsx';
import './index.css'; 

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        const firstTen = res.data.slice(0, 10); 
        setPosts(firstTen);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={{ maxWidth: '600px', margin: '2rem auto', fontFamily: 'sans-serif' }}>
      <h1>📃 First 10 Posts</h1>

      {posts.map(post => (
        <Post key={post.id} title={post.title} body={post.body} />
      ))}
    </div>
  );
}

export default App;
