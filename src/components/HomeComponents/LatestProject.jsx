import Pawsitive from "../../assets/ImageAndIcons/PawsitiveIMG.png";
import UrbanStudio from "../../assets/ImageAndIcons/urbanStudioIMG.png";
import JesicaFlat from "../../assets/ImageAndIcons/jasicaflatIMG.png";
import SolarCRM from "../../assets/ImageAndIcons/solarCRmIMG.png";
import Property from "../../assets/Property/property_project.png"
import Fashion from "../../assets/Male_Fashion/man_fashion_project.png"
import travelers from "../../assets/Fantacy_Travelers/fantacy_travelers_project.png"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LatestPorject() {
  const navigate=useNavigate()
  function redirect(link){
    navigate(link)
    window.scrollTo(0, 0);
  }
 
  const arrWeb = [
    {
      img: Pawsitive,
      name: "WEB-Petcare - Premium Pet Essentials at Your Fingertips namna",
      discription:
        "find top-qualtiy food and arrivals for dogs,cats, and more - everything your pet needs in one place",
        link:'/petcare'
    },
    {
      img: UrbanStudio,
      name: "WEB-Urban Studio - Transforming Spaces With Style",
      discription:
        "Explore our interior design solutions that bring elegance, fuctionality, and creativity into every corner",
        link:'/urban'
    },
    {
      img: JesicaFlat,
      name: "WEB-Jessica Flat - Your Gateway to a Cozy Mountain Gateway",
      discription:
        "Book yur perfect stay with ease, from room options to local experiences , all in one place",
        link:'/jessica'
    },
    {
      img: SolarCRM,
      name: "WEB-Solar CRM - Powering Solar Panel Sales And Installation",
      discription:
        "Book your perfect stay with ease , from room options to local experiences , all in one place",
        link:'/petcare'
    },
    {
      img: Property,
      name: "Home Horizons - Where Dreams Find Their Address.",
      discription:
        "Home Horizons connects buyers and sellers with trusted real estate solutions, offering seamless property transactions and dream home discoveries",
        link:'/homehorizons'
    },
    {
      img: Fashion,
      name: "Metro Man - Redefining Style, One Man at a Time.",
      discription:
        "Metro Man delivers trendy, sophisticated fashion essentials, empowering men to look sharp and confident daily",
        link:'/metroman'
    },
    {
      img: travelers,
      name: "Voyage Vista - Discover New Horizons, One Journey at a Time.",
      discription:
        "Voyage Vista inspires unforgettable adventures, offering seamless travel planning for explorers seeking new horizons worldwide",
        link:'/voyagevista'
    },
  ];
  const arrApp = [
    {
      img: Pawsitive,
      name: "APP-Petcare - Premium Pet Essentials at Your Fingertips namna",
      discription:
        "find top-qualtiy food and arrivals for dogs,cats, and more - everything your pet needs in one place",
        link:'/petcare'
    },
    {
      img: UrbanStudio,
      name: "APP-Urban Studio - Transforming Spaces With Style",
      discription:
        "Explore our interior design solutions that bring elegance, fuctionality, and creativity into every corner",
        link:'/urban'
    },
    {
      img: JesicaFlat,
      name: "APP-Jessica Flat - Your Gateway to a Cozy Mountain Gateway",
      discription:
        "Book yur perfect stay with ease, from room options to local experiences , all in one place",
        link:'/jessica'
    },
    {
      img: SolarCRM,
      name: "APP-Solar CRM - Powering Solar Panel Sales And Installation",
      discription:
        "Book your perfect stay with ease , from room options to local experiences , all in one place",
        link:'/solar'
    },
  ];
  const arrERP = [
    {
      img: Pawsitive,
      name: "ERP-Petcare - Premium Pet Essentials at Your Fingertips namna",
      discription:
        "find top-qualtiy food and arrivals for dogs,cats, and more - everything your pet needs in one place",
        link:'/petcare'
    },
    {
      img: UrbanStudio,
      name: "ERP-Urban Studio - Transforming Spaces With Style",
      discription:
        "Explore our interior design solutions that bring elegance, fuctionality, and creativity into every corner",
        link:'/urban'
    },
    {
      img: JesicaFlat,
      name: "ERP-Jessica Flat - Your Gateway to a Cozy Mountain Gateway",
      discription:
        "Book yur perfect stay with ease, from room options to local experiences , all in one place",
        link:'/jessica'
    },
    {
      img: SolarCRM,
      name: "ERP-Solar CRM - Powering Solar Panel Sales And Installation",
      discription:
        "Book your perfect stay with ease , from room options to local experiences , all in one place",
        link:'/petcare'
    },
  ];
  const arrCRM = [
    {
      img: Pawsitive,
      name: "CRM-Petcare - Premium Pet Essentials at Your Fingertips namna",
      discription:
        "find top-qualtiy food and arrivals for dogs,cats, and more - everything your pet needs in one place",
        link:'/petcare'
    },
    {
      img: UrbanStudio,
      name: "CRM-Urban Studio - Transforming Spaces With Style",
      discription:
        "Explore our interior design solutions that bring elegance, fuctionality, and creativity into every corner",
        link:'/urban'
    },
    {
      img: JesicaFlat,
      name: "CRM-Jessica Flat - Your Gateway to a Cozy Mountain Gateway",
      discription:
        "Book yur perfect stay with ease, from room options to local experiences , all in one place",
        link:'/jessica'
    },
    {
      img: SolarCRM,
      name: "CRM-Solar CRM - Powering Solar Panel Sales And Installation",
      discription:
        "Book your perfect stay with ease , from room options to local experiences , all in one place",
        link:'/solar'
    },
  ];
  const change=(id)=>{
if(id==1){
  setDiv(
    <div className=" grid grid-cols-2 gap-2 md:grid-cols-4 md:max-w-[1250px] overflow-y-hidden md:overflow-y-auto p-0 md:p-6 w-full  mt-6">
        {arrWeb.map((item, index) => {
          return (
            <div
        onClick={()=>redirect(item.link)}
          key={index}
          className="min-w-40 md:h-full md:min-w-64 w-20 md:w-[240px] ml-0 md:ml-5 mt-3 p-2 md:p-4 bg-white rounded-2xl cursor-pointer"
        >
          <div className="bg-[#d7d9df9e] p-2 rounded-2xl grid h-42 md:h-52 place-items-center">
            <img src={item.img} className="h-32 md:h-48" />
          </div>
          <h2 className="font-bold text-[12px] mt-2 " >{item.name}</h2>
          <h2 className="text-[10px] mt-2">{item.discription}</h2>
        </div>
          );
        })}
      </div>
  )
}

if(id==2){
  setDiv(
    <div className=" grid grid-cols-2 gap-2 md:grid-cols-4 md:max-w-[1250px] overflow-y-hidden md:overflow-y-auto p-0 md:p-6 w-full  mt-6">
        {arrApp.map((item, index) => {
          return (
            <div
        onClick={()=>redirect(item.link)}
          key={index}
          className="min-w-40 md:h-full md:min-w-64 w-20 md:w-[240px] ml-0 md:ml-5 mt-3 p-2 md:p-4 bg-white rounded-2xl cursor-pointer"
        >
          <div className="bg-[#d7d9df9e] p-2 rounded-2xl grid h-42 md:h-52 place-items-center">
            <img src={item.img} className="h-32 md:h-48" />
          </div>
          <h2 className="font-bold text-[12px] mt-2 " >{item.name}</h2>
          <h2 className="text-[10px] mt-2">{item.discription}</h2>
        </div>
          );
        })}
      </div>
  )
}

if(id==3){
  setDiv(
    <div className=" grid grid-cols-2 gap-2 md:grid-cols-4 md:max-w-[1250px] overflow-y-hidden md:overflow-y-auto p-0 md:p-6 w-full  mt-6">
        {arrERP.map((item, index) => {
          return (
            <div
        onClick={()=>redirect(item.link)}
          key={index}
          className="min-w-40 md:h-full md:min-w-64 w-20 md:w-[240px] ml-0 md:ml-5 mt-3 p-2 md:p-4 bg-white rounded-2xl cursor-pointer"
        >
          <div className="bg-[#d7d9df9e] p-2 rounded-2xl grid h-42 md:h-52 place-items-center">
            <img src={item.img} className="h-32 md:h-48" />
          </div>
          <h2 className="font-bold text-[12px] mt-2 " >{item.name}</h2>
          <h2 className="text-[10px] mt-2">{item.discription}</h2>
        </div>
          );
        })}
      </div>
  )
}

if(id==4){
  setDiv(
    <div className=" grid grid-cols-2 gap-2 md:grid-cols-4 md:max-w-[1250px] overflow-y-hidden md:overflow-y-auto p-0 md:p-6 w-full  mt-6">
        {arrCRM.map((item, index) => {
          return (
            <div
        onClick={()=>redirect(item.link)}
          key={index}
          className="min-w-40 md:h-full md:min-w-64 w-20 md:w-[240px] ml-0 md:ml-5 mt-3 p-2 md:p-4 bg-white rounded-2xl cursor-pointer"
        >
          <div className="bg-[#d7d9df9e] p-2 rounded-2xl grid h-42 md:h-52 place-items-center">
            <img src={item.img} className="h-32 md:h-48" />
          </div>
          <h2 className="font-bold text-[12px] mt-2 " >{item.name}</h2>
          <h2 className="text-[10px] mt-2">{item.discription}</h2>
        </div>
          );
        })}
      </div>
  )
}
if(id==5){
  navigate("/allprojects")
  window.scrollTo(0, 0);
}
  }
  const [divs,setDiv]=useState(<div className=" grid grid-cols-2 gap-2 md:grid-cols-4 md:max-w-[1250px]  overflow-y-hidden md:overflow-y-auto p-0 md:p-6 w-full  mt-6">
    {arrWeb.map((item, index) => {
      return (
        <div
        onClick={()=>redirect(item.link)}
          key={index}
          className="min-w-40 md:h-full md:min-w-64 w-20 md:w-[240px] ml-0 md:ml-5 mt-3 p-2 md:p-4 bg-white rounded-2xl cursor-pointer"
        >
          <div className="bg-[#d7d9df9e] p-2 rounded-2xl grid h-42 md:h-52 place-items-center">
            <img src={item.img} className="h-32 md:h-48" />
          </div>
          <h2 className="font-bold text-[12px] mt-2 " >{item.name}</h2>
          <h2 className="text-[10px] mt-2">{item.discription}</h2>
        </div>
      );
    })}
  </div>)
  return (
    <div className="p-2 md:mt-0 mt-10 md:p-8 bg-[#EDF2FF]">
      <h3 className="text-lg font-semibold text-[#0040FF] text-start md:text-center mb-3">
        Latest Project
      </h3>
      <div className="text-center">
        <h3 className="text-xl text-nowrap md:text-3xl font-bold text-start md:text-center mb-8">
          Our Recent Launched Projects
        </h3>
        <h3 className="text-xl md:text-3xl -mt-5 font-bold text-start md:text-center mb-8">
          Available Into Market
        </h3>
      </div>
      <div className="border-2 border-solid border-slate-950  rounded-md p-0 md:p-3 w-fit mx-auto flex-nowrap  md:flex-wrap flex items-center justify-center">
        <div onClick={()=>change(1)} className="hover:bg-black text-black font-semibold text-xs md:text-sm cursor-pointer hover:text-white p-1 md:my-0 my-2 md:p-3 ml-2 md:ml-9 rounded-3xl">
          {" "}
          Web Development
        </div>
        <div onClick={()=>change(2)} className="hover:bg-black text-black font-semibold text-xs md:text-sm cursor-pointer hover:text-white p-1 md:my-0 my-2 md:p-3 ml-2 md:ml-9 rounded-3xl">
          App Development
        </div>
        <div onClick={()=>change(3)} className="hover:bg-black text-black font-semibold text-xs md:text-sm cursor-pointer hover:text-white p-1 md:my-0 my-2 md:p-3 ml-2 md:ml-9 rounded-3xl">
          ERP
        </div>
        <div onClick={()=>change(4)} className="hover:bg-black text-black font-semibold text-xs md:text-sm cursor-pointer hover:text-white p-1 md:my-0 my-2 md:p-3 ml-2 md:ml-9 rounded-3xl">
          CRM
        </div>
        <div onClick={()=>change(5)} className="hover:bg-black text-black font-semibold text-xs md:text-sm cursor-pointer hover:text-white p-1 md:my-0 my-2 md:p-3 ml-2 md:ml-9 rounded-3xl">
          All Projects
        </div>
      </div>
      {divs}
      
    </div>
  );
}
export default LatestPorject;
