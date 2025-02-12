import { AutherDp } from "./BlogCard"
import logo from "../assets/logo.svg"
import { useNavigate } from "react-router-dom"

const AppBar = () => {
  const navigate = useNavigate()
  return (
    <>
        <nav className=" fixed bg-zinc-200 w-full flex items-center justify-between py-4 px-4 ">
            <div onClick={()=>navigate("/blog")} className="flex items-center gap-4 cursor-pointer">
                <img className="w-10" src={logo} alt="logo" />
            </div>
            <div className="flex items-center gap-4">
                <button className="flag size-fit px-2 py-1 rounded-full text-white bg-green-600">New</button>
                <button onClick={()=>navigate("/publish")} className="flag size-fit px-2 py-1 rounded-full text-white bg-green-600">Publish</button>
                <AutherDp size = {10} name="dewnag"/>
            </div>
        </nav>
    </>
  )
}

export default AppBar