import React from "react";
import Post from './Post/Post';
import {useSelector} from "react-redux"

function Posts() {
  const posts = useSelector((state) => state.posts);
  console.log(posts)
  return <div>
    <Post />
    <Post />
    <h1>Posts</h1>
  </div>;
}

export default Posts;
