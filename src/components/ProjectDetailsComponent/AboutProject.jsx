import React from "react";

const AboutProject =(props)=>{
    return(<>
     <div className="mb-16  mx-auto py-10 px-6">
          <div className="text-center justify-center items-center mb-6">
            <p className="font-bold md:text-4xl text-3xl text-white mb-4">
              {props.head}
            </p>
            <div className="w-full flex justify-center">
              <p className="text-white md:w-4/5 md:text-xl text-sm text-center">
               {props.desc}
              </p>
            </div>

          </div>

          <div className=" grid grid-flow-row md:grid-flow-col items-center w-full px-4 md:px-10">
            <div className=" grid grid-flow-col my-10">
              <div className="flex items-center justify-center">
                <div className="">
                  <img className="w-24" src={props.img1} alt="Smooth Navigation" />
                  <p className="text-white text-sm mt-2">
                    {props.img1_name}
                  </p>
                </div>
              </div>
              <div className="flex items-center text-center justify-center">
                <div className=" ">
                  <img className="w-24" src={props.img2} alt="Real Time Updates" />
                  <p className="text-white text-sm mt-2">
                  {props.img2_name}
                  </p>
                </div>
              </div>
            </div>
            <div className=" h-40 grid grid-flow-col my-5 ">
              <div className="flex items-center text-center justify-center">
                <div className="">
                  <img className="w-24" src={props.img3} alt="Mobile Design" />
                  <p className="text-white text-sm mt-2">
                  {props.img3_name}
                  </p>
                </div>
              </div>
              <div className="flex items-center text-center justify-center">
                <div className="">
                  <img className="w-24 mx-auto" src={props.img4} alt="Secure Payment" />
                  <p className="text-white mx-auto text-sm mt-2">
                  {props.img4_name}
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
    </>)
}
export default AboutProject;