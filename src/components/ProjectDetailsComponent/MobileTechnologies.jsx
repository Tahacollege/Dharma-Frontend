import mobilehand from "../../assets/DeliverGreen/mobile_prop.png"
import brocoli from "../../assets/DeliverGreen/rotatedBrocoli.png"
import reactimg from "../../assets/DeliverGreen/reactjs.png"
import nodeimg from "../../assets/DeliverGreen/nodejs.png"
import mysqlimg from "../../assets/DeliverGreen/mysql.png"
import mongoimg from "../../assets/DeliverGreen/mongodb.png"
import stripeimg from "../../assets/DeliverGreen/stripe.png"
function MobileTechnologies(){
    return (
        <div className="p-2 md:p-10 flex flex-col md:flex-row w-full h-full md:h-[550px] -mt-0 md:-mt-20">
            <div className=" w-full md:w-4/6 h-full flex flex-col items-center justify-center">
            <h1 className="text-3xl md:text-5xl text-white">Technologies Used</h1>
            <p className="text-center mt-5 text-white">Leveraging cutting-edge technologies to deliver scalable and <br />efficient solutions.</p>
           
            <div className=" flex flex-row gap-2 p-2 flex-wrap w-full md:w-7/12 mt-10 h-full items-center justify-center">
            <div className="border-2 w-20 md:w-36 h-20 md:h-36 flex items-center justify-center bg-white rounded-2xl border-slate-200">
                <img 
                className="w-1/2 h-1/2"
                src={mysqlimg}
                />
            </div>
            <div className="border-2 w-20 md:w-36 h-20 md:h-36 flex items-center justify-center bg-white rounded-2xl border-slate-200">
                <img 
                className="w-1/2 h-1/2"
                src={stripeimg}
                />
            </div>
            <div className="border-2 w-20 md:w-36 h-20 md:h-36 flex items-center justify-center bg-white rounded-2xl border-slate-200">
                <img 
                className="w-1/2 h-1/2"
                src={nodeimg}
                />
            </div>
            <div className="border-2 w-20 md:w-36 h-20 md:h-36 flex items-center justify-center bg-white rounded-2xl border-slate-200">
                <img 
                className="w-1/2 h-1/2"
                src={reactimg}
                />
            </div>
            <div className="border-2 w-20 md:w-36 h-20 md:h-36 flex items-center justify-center bg-white rounded-2xl border-slate-200">
                <img 
                className="w-1/2 h-1/2"
                src={mongoimg}
                />
            </div>

            </div>
            </div>
            <div className="  w-full md:mt-0 mt-10 md:w-2/6 h-full flex flex-row">
            <img 
            className="w-full h-full"
            src={mobilehand}
            />
            <img 
            className="md:block hidden w-48 h-48 -ml-2 mt-64"
            src={brocoli}
            />
            </div>
        </div>
    )
}
export default MobileTechnologies