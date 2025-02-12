import axios from "axios";
import { ChangeEvent, useState } from "react";
import { Backend_URL } from "../config";
import { useNavigate } from "react-router-dom";

const Publish = () => {
  const [title, setTitle] = useState("");
  const [description, setdescription] = useState("");
  const navigate = useNavigate()
  const handlePost = async () => {
    const res = await axios.post(
      `${Backend_URL}/api/v1/blog`,
      { 
        title,
        content:description
     },
      {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }
    );

    navigate(`/blog/${res.data.id}`)
  };
  return (
    <div className="flex items-center justify-center h-full w-full">
      <form action="" className="w-1/2 flex flex-col gap-4">
        <input
          onChange={(e) => setTitle(e.target.value)}
          className="p-1 w-full rounded border "
          type="text"
          placeholder="title"
        />
        <TextBlock
          onChange={(e) => {
            setdescription(e.target.value);
          }}
        />
        <div className="flex gap-2">
          <button
            className="px-4 py-2 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-md select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            Close
          </button>
          <button
            onClick={handlePost}
            className="select-none rounded-md bg-gray-900 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            Post Comment
          </button>
        </div>
      </form>
    </div>
  );
};

const TextBlock = ({
  onChange,
}: {
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}) => {
  return (
    <div className="relative ">
      <div className="relative w-full min-w-[200px]">
        <textarea
          onChange={onChange}
          rows={6}
          className="peer h-full min-h-[100px] w-full !resize-none  rounded-[7px] border border-blue-gray-200  bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
          placeholder="write a blog ..."
        />
      </div>
    </div>
  );
};

export default Publish;
