// import Image from "next/image";

export default function Home() {
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
              <form className="mt-5">
                <small className="text-[11px]">Name *</small>
                <p>
                  <input
                    className="rounded-md border pl-2 text-[15px] mb-3 w-full h-[36px]"
                    type="text"
                    placeholder="enter your name"
                  />
                </p>
                <small className="text-[11px]">Email *</small>
                <p>
                  <input
                    className="rounded-md border pl-2 text-[15px] w-full h-[36px]"
                    type="email"
                    placeholder="enter your email"
                  />
                </p>
                <small className="text-[11px]">Password</small>
                <p>
                  <input
                    className=" rounded-md border pl-2 text-[15px] w-full h-[36px]"
                    type="password"
                    placeholder="Create a password"
                  />
                </p>
                <div className="mt-3">
                  <small className="text-[11px] ">
                    {" "}
                    must be atleast 8 characters
                  </small>
                </div>
                <div>
                  <button className="bg-[#27779B] text-white text-sm leading-6 mt-10 font-medium py-2 px-3 rounded-lg w-full mt-5">
                    Get Started
                  </button>
                </div>
                <div className="mt-10 text-center">
                  <small className="text-[11px]">Already have an account </small>{" "}
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
