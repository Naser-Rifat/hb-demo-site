import React from "react";

const Signup = () => {
  return (
    <div className="w-[1920px] h-[1080px]">
      <section className="grid grid-cols-2  bg-[gray]">
        <div className="col-span-1">sdsd</div>
        <div className="w-[549px] col-span-1">
          <div className=" hidden lg:block  pt-20 pb-32 lg:px-10 w-full h-full bg-[#E5E5E5]">
            <div className="ml-32">
              <h1>
                {" "}
                Signup to{" "}
                <span className="font-bold text-blue-800">Health Bondhu</span>
              </h1>
              <p className="text-sm text-gray-400 mb-8">
                Sign Up to Healthbondu and amazing thing near around you
              </p>
            </div>
            <form className="flex flex-col justify-center px-12	 items-center ">
              <span className="">
                <input
                  style={{ width: "470px" }}
                  placeholder="Phone Number"
                  className=" bg-white rounded-full outline-none text-sm mt-2  p-5   "
                />
              </span>
              <span>
                <input
                  placeholder="Full Name"
                  style={{ width: "470px" }}
                  className=" bg-white outline-none text-sm mt-2 rounded-full p-5 "
                />
              </span>
              <span>
                <input
                  placeholder="Password"
                  className=" bg-white outline-none text-sm mt-2 rounded-full p-5 h-[60px] lg:w-[400px] "
                />
              </span>
              <span>
                <input
                  placeholder="Refer code (Option)"
                  className=" bg-white outline-none text-sm mt-2 rounded-full p-5 h-[60px] lg:w-[400px] "
                />
              </span>
              <button className="p-3 bg-[#2C62D6] text-sm rounded-full text-white px-20 mt-10">
                Sign Up
              </button>
            </form>
            <p className="text-gray-400 text-sm mt-1 text-center  ">
              Or quick continue with
            </p>

            <div className="mt-5 text-center flex justify-center">
              <div className="  flex justify-center items-center text-white  rounded-full mx-2 w-5 h-9 bg-[#3B5999] p-5 ">
                <span>f</span>
              </div>
              <div className="flex justify-center items-center text-white  rounded-full mx-2 w-5 h-9 bg-[#DD4B39] p-5 ">
                <span>G</span>
              </div>
            </div>
            <div className=" flex justify-center items-start   mt-2 ml-20 lg:mx-auto  w-80 lg:w-full ">
              {" "}
              <svg
                width="18"
                height="18"
                className="mt-1  "
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.75 13.5H14.25V15H3.75V13.5ZM7.2 11.475L3.75 8.025L5.25 6.6L7.2 8.55L12.75 3L14.25 4.5L7.2 11.475Z"
                  fill="#3E6ED7"
                />
              </svg>
              <p className="text-sm">
                By signing up you accept our{" "}
                <span className="font-bold m-0">Terms & Conditions</span> and
                <span className="font-bold m-0"> Privacy Policy</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Signup;
