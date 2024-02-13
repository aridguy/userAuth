"use client";

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";


// import Image from "next/image";

export default function Home() {
  const router = useRouter();
  const gotoSignup = () => {
    router.push("/signup");
  };

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // Handle input change and update state
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // You can perform further actions here, such as sending the form data to an API
    console.log(formData);

    // calling the endpoint
    try {
      axios.post("https://devapi.omacart.com/login", formData)
      .then((res) => {
        console.log(res);
        router.push("/dashboard");
      });
    } catch (error) {
      console.error("Error signing up:", error);
    }
    event.target.reset();
  };

  return (
    <div>
      <div className="md:flex ">
        <div className="md:w-1/2">
          <div className="w-full flex justify-center  flex-col h-screen items-center">
            <div className="mb-4">
              <h3 className="text-center mb-2 text-xl">Welcome back</h3>
              <small>Welcome back, please enter your details</small>
              <form className="mt-5" onSubmit={handleSubmit}>
                <small className="text-[11px]">Email</small>
                <p>
                  <input
                    value={formData.email}
                    onChange={handleInputChange}
                    name="email"
                    className="border pl-2 text-[15px] mb-3 w-full h-[36px]"
                    type="email"
                    placeholder="enter your email"
                  />
                </p>
                <small className="text-[11px]">password</small>
                <p>
                  <input
                    value={formData.password}
                    onChange={handleInputChange}
                    name="password"
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
                  <button
                    type="submit"
                    className="bg-[#27779B] text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg w-full mt-5"
                  >
                    Login
                  </button>
                </div>
                <div className="mt-9 text-center">
                  <small className="text-[11px]">dont have an account? </small>{" "}
                  <small
                    onClick={() => gotoSignup()}
                    className="cursor-pointer text-sky-300 text-[11px]"
                  >
                    <Link href="/signup">Sign Up</Link>
                  </small>
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
