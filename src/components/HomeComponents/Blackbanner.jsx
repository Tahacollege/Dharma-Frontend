import { useNavigate } from "react-router-dom";
function Blackbanner() {
  const navigate=useNavigate()
  const redirect=()=>{
navigate("/contact")
window.scrollTo(0, 0);
  }
  return (
    <div className="mt-12 bg-black text-white p-10 rounded-lg text-wrap w-full mx-auto">
      <h1 className="text-wrap text-center text-sm">
        Let's bring your vision to life! Reach out today for a free consultation
        and discover how Dharma
      </h1>
      <h1 className="text-wrap text-center text-sm">
        Tech Solution's innovative web and app solutions can elevate your
        business
      </h1>

      <center>
        <button onClick={redirect} className="bg-white mt-3 text-black p-2 rounded-lg text-xs">
          Request a Free Consultation
        </button>
      </center>
    </div>
  );
}
export default Blackbanner;
