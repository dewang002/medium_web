import { useParams } from "react-router-dom";
import { useBlog } from "../hooks";
import { AutherDp } from "./BlogCard";
import Skeleton from "./Skeleton";

const BlogPage = () => {
  const { id } = useParams();
  const { loading, blog } = useBlog({ id: id || "" });
  if (loading) {
    return (
      <>
        <Skeleton />
      </>
    );
  }
  return (
    <div className="grid grid-cols-12 gap-10 py-20 px-20">
      <div className="col-span-8 flex flex-col gap-8">
        <div>
          <h1 className="font-bold text-4xl">{ blog?.title }</h1>
          <h3 className="text-lg text-zinc-400">posted on August 23,2090</h3>
        </div>
        <p className=" text-lg ">{ blog?.content }</p>
      </div>
      <div className=" col-span-4 ">
        <h1>Author</h1>
        <div className=" flex items-center gap-4 ">
          <AutherDp name={ blog?.user.name || "" } />
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-bold">{ blog?.user.name }</h1>
            <p className="max-w-60 font-semibold text-md leading-tight">
              master of mirth, purveryor of pun and the funniest part
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
