'use client'

import axios from "axios";
import { useState } from "react";


export default function Home() {


  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  // Handle input change and update state
  const handleInputChange =  (event) => {
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
        axios.post('https://devapi.omacart.com/signup', formData)
        .then((res) => {
            console.log(res);
        })

      } catch (error) {
        console.error('Error signing up:', error);
      }
    };
   
  

  

  return (
    <div>
      <div className="md:flex ">
        <div
          className="sm:w-full md:w-2/3 bg-cover bg-center h-screen"
          style={{ backgroundImage: 'url("/Section2.png")' }}
        ></div>
        <div className="sm:w-full md:w-1/3">
          <div className="w-full flex justify-center  flex-col h-screen items-center">
            <div className="mb-4">
              <h3 className=" mb-2 text-xl font-bold">SIGNUP</h3>
              <form className="mt-5" onSubmit={handleSubmit}>
                <small className="text-[11px]">First Name *</small>
                <p>
                  <input
                    value={formData.firstname}
                    onChange={handleInputChange}
                    name="firstname"
                    className="rounded-md border pl-2 text-[11px] mb-3 w-full h-[36px]"
                    type="text"
                    placeholder="enter your first name"
                    required={true}
                  />
                </p>
                <small className="text-[11px]">Last name *</small>
                <p>
                  <input
                    value={formData.lastname}
                    onChange={handleInputChange}
                    name="lastname"
                    className="rounded-md border pl-2 text-[11px] mb-3 w-full h-[36px]"
                    type="text"
                    placeholder="enter your last name"
                    required={true}
                  />
                </p>
                <small className="text-[11px]">Email *</small>
                <p>
                  <input
                    value={formData.email}
                    onChange={handleInputChange}
                    name="email"
                    className="rounded-md border pl-2 text-[11px] w-full h-[36px]"
                    type="email"
                    placeholder="enter your email"
                    required={true}
                  />
                </p>
                <small className="text-[11px]">Password</small>
                <p>
                  <input
                    value={formData.password}
                    onChange={handleInputChange}
                    name="password"
                    className=" rounded-md border pl-2 text-[11px] w-[250px] h-[36px]"
                    type="password"
                    placeholder="Create a password"
                    required={true}
                  />
                </p>
                <div className="mt-3">
                  <small className="text-[11px] ">
                    {" "}
                    must be atleast 8 characters
                  </small>
                </div>
                <div>
                  <button type="submit" className="bg-[#27779B] text-white text-sm leading-6 mt-10 font-medium py-2 px-3 rounded-lg w-full mt-5">
                    Get Started
                  </button>
                </div>
                <div className="mt-10 text-center">
                  <small className="text-[11px]">
                    Already have an account{" "}
                  </small>{" "}
                  <small className="cursor-pointer text-sky-300 text-[11px]">
                    Login
                  </small>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
