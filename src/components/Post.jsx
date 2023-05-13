import React from 'react';

const Post = () => {
  return (
    <div
      style={{
        backgroundColor: '#fff',
        color: '#333',
        padding: '1rem',
        borderRadius: '10px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        marginBottom: '2rem',
      }}
      className="post"
    >
      <div
        style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}
      >
        <img
          src="https://via.placeholder.com/50x50"
          alt="Avatar"
          style={{ borderRadius: '50%', marginRight: '1rem' }}
        />
        <div>
          <h4>John Doe</h4>
          <p style={{ color: '#aaa' }}>5 hours ago</p>
        </div>
      </div>
      <p style={{ marginBottom: '1rem' }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in
        bibendum turpis, eget venenatis nulla. Nulla vel imperdiet neque.
      </p>
      <img
        src="https://via.placeholder.com/500x300"
        alt="Post attachment"
        style={{ maxWidth: '100%', marginBottom: '1rem' }}
      />
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <div>
          <button
            style={{
              backgroundColor: '#2caeba',
              color: '#fff',
              padding: '0.5rem 1rem',
              border: 'none',
              borderRadius: '5px',
              fontSize: '1rem',
              cursor: 'pointer',
            }}
          >
            Like
          </button>
          <button
            style={{
              backgroundColor: '#2caeba',
              color: '#fff',
              padding: '0.5rem 1rem',
              border: 'none',
              borderRadius: '5px',
              fontSize: '1rem',
              cursor: 'pointer',
              marginLeft: '1rem',
            }}
          >
            Comment
          </button>
        </div>
        <p style={{ margin: '0', fontSize: '1rem', color: '#aaa' }}>10 likes</p>
      </div>
    </div>
  );
};

export default Post;
