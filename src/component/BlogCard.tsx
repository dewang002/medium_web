import { Link } from 'react-router-dom';
import dot from '../assets/dot.png'
interface blogType{
  id:number;
  authername:string;
  publishdate:string;
  title:string;
  content:string;
}

const BlogCard = ({authername,publishdate,title,content,id}:blogType) => {
  return (
    <Link to={`/blog/${id}`}>
    <div className=" py-6 max-w-3xl">
      <div className="flex items-center gap-4 pb-4 capitalize">
        <AutherDp name="dewang"/> <div className="">{authername}</div> <img className='w-2' src={dot} alt="dot" /> <div className="text-zinc-400">{publishdate}</div> 
      </div>
      <div className="text-2xl font-bold">
        {title}
      </div>
      <div className='text-lg text-zinc-500 pb-10'>
        {`${content.slice(0,100)}${content.length>100?" ...":""}`}
      </div>
      <div className='text-zinc-400'>
        {`${Math.ceil(content.length / 100)} min read`}
      </div>
    </div>
    </Link>
  )
}

export const AutherDp = ({name ,size=8}:{size?:number,name:string}) =>{
  return (  
    
<div className={`relative inline-flex items-center justify-center w-${size} h-${size} overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600`}>
    <span className="font-medium text-gray-600 dark:text-gray-300 uppercase">{name[0]}</span>
</div>

  )
}

export default BlogCard