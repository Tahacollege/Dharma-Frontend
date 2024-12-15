import React from "react";

const ClientSay = (props) => {
    return (<>
        <div className="m-3">


            <div className="mb-8">
                <p className="text-3xl font-bold text-white text-center">
                    WHAT OUR CLIENT SAY
                </p>
            </div>

            <div className="bg-white rounded-lg mx-auto py-4 flex flex-col md:grid md:grid-flow-col md:max-w-4xl mb-20">
                <div className="p-4 w-[200px] text-center mx-auto">
                    <img className="md:w-40 mb-3 mx-auto" src={props.client_img} />
                    <p className="text-base font-semibold">{props.client_name}</p>
                    <p className="text-base font-semibold text-orange-300">
                        {props.client_post}
                    </p>
                </div>

                <div className="md:h-40 my-auto mx-3 md:border-l-2 border-b-2   border-gray-500"></div>

                <div className="my-auto w-full px-6">
                    <p className="text-sm my-4  leading-6">
                        {props.client_msg}
                    </p>
                    <div className="w-full text-end">
                        <p className="text-base font-semibold">{props.client_name}</p>
                    </div>
                </div>
            </div>

        </div>
    </>)
}
export default ClientSay;