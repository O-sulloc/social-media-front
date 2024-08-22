import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

interface Post {
  id: number;
  title: string;
  body: string;
  userName: string;
  createdAt: string;
  lastModifiedAt: string;
}

const PostComponent = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<Post | null>(null);
  useEffect(() => {
    axios.get(`http://ec2-3-36-59-252.ap-northeast-2.compute.amazonaws.com:8080/api/v1/posts/${id}`)
    .then((response) => {
      setPost(response.data.result);
    })
    .catch((error) => {
      console.error('Failed to fetch post', error);
    })
  }, [])
  return(
    <div>
      <h1>Post</h1>
      <div>
        {post ? (
          <>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  )
}

export default PostComponent;