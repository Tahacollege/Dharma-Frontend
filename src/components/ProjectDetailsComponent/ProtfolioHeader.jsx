import React from "react";
// import logo from "../assets/PetcareDeatail_Img/image_46.png";
const PetcareSection = (props) => {
  return (
    <div className="flex flex-col items-center w-full px-4">
      {/* Header Section */}
      <div className="text-center mb-8 mt-2">
        {props.logo?<img className="mx-auto w-24 h-auto" src={props.logo} alt="Logo" />:<></>}
        <p className="text-white font-bold text-lg mt-2">{props.pro_name}</p>
      </div>

      {/* Title Section */}
      <div className="text-white text-center font-bold text-xl md:text-2xl mb-4 space-y-2">
        <p>{props.desc1}</p>
        <p>{props.desc2}</p>
      </div>

      {/* Description */}
      <p className="text-white text-sm md:text-base mb-6 text-center">
        {props.desc3}
      </p>

      {/* Buttons */}
      <div className="flex text-nowrap space-x-4 ">
        <button onClick={()=>window.location.href=`${props.livepr}`} className="rounded-3xl px-3 py-2 text-sm md:px-5 md:py-3 md:text-base font-semibold border-white hover:bg-white hover:text-black text-white bg-transparent border-2">
          View Live Project
        </button>
        <button onClick={()=>window.location.href="/allprojects"} className="rounded-3xl px-3 py-2 text-sm md:px-5 md:py-3 md:text-base font-semibold border-white hover:bg-white hover:text-black text-white bg-transparent border-2">
          Explore More Project
        </button>
      </div>

      {/* Background Image Section */}
      <div className="w-full flex  items-center justify-center mt-10">
        <img
          className="w-full max-w-4xl mx-auto object-cover"
          src={props.sreen_banner}
          alt="Centered Image"
        />
      </div>
    </div>
  );
};

export default PetcareSection;
