import React from "react";
import { useNavigate } from "react-router-dom";

const Consult = (props) => {
    const navigate=useNavigate()
    const redirect=()=>{
  navigate("/contact")
  window.scrollTo(0, 0);
    }
    return (<>
        <div>
            <div className="bg-black text-white rounded-xl mx-auto px-8 py-8 max-w-5xl text-center mb-10">
                <p className="my-auto text-sm leading-6">
                    Let’s bring your vision to life! Reach out today for a free
                    consultation and discover how Dharma Tech Solution’s innovative web
                    and app solutions can elevate your business.
                </p>
                <button onClick={redirect} className="bg-white text-black text-xs font-semibold px-8 py-2 rounded-lg mt-6">
                    Request a Free Consultation
                </button>
            </div>
            <div className="h-8"></div>
        </div></>)
}
export default Consult;