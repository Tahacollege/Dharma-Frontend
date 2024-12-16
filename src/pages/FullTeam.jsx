 import naman from "../assets/ImageAndIcons/NAMAN.png"
import shubhAM from "../assets/ImageAndIcons/shubhAM.png"
import MAYANK from "../assets/ImageAndIcons/MAYANK.png"
import DEVANSHU from "../assets/ImageAndIcons/DEVANSHU.png"
import YVRAJ from "../assets/ImageAndIcons/YUVRAJ.png"
import abhi from "../assets/ImageAndIcons/abhi.png"
// import social from "../assets/ImageAndIcons/socialmedia.png"
import taha from "../assets/ImageAndIcons/taha.png"
function FullTeam(){
    const arr=[
        {
            img:naman,
            name:"Naman Jaiswal",
            post:"Frontend Developer & Project Manager",
            discri:"Expert in efficiently managing projects from conception to completion and designing seamless, user-friendly interfaces that enhance the overall user experiences",
        
        },
        {
            img:shubhAM,
            name:"Shubham Rajput",
            post:"UI/UX Designer",
            discri:"Skilled in crafting intuitive, user-focused designs that combine creativity and functionality to deliver seamless digital experiences tailored to client needs",
        
        },
        {
            img:MAYANK,
            name:"Mayank",
            post:"Full-Stack Developer",
            discri:"Specialist in developing scalable backend systems and integrating them with dynamic frontends to create powerful and reliable web applications.",
        
        },
        {
            img:DEVANSHU,
            name:"Devanshu",
            post:"Frontend Developer",
            discri:"Proficient in building responsive and interactive web interfaces, ensuring functionality and aesthetics go hand in hand for exceptional user satisfaction.",
        
        },
        {
            img:YVRAJ,
            name:"Yuvraj Singh Chauhan",
            post:"Full-Stack Developer",
            discri:"Passionate about creating robust, end-to-end solutions by merging innovative frontend designs with efficient and secure backend architectures",
        
        },
        {
            img:abhi,
            name:"Abhishek Varma",
            post:" Data Analyst & Researcher",
            discri:"An expert in automating processes, analyzing data for actionable insights, and conducting in-depth research to drive innovation and efficiency in every project.",
        
        },
        {
            img:taha,
            name:"Taha",
            post:" Full Stack Develper Intern",
            discri:"An intermediate-level professional passionate about creating robust, end-to-end solutions by merging innovative frontend designs with efficient and secure backend architectures.",
        
        },
        {
            img:taha,
            name:"Krishna Verma",
            post:" Front End Develper Intern",
            discri:"An intermediate-level professional proficient in building responsive and interactive web interfaces, ensuring functionality and aesthetics work hand in hand to deliver exceptional user satisfaction.",
        
        },

    ]
    return (
<div className="mt-10 p-5">
<h2 className="text-lg font-semibold text-[#0040FF]  text-start md:text-center mb-3">
Meet The Team
            </h2>
            <div className="text-center">
            <h3 className="text-xl md:text-3xl font-bold  text-start md:text-center mb-8">
            Bringing Together Passionate Minds and Exceptional 
            </h3>
            <h3 className="text-xl md:text-3xl -mt-5 font-bold  text-start md:text-center mb-8">
            Skills to Deliver Excellence
            </h3>
            </div>
            
            <div className=" grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 ">
                {
                    arr.map((item,index)=>{
                        return(
                            <div key={index} className=" text-black p-6 mx-auto rounded-lg  h-auto max-w-xs">
                <div className="flex items-center">
                  <div className="mx-auto  rounded-full p-3">
                    <img
                      alt="web-development-icon"
                      src={item.img}
                      className="w-20 md:w-52 h-20 md:h-52 rounded-full"
                    />
                  </div>
                </div>
                <div className=" p-1 md:p-5 shadow-md rounded-xl w-full">
                <h4 className="text-sm md:text-xl font-bold text-center">
                  {item.name}
                </h4>
                <p className="mt-2 text-[8px] md:text-xs text-[#0040FF] font-semibold text-center">
                {item.post}
                </p>
                <p className="mt-2 text-[8px] md:text-xs text-slate-600 text-center">
                {item.discri}
                </p>
               
                </div>
              </div>
                        )
                    })
                }
              
            </div>

</div>
    )
}
export default FullTeam