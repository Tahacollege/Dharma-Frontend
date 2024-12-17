import img from "../assets/ImageAndIcons/fourpeople.png"
import img2 from "../assets/ImageAndIcons/peopleandlaptop.png"
import img3 from "../assets/ImageAndIcons/shakehands.png"
import WhatWeProvide from "../components/HomeComponents/WhatWeProvide"
import Team from "../components/AboutUsComponent/Team"
import Blackbanner from "../components/HomeComponents/Blackbanner"
import WriteToUs from "../components/HomeComponents/WriteToUs"

function About(){
    
    return(
       <div className="p-5">
        <div className="p-8 w-full border-2 border-slate-900 rounded-lg h-96 md:h-[640px] bg-cover bg-center bg-[url('/backgroundImages/aboutusbg.png')] ">
        <div className= "mt-48 w-full md:w-1/2">
        <h1 className="font-bold text-white text-3xl">About Us</h1>
        <h1 className=" text-white md:hidden block mt-2 text-sm md:text-lg text-wrap">Inovating Today, Shinning Tomorrow</h1>
        <h1 className=" text-white hidden md:block mt-2 text-sm md:text-lg text-wrap text-justify">At Dharma Tech Solution, we are a passionate and skilled team of software engineers dedicated to creating high-quality, innovative, and user-focused solutions tailored to meet each client’s unique needs. Our diverse expertise spans across frontend development, full-stack engineering, UI/UX design, and data analysis, allowing us to deliver holistic and seamless digital experiences. We collaborate with creativity and precision, ensuring that every project reflects our commitment to excellence. With a customer-first approach, we work to turn your ideas into impactful digital solutions that drive success and inspire growth. Partner with us to bring your vision to life, backed by a team you can trust</h1>
        </div>
        </div>
        <h1 className=" text-black p-2 md:hidden block mt-2 text-sm md:text-lg text-wrap">At Dharma Tech Solution, we are a passionate and skilled team of software engineers dedicated to creating high-quality, innovative, and user-focused solutions tailored to meet each client’s unique needs. Our diverse expertise spans across frontend development, full-stack engineering, UI/UX design, and data analysis, allowing us to deliver holistic and seamless digital experiences. We collaborate with creativity and precision, ensuring that every project reflects our commitment to excellence. With a customer-first approach, we work to turn your ideas into impactful digital solutions that drive success and inspire growth. Partner with us to bring your vision to life, backed by a team you can trust</h1>
        
        <div className=" mt-10 rounded-xl p-2 md:p-10 bg-[#EDF2FF] w-full text-justify">
            <div className="hidden md:flex">
            <div className="mt-0 md:mt-28 w-full md:w-2/5">
                <h1 className="font-bold text-2xl ">Mission</h1>
                <h1 className=" mt-2 text-sm md:text-xl md:text-wrap md:mb-0 mb-10">Our mission at Dharma Tech Solution is to empower businesses by delivering innovative, scalable, and user-focused digital solutions. We aim to bridge the gap between technology and human experience, ensuring every project drives measurable success for our clients</h1>
            </div>
            <div className=" float-start md:float-end mx-auto rounded-xl w-full md:w-3/5 h-fit">
                <img 
                className="float-start md:float-end mx-auto rounded-xl w-full md:w-3/5 h-fit"
                src={img}
                />
            </div>
            </div>
                {/* Mobile View Divs */}
            <div className="relative float-start md:hidden mb-5 mx-auto rounded-xl w-full  h-fit">
                <img 
                className="float-start  mx-auto rounded-xl  w-full h-fit"
                src={img}
                />
                <div className="absolute mt-28 p-5 md:mt-28 w-full text-balance text-white">
                <h1 className="font-bold text-2xl ">Mission</h1>
                <h1 className=" mt-2 font-semibold text-sm md:text-xl md:text-wrap md:mb-0 mb-10">Our mission at Dharma Tech Solution is to empower businesses by delivering innovative, scalable, and user-focused digital solutions. We aim to bridge the gap between technology and human experience, ensuring every project drives measurable success for our clients</h1>
            </div>
            </div>

            <div className="relative float-start md:hidden mb-5 mx-auto rounded-xl w-full  h-fit">
                <img 
                className="float-start  mx-auto rounded-xl  w-full h-fit"
                src={img2}
                />
                <div className="absolute mt-32 p-5 md:mt-28 w-full text-balance text-white">
                <h1 className="font-bold text-2xl ">Vission</h1>
                <h1 className=" mt-2 font-semibold text-sm md:text-xl md:text-wrap md:mb-0 mb-10">To become a trusted global leader in web and app development by continuously pushing the boundaries of innovation, fostering meaningful client relationships, and creating solutions that leave a lasting impact</h1>
            </div>
            </div>

            <div className="relative float-start md:hidden mb-5 mx-auto rounded-xl w-full  h-fit">
                <img 
                className="float-start  mx-auto rounded-xl  w-full h-fit"
                src={img3}
                />
                <div className="absolute mt-16 p-5 md:mt-28 w-full text-balance text-white">
                <h1 className="font-bold text-2xl ">Values</h1>
                <h1 className=" mt-2 font-semibold text-sm md:text-xl md:text-wrap md:mb-0 mb-10">At Dharma Tech Solution, our values guide every step of our journey. We are committed to innovation, client satisfaction, and delivering excellence in every project we undertake. By fostering trust, transparency, and a passion for creativity, we ensure that our solutions not only meet but exceed expectations, creating lasting relationships with our clients</h1>
            </div>
            </div>

        
{/*2nd div */}

<div className="hidden md:flex mt-20 ">
            <div className="float-start md:mt-0 mt-10 md:mb-0 mb-10  mx-auto rounded-xl w-full md:w-3/5 h-fit">
                <img 
                className="float-start md:mt-0 mt-10  md:mb-0 mb-10 mx-auto rounded-xl w-full md:w-3/5 h-fit"
                src={img2}
                />
            </div>
            <div className="mt-0 md:mt-28 w-full md:w-2/5 text-justify">
                <h1 className="font-bold text-2xl">Vission</h1>
                <h1 className="  mt-2 text-sm md:text-lg text-wrap">To become a trusted global leader in web and app development by continuously pushing the boundaries of innovation, fostering meaningful client relationships, and creating solutions that leave a lasting impact</h1>
            </div>
            </div>
            {/*3rd div */}
            <div className="hidden md:flex mt-20">
            <div className="mt-0 md:mt-28 w-full md:w-2/5">
                <h1 className="font-bold text-2xl text-justify">Values</h1>
                <h1 className=" mt-2 text-sm md:text-xl md:text-wrap md:mb-0 mb-10">At Dharma Tech Solution, our values guide every step of our journey. We are committed to innovation, client satisfaction, and delivering excellence in every project we undertake. By fostering trust, transparency, and a passion for creativity, we ensure that our solutions not only meet but exceed expectations, creating lasting relationships with our clients</h1>
            </div>
            <div className=" float-start md:float-end mx-auto rounded-xl w-full md:w-3/5 h-fit md:mb-0 mb-10">
                <img 
                className="float-start md:float-end mx-auto rounded-xl w-full md:w-3/5 h-fit"
                src={img3}
                />
            </div>
            </div>
        </div>

        <div className="mt-20 bg-background-2  bg-no-repeat bg-contain bg-right">
            <WhatWeProvide />
            <Team />
        </div>
        <Blackbanner />
<div className="mt-20">
<WriteToUs />
</div>
        
       </div>
    )
}
export default About