
import MemberImg from "../assets/ImageAndIcons/member.png";
import WhatWeProvide from "../components/HomeComponents/WhatWeProvide";
import LatestPorject from "../components/HomeComponents/LatestProject";
import WhyWorkWithUs from "../components/HomeComponents/WhyWorkWithUs";
import Reviews from "../components/HomeComponents/Reviews";
import WriteToUs from "../components/HomeComponents/WriteToUs";
import { useNavigate } from "react-router-dom";
function Home(){
  const navigate=useNavigate()
  function redirect(id){
if(id==1){
  navigate('/')
  window.scrollTo(0, 0);
}
else if(id==2){
  navigate('/about')
  window.scrollTo(0, 0);
}
else if(id==3){
  navigate('/services')
  window.scrollTo(0, 0);
}
else if(id==4){
  navigate('/allprojects')
  window.scrollTo(0, 0);
}
else if(id==5){
  navigate('/team')
  window.scrollTo(0, 0);
}
else if(id==6){
  navigate('/contact')
  window.scrollTo(0, 0);
}
  }
return (
    <>
      
        <div className="overflow-hidden">
          <div className="bg-background-3 w-full h-[450px] bg-center bg-cover "></div>
          <div className="w-full h-full  -mt-80 md:-mt-64 flex md:justify-center p-3 md:p-0  ">
          <div className="w-full md:w-[870px] bg-inherit   h-full md:h-[450px]   border-2 flex flex-col items-start justify-start md:items-center md:justify-center md:-ml-0 -ml-2  border-slate-900 rounded-r-full md:rounded-full ">
          <div className="flex  justify-center mt-2">
                  <span className="flex  text-xs text-muted-foreground">
                    <img src={MemberImg} alt="" className="mr-2 w-12" /> 510+
                    Trusted Members
                  </span>
                 
                </div>
                <h1 className="font-sans font-bold text-nowrap text-3xl md:text-6xl">Shaping Digital</h1>
                <h1 className="font-sans font-bold text-nowrap text-3xl md:text-6xl mt-2">Futures <span className="text-[#3B5EE9]">Together</span></h1>
                <h1 className="text-xs mt-5 text-justify mr-5 mt-2 md:text-center">Empowering Businesses with Scalable, Future-Ready Web, App, ERP, & CRM Solutions – Crafted for </h1>
                  <h1 className="text-xs text-justify mr-5 mt-2 md:text-center"> Excellence and Designed to Drive Results in a Dynamic Digital Landscape.</h1>
                  <button className="bg-black text-white px-4 py-1 mt-3 text-sm rounded-md mb-2" onClick={()=>redirect(4)}>Explore Our Work</button>
            </div>
            </div>
        {/* <div className="bg-[#EDF2FF] rounded-2xl p-6">
          <div className="bg-white rounded-2xl p-3 pb-0 space-y-10">
            <div className="flex items-center justify-center  ">
              <div className="text-center space-y-3">
                <div className="flex items-center justify-center">
                  <span className="flex items-center text-xs text-muted-foreground">
                    <img src={MemberImg} alt="" className="mr-2 w-12" /> 510+
                    Trusted Members
                  </span>
                </div>

                <h1 className="text-4xl font-bold">
                  Shaping <span className="text-blue-500">Digital</span> Futures
                </h1>
                <p className="mt-2 text-sm text-center w-4/5 mx-auto">
                  Empowering Businesses with Scalable, Future-Ready Web, App,
                  ERP & CRM Solutions – Crafted for Excellence and Designed to
                  Drive Results in a Dynamic Digital Landscape.
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center ">
              <img src={GroupImg} alt="" className="w-full max-w-3xl" />
            </div>
          </div>
        </div> */}
        <div>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 h-auto justify-between p-10 gap-1">
            <div className="bg-card mx-auto p-4 rounded-lg shadow-lg  sm:w-1/2 md:w-1/3 lg:w-4/5">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">1K</h2>
              <p className="font-bold md:text-xl mt-2 text-xs mb-2 text-nowrap">Satisfied Clients</p>
              <p className="text-xs">
                Empowering over a thousand clients with reliable solutions.
              </p>
            </div>
            <div className="bg-card mx-auto p-6 rounded-lg shadow-lg h-fit sm:w-1/2 md:w-1/3 lg:w-4/5">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">40+</h2>
              <p className="font-bold  md:text-xl mt-2 text-xs mb-2 text-nowrap">Successful Projects</p>
              <p className="text-xs">
                Bringing expertise and dedication to every project we deliver.
              </p>
            </div>
            <div className="bg-card mx-auto p-6 rounded-lg shadow-lg sm:w-1/2 md:w-1/3 lg:w-4/5">
              <h2 className="text-3xl md:text-5xl font-bold text-foreground">4+</h2>
              <p className="font-bold  md:text-xl mt-2 text-xs mb-2 ">Industry Awards Won</p>
              <p className="text-xs">
                Proudly recognized for our excellence and innovation.
              </p>
            </div>
            <div className="bg-card mx-auto p-6 rounded-lg shadow-lg h-fit sm:w-1/2 md:w-1/3 lg:w-4/5">
              <h2 className="text-3xl md:text-5xl font-bold text-foreground">10+</h2>
              <p className="font-bold  md:text-xl mt-2 text-xs mb-2 ">Skilled Experts on Team</p>
              <p className="text-xs ">
                A team of experts committed to driving your success.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center p-6 bg-[#EDF2FF] rounded-3xl">
          <div className="bg-white rounded-2xl p-7 text-start md:text-center">
            <h1 className="text-3xl font-semibold">
              <span className="text-blue-500 ">About</span> Us
            </h1>
            <p className="text-[14px] w-3/4 ml-0 md:mx-auto mb-6">
              At Dharma Tech solution, we are a team of passionate and skilled
              software engineers dedicated to crafting high-quality, innovative,
              and user-centric solutions. With a diverse range of expertise
              spanning frontend development, full-stack engineering, UI/UX
              design, and data analysis, we bring together the best minds to
              turn your ideas into reality.
            </p>
            <div class="flex justify-start md:justify-center items-center ">
              <div class="flex space-x-4">
                <button onClick={()=>redirect(2)} class="bg-black text-white px-3 py-1 rounded text-sm">
                  Read More
                </button>
                <button onClick={()=>redirect(5)} class="border border-black px-3 py-1 rounded text-sm">
                  Meet Dhara Team
                </button>
              </div>
            </div>
          </div>
          <WhatWeProvide />
          <LatestPorject />
          <WhyWorkWithUs />
          <Reviews/ >
          <WriteToUs />
        </div>
        </div>
    </>

)
}
export default Home