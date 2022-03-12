import React from "react";

const Signup = () => {
  return (
    <section>
      {/* <div className="container mx-auto mt-20">
        <section className="grid grid-cols-12 ]">
          <div className="col-span-6 hidden lg:block">
            <div>
              <div className="w-[574.94px] h-[647.54px] border-2 mt-[115px] "></div>
            </div>
          </div>

          <div className="col-span-6 ">
            <div className=" mt-[150px] mx-auto">
              <h1 className="text-[24px]">
                {" "}
                Signup to{" "}
                <span className="font-bold text-[24px]  text-blue-800">
                  Health Bondhu
                </span>
              </h1>
              <p className="text-[14px] text-gray-400 mb-[52px]  ">
                Sign Up to healthbondu and amazing thing near around you
              </p>

              <div className=" w-[470px] 2xl:h-[725px] ">
                <form className="flex flex-col justify-center px-12	 items-center ">
                  <span>
                    <input
                      placeholder="Phone Number"
                      className=" w-[470px] h-[60px]   text-[14px] bg-white rounded-full outline-none    p-5  "
                    />
                  </span>
                  <span className=" mt-[29px]">
                    <input
                      placeholder="Full Name"
                      className="   w-[470px] h-[60px] text-[14px] bg-white outline-none   rounded-full p-5 "
                    />
                  </span>
                  <span className=" mt-[29px]">
                    <input
                      placeholder="Password"
                      className=" w-[470px]  h-[60px] text-[14px] bg-white outline-none   rounded-full p-5  "
                    />
                  </span>
                  <span className=" mt-[29px]">
                    <input
                      placeholder="Refer code (Option)"
                      className=" w-[470px] h-[60px] text-[14px] bg-white outline-none   rounded-full p-5  "
                    />
                  </span>
                  <button className=" w-[250px] h-[60px] text-[20px] bg-[#2C62D6]  rounded-full text-white  mt-[29px]  ">
                    Sign Up
                  </button>
                </form>

                <p className="text-gray-400 text-[16px] mt-[22px] mb-[25px] 2xl:w-[200px] mx-auto text-center  [font-weight: 500] ">
                  Or quick continue with
                </p>

                <div className=" text-center flex justify-center xs: mb-[22px]">
                  <div className="  flex justify-center items-center text-white  rounded-full mx-2 w-[60px] h-[60px] bg-[#3B5999] p-5 ">
                    <span className="text-[22px] [font-weight:500]">f</span>
                  </div>
                  <div className="flex justify-center items-center text-white  rounded-full mx-2 w-[60px] h-[60px] bg-[#DD4B39] p-5 ">
                    <span className="text-[22px] [font-weight:500]">G</span>
                  </div>
                </div>
                <div className=" flex    mx-auto  2xl:w-[297px]  ">
                  {" "}
                  <svg
                    width="18"
                    height="18"
                    className="mb-2  "
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.75 13.5H14.25V15H3.75V13.5ZM7.2 11.475L3.75 8.025L5.25 6.6L7.2 8.55L12.75 3L14.25 4.5L7.2 11.475Z"
                      fill="#3E6ED7"
                    />
                  </svg>
                  <p className="text-[12px] [font-weight:400] [line-height:16px]  text-center">
                    By signing up you accept our{" "}
                    <span className="font-bold m-0">Terms & Conditions</span>{" "}
                    and
                    <span className="font-bold m-0"> Privacy Policy</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div> */}

      {/* mobile responsive part  */}

      <div className="min-w-screen ">
        <div className="border-2 flex flex-col h-[100vh] relative   border-gray-400 m-2">
          <div className="absolute w-full h-96 signupPageColor ">
            <svg
              width="375"
              height="235"
              className="mt-20"
              viewBox="0 0 375 235"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M98.4211 94.6272C34.8941 103.179 -17.2954 148.074 -35.4492 169.453V234.607H380.927C381.267 167.586 381.742 32.4252 380.927 27.9458C379.909 22.3467 299.994 -17.8655 236.367 10.1304C172.74 38.1263 177.83 83.9378 98.4211 94.6272Z"
                fill="#3CA2DC"
                fill-opacity="0.3"
              />
            </svg>{" "}
          </div>
          <div className="absolute w-full  rounded-t-[35px] mt-[250px] h-96 bg-white ">
            <div className="mt-[2rem]  text-center">
              <div className="w-[90%] bg-gray-100 mb-[1rem] h-[3rem] mx-auto rounded-full">
                <input className="bg-transparent w-[80%] h-[95%]    focus:outline-none" />
              </div>
              <div className="w-[90%] bg-gray-100 mb-[1rem] h-[3rem] mx-auto rounded-full">
                <input className="bg-transparent w-[80%] h-[95%]    focus:outline-none" />
              </div>
              <div className="w-[90%] bg-gray-100 mb-[1rem] h-[3rem] mx-auto rounded-full">
                <input className="bg-transparent w-[80%] h-[95%]    focus:outline-none" />
              </div>
              <div className="w-[90%] bg-white mb-[1rem] h-[3rem] mx-auto rounded-full">
                <input className="bg-transparent w-[80%] h-[95%]    focus:outline-none" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
