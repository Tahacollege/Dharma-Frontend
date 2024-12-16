import DTSLOGO from "../../assets/ImageAndIcons/dtslogo.png"
import Blackbanner from "./Blackbanner"
function WhyWorkWithUs(){
return(
    <div className="p-8 bg-[#EDF2FF] mt-10 ">
        <h3 className="text-lg font-semibold text-[#0040FF] text-left ml-14 md:text-center mb-3">Why Work With</h3>
        <h3 className="text-3xl font-bold text-center mt-3">
              Dharma Tech Solution? 
            </h3>
            <div className="bg-white rounded-2xl flex flex-wrap mt-5 p-3 ">
                <div className="bg-black rounded-full p-3 mx-auto my-auto ">
                    <img 
                    src={DTSLOGO}
                    className="w-48 p-10 my-auto mx-auto"
                    />
                </div>
                <div className="p-4 ml-12 ">
                    <ul className="list-disc">
                        <li className="font-bold text-xs md:text-sm mt-5 mb-10 text-nowrap capitalize"> Customized,Future-ready solutions built for your needs</li>
                        <li className="font-bold text-xs md:text-sm mt-5 mb-10 text-nowrap capitalize">Expert Team of developers,designers,and Analysts</li>
                        <li className="font-bold text-xs md:text-sm mt-5 mb-10 text-nowrap capitalize">CLient-first Approach with clear Communicatio</li>
                        <li className="font-bold text-xs md:text-sm mt-5 mb-10 text-nowrap capitalize">focus on quality , efficiency, and timely delivery</li>
                        <li className="font-bold text-xs md:text-sm mt-5 mb-10 text-nowrap capitalize">cutting-edge technology and innovative problem solving</li>
                    </ul>
                </div>

            </div>
            <div className="md:p-0 px-10">
            <Blackbanner />
            </div>
        </div>
)
}
export default WhyWorkWithUs