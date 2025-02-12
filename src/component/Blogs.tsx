import {useAllBlogs} from "../hooks";
import BlogCard from "./BlogCard";
import Skeleton from "./Skeleton";



const Blogs = () => {
  const {loading,blog} = useAllBlogs()

  if(loading){
    return <>
    <Skeleton />
    </>
  }


  return (
    <>
    <div className="">
    {blog.map(post=>(
      <div className="border-b border-zinc-400 mx-50 flex  justify-between items-center gap-10 ">
        <BlogCard
        id={post.id}
          authername={post.user.name}
          publishdate={"20 Dec,2025"}
          title={post.title}
          content={post.content}
          />
        <div className="image w-40 object-cover overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1734907865880-6eb669831b9e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            />
        </div>
      </div>
      
    ))}
      
    </div>
            </>
  );
};

export default Blogs;
