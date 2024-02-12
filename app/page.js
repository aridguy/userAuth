'use client'

import Link from "next/link";
import { useRouter } from 'next/navigation'
 

// import Image from "next/image";

export default function Home() {
  const router = useRouter();
  const gotoSignup = () =>{
    router.push('/signup')
  }
 
  return (
    <div>
      <div className="md:flex ">
        <div className="md:w-1/2">
          <div className="w-full flex justify-center  flex-col h-screen items-center">
            <div className="mb-4">
              <h3 className="text-center mb-2 text-xl">Welcome back</h3>
              <small>Welcome back, please enter your details</small>

              <form className="mt-5">
                <small className="text-[11px]">Email</small>
                <p>
                  <input
                    className="border pl-2 text-[15px] mb-3 w-full h-[36px]"
                    type="email"
                    placeholder="enter your email"
                  />
                </p>
                <small className="text-[11px]">password</small>
                <p>
                  <input
                    className="border pl-2 text-[15px] w-full h-[36px]"
                    type="password"
                    placeholder="******"
                  />
                </p>
                <div className="mt-3">
                  <input type="checkbox" />
                  <small className="text-[11px] "> remember for 30 days</small>
                  <small className="text-[11px] cursor-pointer text-sky-300 aspect-square">
                    {" "}
                    forgot password
                  </small>
                </div>
                <div>
                  <button onClick={()=>gotoSignup()} type="button" className="bg-[#27779B] text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg w-full mt-5">
                    Login
                  </button>
                </div>
                <div className="mt-9 text-center">
                  <small className="text-[11px]">dont have an account? </small>{" "}
                  <small className="cursor-pointer text-sky-300 text-[11px]"><Link href="/signup">Sign Up</Link></small>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div
          className="md:w-1/2 bg-cover bg-center h-screen"
          style={{ backgroundImage: 'url("/Section.png")' }}
        ></div>
      </div>
    </div>
  );
}
