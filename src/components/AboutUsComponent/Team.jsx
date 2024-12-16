import naman from "../../assets/ImageAndIcons/NAMAN.png"
import DEVANSHU from "../../assets/ImageAndIcons/DEVANSHU.png"
import MAYANK from "../../assets/ImageAndIcons/MAYANK.png"
import social from "../../assets/ImageAndIcons/socialmedia.png"
import { useNavigate } from "react-router-dom"
function Team(){
    const navigate=useNavigate()
    const redirect=()=>{
        navigate("/team")
        window.scrollTo(0, 0);
    }
    const arr=[
        {
            img:naman,
            name:"Naman Jaiswal",
            post:"Frontend Developer & Project Manager",
            discri:"Expert in efficiently managing projects from conception to completion and designing seamless, user-friendly interfaces that enhance the overall user experiences",
            socials:social
        },
        {
            img:DEVANSHU,
            name:"Devanshu",
            post:"Frontend Developer",
            discri:"Proficient in building responsive and interactive web interfaces, ensuring functionality and aesthetics go hand in hand for exceptional user satisfaction.",
            socials:social
        },
        {
            img:MAYANK,
            name:"Mayank",
            post:"Full-Stack Developer",
            discri:"Specialist in developing scalable backend systems and integrating them with dynamic frontends to create powerful and reliable web applications.",
            socials:social
        },
        

    ]
    const arrow="-->"
    return (
<div className="mt-10 p-2">
<h2 className="text-lg font-semibold text-[#0040FF] text-start md:text-center mb-3">
Meet The Team
            </h2>
            <div className="text-start md:text-center">
            <h3 className="text-xl md:text-3xl font-bold text-start md:text-center mb-8">
            Bringing Together Passionate Minds and Exceptional 
            </h3>
            <h3 className="text-xl md:text-3xl -mt-5 font-bold text-start md:text-center mb-8">
            Skills to Deliver Excellence
            </h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-6 ml-2 md:ml-0 ">
                {
                    arr.map((item,index)=>{
                        return(
                            <div key={index} className=" max-h-max text-black p-2 md:p-6 mx-auto rounded-lg  h-auto max-w-xs">
                <div className="flex items-center">
                  <div className="mx-auto  rounded-full p-3">
                    <img
                      alt="web-development-icon"
                      src={item.img}
                      className="w-28 md:w-52 h-28 md:h-52 rounded-full"
                    />
                  </div>
                </div>
                <div className="p-1 md:p-5 shadow-md rounded-xl w-full">
                <h4 className="text-lg md:text-xl font-bold text-center">
                  {item.name}
                </h4>
                <p className="mt-2 text-[5px] md:text-xs text-[#0040FF] font-semibold text-center">
                {item.post}
                </p>
                <p className="mt-2 text-[5px] md:text-xs text-slate-600 text-center">
                {item.discri}
                </p>
                <div className="mt-5 w-32 mx-auto">
                    <img 
                    src={item.socials}
                    />
                </div>
                </div>
              </div>
                        )
                    })
                }
              
            </div>
            <div className="w-full h-10">
                <button onClick={()=>redirect()} className="bg-black float-end mr-10 text-white p-2 font-semibold rounded-xl">View Team</button>

            </div>

</div>
    )
}
export default Team