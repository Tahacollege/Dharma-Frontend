import LOGO from "../../assets/ImageAndIcons/fotterLogo.png";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";


function Fotterr() {
  const navigate=useNavigate()
  function redirect(id){
if(id==1){
  navigate('/')
  window.scrollTo(0, 0);
}
else if(id==2){
  navigate('/about')
  window.scrollTo(0, 0);
}
else if(id==3){
  navigate('/services')
  window.scrollTo(0, 0);
}
else if(id==4){
  navigate('/allprojects')
  window.scrollTo(0, 0);
}
else if(id==5){
  navigate('/team')
  window.scrollTo(0, 0);
}
else if(id==6){
  navigate('/contact')
  window.scrollTo(0, 0);
}
  }
  return (
    <div className="bg-black text-white flex flex-wrap pb-4">
      <div className="p-6 w-full md:w-1/4">
        <img src={LOGO} alt="Company Logo" className="w-20 mb-4" />
        <p className="mt-3 text-sm">
          At Dharma Tech Solution, we are a team of passionate and skilled
          software engineers dedicated to crafting high-quality, innovative, and
          user-centric systems.
        </p>
        <button className="p-2 bg-white text-black rounded-lg font-medium text-sm mt-4">
          Discover More
        </button>
      </div>

      <div className="p-6 w-full md:w-1/4 mt-5 md:mt-0">
        <h1 className="text-[#0040FF] text-lg font-bold mb-3">Company</h1>
        <ul className="list-disc text-sm ml-5">
          <li className="mt-2 hover:underline cursor-pointer" onClick={()=>redirect(1)}>Home</li>
          <li className="mt-2 hover:underline cursor-pointer" onClick={()=>redirect(2)}>About Us</li>
          <li className="mt-2 hover:underline cursor-pointer" onClick={()=>redirect(3)}>Services</li>
          <li className="mt-2 hover:underline cursor-pointer" onClick={()=>redirect(4)}>Portfolio</li>
          <li className="mt-2 hover:underline cursor-pointer" onClick={()=>redirect(5)}>Team</li>
          <li className="mt-2 hover:underline cursor-pointer" onClick={()=>redirect(6)}>Contact</li>
        </ul>
      </div>

      <div className="p-6 w-full md:w-1/4 mt-5 md:mt-0">
        <h1 className="text-[#0040FF] text-lg font-bold mb-3">Services</h1>
        <ul className="list-disc text-sm ml-5">
          <li className="mt-2">Web Development</li>
          <li className="mt-2">App Development</li>
          <li className="mt-2">UI/UX Designing</li>
          <li className="mt-2">CRM Development</li>
          <li className="mt-2">ERP Development</li>
          <li className="mt-2">CRM Solutions</li>
        </ul>
      </div>

      <div className="p-6 w-full md:w-1/4 mt-5 md:mt-0">
        <h1 className="text-[#0040FF] text-lg font-bold mb-3">
          Contact Details
        </h1>
        <div className="flex items-center mb-3">
          <IoCallOutline className="w-5 h-5 text-white" />
          <span className="ml-2 text-sm">+9630533562</span>
        </div>
        <div className="flex items-center">
          <MdOutlineMail className="w-5 h-5 text-white" />
          <span className="ml-2 text-sm">@dharmatech@gmail.com</span>
        </div>
        <div className="flex w-full  mt-5 space-x-4 p-2">
          
            <FaInstagram className="w-7 h-7 rounded-full cursor-pointer"
            onClick={()=>window.location.href="https://www.instagram.com/dharmatech_solutions/profilecard/?igsh=dWl4cTBjcmJxaWlo"}
            />
          
          
            <FaFacebook className="w-7 h-7 rounded-full cursor-pointer"
            onClick={()=>window.location.href="https://www.facebook.com/share/18AxERAGzB/"}
            />
          
          
            <FaXTwitter className="w-7 h-7 rounded-full cursor-pointer"
            onClick={()=>window.location.href="https://x.com/Dharmatech86938?t=GSCfSAM8ZK1OSV21bSAJXw&s=09"}
            />
          
        </div>
      </div>

      <hr className="w-full border-t border-white mt-8" />
      <div className="hidden md:flex bg-black text-white py-2 px-6 justify-between items-center w-full gap-4 mt-4 shadow-md">
        <div className="flex items-center">
          <a
            href="mailto:dharmatechgamil.com"
            className="flex items-center text-muted-foreground hover:text-muted"
          >
            <span className="space-x-2 text-xs">
              <i className="fa-solid fa-envelope"></i> @dharmatechgamil.com
            </span>
          </a>
          <span className="mx-2 text-muted-foreground">|</span>
          <a
            href="tel:+9630533562"
            className="flex items-center text-muted-foreground hover:text-muted"
          >
            <span className="text-xs">+919977011278</span>
          </a>
        </div>
        <div className="flex space-x-4">
          <a href="https://www.facebook.com/share/18AxERAGzB/" className="hover:text-muted">
            <i className="fa-brands fa-facebook" ></i>
          </a>
          <a href="#" className="text-muted-foreground hover:text-muted">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://x.com/Dharmatech86938?t=GSCfSAM8ZK1OSV21bSAJXw&s=09" className="text-muted-foreground hover:text-muted">
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a href="https://www.instagram.com/dharmatech_solutions/profilecard/?igsh=dWl4cTBjcmJxaWlo" className="text-muted-foreground hover:text-muted">
            <i className="fa-brands fa-instagram"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
export default Fotterr;
