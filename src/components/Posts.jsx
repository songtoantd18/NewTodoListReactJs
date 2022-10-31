import React from "react";

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>loading</h2>;
  }
  console.log("posts:", posts);
  console.log("loading:", loading);
  return (
    <ul>
      {posts.map((post) => {
        return <li key={post.id}>{post.title}</li>;
      })}
    </ul>
  );
};

export default Posts;
