import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

interface Post {
  id: number;
  title: string;
  body: string;
  userName: string;
  createdAt: string;
  lastModifiedAt: string;
}

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://ec2-3-36-59-252.ap-northeast-2.compute.amazonaws.com:8080/api/v1/posts")
    .then((response) => {
      setPosts(response.data.result.content);
    })
    .catch((error) => {
      console.error('Failed to fetch posts', error);
    })
  }, []);

  const handleClick = (id: number) => {
    navigate(`/posts/${id}`);
  };

  return(
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post: Post) => (
          <li key={post.id} onClick={() => handleClick(post.id)}>{post.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default Posts;