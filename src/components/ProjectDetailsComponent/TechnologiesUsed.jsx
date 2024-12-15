import React from "react";
import reactimg from "../../assets/Technologies_img/react_icon.png"
import nodeimg from "../../assets/Technologies_img/node_icon.png"
import mysqlimg from "../../assets/Technologies_img/mysql_icon.png"
import mongoimg from "../../assets/Technologies_img/mongo_icon.png"
import stripeimg from "../../assets/Technologies_img/stripe_icon.png"

const TechnologiesUsed =(props)=>{
    return(<>
    <div className=" w-full  items-center  my-24">
        <div className=" h-40 grid grid-flow-col">
            <div className="flex justify-end items-end md:px-10 px-8 py-3">
                <div className=" w-20">
                    <img src={props.img1 || reactimg} className=""/>
                </div>
            </div>
            <div className="flex justify-center">
                <div className=" w-20 ">
                <img src={props.img2 || nodeimg} className=""/>
                </div>
            </div>
            <div className="flex justify-start items-end px-10 py-3">
                <div className=" w-20">
                <img src={props.img3 || mysqlimg} className=""/>
                </div>
            </div>
        </div>

        <div className="w-full h-32 flex flex-col justify-center items-center  md:h-20 text-center">
            <p className="text-3xl text-white font-bold">TECHNOLLOGIES USED</p>
            <div className="flex justify-center text-center">
               <div className=" w-3/4"> <p className="text-white text-base">Leveraging cutting-edge technologies to deliver scalable and efficient solutions.</p></div>
            </div>
        </div>
        <div className=" h-40 grid grid-flow-col">
            <div className="flex justify-end  md:px-10 px-8 py-3">
                <div className=" w-20 ">
                <img src={props.img4 || mongoimg} className=""/>
                </div>
            </div>
            <div className="flex justify-center items-end">
                <div className="w-20">
                <img src={props.img5 || reactimg} className=""/>
                </div>
            </div>
            <div className="flex justify-start px-10 py-3 ">
                <div className="w-20">
                <img src={props.img6 || stripeimg} className=""/>
                </div>
            </div>
        </div>
    </div>
    </>)
}
export default TechnologiesUsed;