import React from 'react';

interface Post {
  id: number;
  title: string;
  body: string;
}

export async function Posts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts: Post[] = await response.json();

  return (
    <div className="mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Posts</h1>
      {posts.length > 0 ? (
        <ul className="space-y-4">
          {posts.map((post) => (
            <li key={post.id} className="p-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-700">{post.body}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center text-gray-500">No posts available.</p>
      )}
    </div>
  );
}
