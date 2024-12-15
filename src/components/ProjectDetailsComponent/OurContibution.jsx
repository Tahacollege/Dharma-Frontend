import React, { useState } from "react";

const OurContibution = (props) => {
    const pr=props.problem
    const sl=props.solution
    const [show,setShow]=useState(false)
    const [problem,setProblem]=useState(pr.slice(0,500))
    const [showsol,setShowsol]=useState(false)
    const [solution,setsolution]=useState(sl.slice(0,500))
    const showfull = () => {
        setShow((prevShow) => {
            const newShow = !prevShow; 
            if (newShow) {
                setProblem(props.problem); 
            } else {
                setProblem(pr.slice(0, 500)); 
            }
            return newShow; // Update the state
        });
    };

    const showfullsol = () => {
        setShowsol((prevShow) => {
            const newShow = !prevShow; 
            if (newShow) {
                setsolution(props.solution); 
            } else {
                setsolution(sl.slice(0, 500)); 
            }
            return newShow; // Update the state
        });
    };
    return (<>
        <div className="mb-20">
            <div className="md:my-20 my-10">
                <p className="md:text-4xl text-2xl font-bold text-white text-center">
                    OUR CONTIBUTION
                </p>
            </div>

            <div className="text-white  mb-16 px-4  w-full flex flex-col md:grid md:grid-flow-col gap-6">
                <div className=" w-full flex flex-col justify-center">
                    <div>
                        <p className="font-bold text-white text-xl text-center mb-6">PROBLEM </p>
                        <div className="md:w-4/5 mx-auto">
                            <p className="md:text-lg h-48 overflow-y-auto text-xs md:leading-6 text-justify">
                                {problem}...
                            </p>
                            <a onClick={showfull} className="cursor-pointer md:text-sm text-xs font-semibold block text-right mt-4 underline"> {show?"Read Less":"Read More"}</a>
                        </div>
                    </div>
                </div>
                <div className="w-0 h-auto border-l-2 border-white "></div>
                <div className=" w-full flex flex-col justify-center">
                    <div>
                        <p className="font-bold text-white text-xl text-center mb-6"> SOLUTION</p>
                        <div className="md:w-4/5 mx-auto">
                            <p className="md:text-lg h-48 overflow-y-auto text-xs md:leading-6 text-justify">
                                {solution}...
                            </p>
                            <a onClick={showfullsol} className="cursor-pointer md:text-sm text-xs font-semibold block text-right mt-4 underline"> {showsol?"Read Less":"Read More"}</a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </>)
}
export default OurContibution;