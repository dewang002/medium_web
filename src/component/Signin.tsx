import { ChangeEvent, memo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signinCheckType } from "@dewang002/medium";
import axios from "axios";
import { Backend_URL } from "../config";

const Signin = () => {
  const navigate = useNavigate()
  const [inputData, setInputData] = useState<signinCheckType>({
    email: "",
    password: "",
  });

  const sendRequest = async ()=>{
    try{
      const res = await axios.post(`${Backend_URL}/api/v1/user/signin`,
        inputData)
      if(res){
        const jwt = res.data
        localStorage.setItem("token",jwt)
        navigate("/blog")
      }else{
        console.log(res)
      }
    }catch(err){
      console.log(err)
    }
  }

  return (
    <div className="h-full w-full flex bg-zinc-100 text-zinc-900">
      <div className="flex w-full md:w-1/2 px-10 sm:px-20 lg:px-30 xl:px-40 h-full flex-col justify-center items-center">
        <div className="text-center pb-10">
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold">
            Login to account
          </h1>
          <h3 className="text-xl">
            dont have an account?{" "}
            <Link to={"/"} className="underline">
              Login
            </Link>{" "}
          </h3>
        </div>
        <form onSubmit={(e)=>e.preventDefault()} action="" className="flex w-full flex-col gap-4 ">
          <LablleInput
            lable={"Email"}
            onchange={(e) => {
              setInputData((prev) => ({
                ...prev,
                email: e.target.value,
              }));
            }}
            placeholder={"Enter your email"}
          />
          <LablleInput
            lable={"Password"}
            type="password"
            onchange={(e) => {
              setInputData((prev) => ({
                ...prev,
                password: e.target.value,
              }));
            }}
            placeholder={"Enter your password"}
          />

          <button onClick={sendRequest} className="rounded bg-zinc-900 py-4 text-zinc-100">
            Sign In
          </button>
        </form>
      </div>

      <div className="hidden w-0 md:flex md:w-1/2  lg:flex lg:w-1/2 h-full bg-zinc-400 flex-col justify-center items-center">
        <div className="max-w-3/4 ">
          <h1 className=" font-bold text-3xl pb-4 ">
            "The customer service I received was exceptional. The support team
            went above and beyond to address my concerns."
          </h1>
          <h2 className="font-black text-xl">jules Winnfield</h2>
          <h3 className="text-lg text-zinc-600">CEO, Acme Inc</h3>
        </div>
      </div>
    </div>
  );
};

interface labletype {
  lable: string;
  type?: string;
  placeholder: string;
  onchange: (e: ChangeEvent<HTMLInputElement>) => void;
}
const LablleInput = memo(
  ({ type, onchange, lable, placeholder }: labletype) => {
    return (
      <>
        <h3 className="text-xl font-bold">{lable}</h3>
        <input
          type={type}
          onChange={onchange}
          className="border w-full border-zinc-400 rounded p-2"
          placeholder={placeholder}
        />
      </>
    );
  }
);

export default Signin;
