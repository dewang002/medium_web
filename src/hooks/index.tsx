import axios from "axios";
import { useEffect, useState } from "react";
import { Backend_URL } from "../config";

interface Blogtype {
  id: number;
  title: string;
  content: string;
  user: {
    name: string;
  };
}

export const useAllBlogs = () => {
  const [loading, setLoading] = useState(true);
  const [blog, setBlog] = useState<Blogtype[]>([]);

  useEffect(() => {
    axios
      .get(`${Backend_URL}/api/v1/blog/bulk`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setBlog(res.data.posts);
        setLoading(false);
      })
      .catch(() => {
        console.log("error while getting blogs");
      });
  }, []);

  return { loading, blog };
};


export interface uniqueBlogtype {
  id: number;
  title: string;
  content: string;
  user: {
    name: string;
  };
}

export const useBlog = ({ id }: { id: string }) => {
  const [blog, setBlog] = useState<uniqueBlogtype>();
  const[loading,setLoading] = useState(true)
  useEffect(() => {

     axios.get(`${Backend_URL}/api/v1/blog/${id}`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        // setBlogCache(prev=>({
        //   ...prev,
        //   [id]:res.data.post
        // }))
        setBlog(res.data.post);
        setLoading(false);
      })
      .catch(() => {
        console.log("error while getting blogs");
      });

    }, []);

    return {blog,loading}
};
