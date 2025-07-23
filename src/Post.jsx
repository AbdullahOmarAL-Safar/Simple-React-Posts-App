import React from 'react';

function Post({ title, body }) {
  return (
    <div style={{
      background: '#f5f5f5',
      padding: '1rem',
      marginBottom: '1rem',
      borderRadius: '8px'
    }}>
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  );
}

export default Post;
