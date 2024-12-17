import Blackbanner from "../components/HomeComponents/Blackbanner"
import WhatWeProvide from "../components/HomeComponents/WhatWeProvide"
import WriteToUs from "../components/HomeComponents/WriteToUs"
import { useNavigate } from "react-router-dom"
function Services(){
    const navigate=useNavigate()
    const redirect=()=>{
        navigate("/allprojects")
        window.scrollTo(0, 0);
    }
    return (
        <div className="p-5">
            <div className="p-8 w-full  rounded-lg h-[640px] bg-cover bg-center bg-[url('/backgroundImages/services.png')] ">
        <div className= "mt-48 w-full md:w-1/2 ml-2 md:ml-10">
        <h1 className="font-bold text-black md:text-white text-xl md:text-5xl">Empowering Your Vision with </h1>
            <h1 className="font-bold text-black md:text-white text-xl md:text-5xl mt-2">Expert Solutions</h1>
        <h1 className=" text-black md:text-white mt-2 text-sm md:text-lg text-wrap">Explore our wide range of services tailored to meet your unique needs.</h1>
        <button className="bg-white text-black px-4 py-3 mt-3 text-md font-semibold rounded-md mb-2" onClick={()=>redirect()}>Explore Our Work</button>
            
        </div>
        </div>

        <WhatWeProvide />
        <Blackbanner />
        <WriteToUs />
        </div>
    )
}
export default Services