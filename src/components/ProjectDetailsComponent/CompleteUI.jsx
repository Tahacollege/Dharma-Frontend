import React from "react";

const CompleteUi = (props) => {
    return (<>
        <div>

            <div className="text-center ">
                <p className="text-3xl text-white font-bold">
                   {props.heading}
                </p>
                <div className="flex justify-center">
                <p className="md:w-1/4 w-4/5 text-white text-sm  ">
                    {props.desc}
                </p>

                </div>
                <button className="rounded-3xl px-8 py-2 text-sm font-semibold border-white hover:bg-white hover:text-black text-white bg-transparent border-2 my-10 ">
                    VIEW FULL UI DESIGN
                </button>
            </div>

            <div className=" mb-20">
                <img className="md:w-1/2 w-11/12 m-auto border-b-4" src={props.Ui_img} />
            </div>

        </div>
    </>)
}
export default CompleteUi;