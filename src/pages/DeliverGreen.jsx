import ClientSay from "../components/ProjectDetailsComponent/ClientSay"
import AS from "../assets/UrbanStudio_img/AlokSharma.png"
import mobile from "../assets/DeliverGreen/mobile.png"
import ProjectDetails from "../components/ProjectDetailsComponent/ProjectDetails"
import MobileTechnologies from "../components/ProjectDetailsComponent/MobileTechnologies"
import AboveClient from "../components/ProjectDetailsComponent/AboveClient"
import radish from "../assets/DeliverGreen/radish.png"
import banana from "../assets/DeliverGreen/banana.png"
import Consult from "../components/ProjectDetailsComponent/Consult"
function DeliverGreen(){
    return (
        <div className="p-5">
            <div className="flex flex-col md:flex-row w-full h-full md:h-[550px] p-3 gap-2">
                <div className="flex flex-col w-full md:w-1/2 h-full justify-center p-2 md:p-10">
                <h1 className="text-green-600 text-3xl md:text-6xl font-bold mt-2">Deliver Green</h1>
                <h1 className="text-xl md:text-3xl font-light mt-2">Freshness Delivered to Your Doorstep</h1>
                <p className="text-xs md:text-lg font-extralight mt-2">Experience fresh produce delivered straight to your home with just a <br /> few taps. Built to enhance user convenience and ensure quality, Deliver <br /> Green is your go-to solution for fruits and vegetables delivery</p>
                <div className="flex p-0 md:p-2 gap-5 mt-5">
                <button className="bg-green-500 text-white p-1 md:p-3 md:hover:font-bold md:hover:underline">View Live Project</button>
                <button className="bg-slate-500 text-white p-1 md:p-3 md:hover:font-bold md:hover:underline">Explore More Projects</button>
                </div>
                </div>
                <div className="mt-5 md:mt-0 w-full md:w-1/2 h-full overflow-visible md:overflow-clip">
                <img 
                className="w-full h-full md:h-[850px]"
                src={mobile}
                />
                </div>
            </div>
            <div className="p-2 bg-[#04AF4C]">
            <ProjectDetails />
            <MobileTechnologies />
            </div>

            <div className="h-32"></div>

            <div className="p-2 relative bg-[#04AF4C] ">
            <img 
                className="absolute w-32 md:w-48 h-32 md:h-48 flex mt-0 md:mt-36 -ml-2"
                src={radish}
                />
                <AboveClient />
                <ClientSay
       client_img={AS}
       client_name="Alok Mishrma"
       client_post="CEO, Petcare"
       client_msg=" Dharma Tech Solution delivered outstanding results on our project.
              The entire team showcased exceptional skills and professionalism,
              ensuring the project was completed on time and beyond
              expectations. Their seamless communication and proactive approach
              made the collaboration effortless. Every challenge was met with
              innovative solutions, and their dedication to quality was evident
              throughout the process. It’s been a pleasure working with such a
              talented and well-managed team. Highly recommended."

       />
       <img 
                className="ml-auto w-32 md:w-48 h-32 md:h-48 -mt-20 md:-mt-44 flex "
                src={banana}
                />
       </div>

       <div className="h-20"></div>

       <Consult />
        </div>
    )
}
export default DeliverGreen