import React, { useState } from "react";
import LogoImg from "../../assets/ImageAndIcons/logo.png";
import { useNavigate } from "react-router-dom";
function Header() {
  const navigate=useNavigate()
  function redirect(id){
if(id==1){
  navigate('/')
}
else if(id==2){
  navigate('/about')
}
else if(id==3){
  navigate('/services')
}
else if(id==4){
  navigate('/allprojects')
}
else if(id==5){
  navigate('/team')
}
else if(id==6){
  navigate('/contact')
}
  }
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="hidden md:flex bg-black text-white py-2 px-6 flex-row justify-between items-center rounded-lg shadow-md">
        {/* Contact Section */}
        <div className="flex flex-row items-center space-y-0">
          <a
            href="mailto:dharmatechgamil.com"
            className="flex items-center text-muted-foreground hover:text-muted"
          >
            <span className="space-x-2 text-xs flex items-center">
              <i className="fa-solid fa-envelope"></i>
              <span>@dharmatechgamil.com</span>
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

        {/* Social Links */}
        <div className="flex space-x-3">
          <a href="https://www.facebook.com/share/18AxERAGzB/" className="hover:text-muted">
            <i className="fa-brands fa-facebook"></i>
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

      <div className="bg-white rounded-xl shadow-lg p-4">
        <nav className="flex items-center justify-between p-2 h-5 bg-white mb-4">
          <div>
            <img src={LogoImg} alt="Logo" className="w-32 mt-2 cursor-pointer" onClick={()=>redirect(1)} />
          </div>

          <div className="flex justify-center mx-auto text-xs items-center space-x-6 hidden lg:flex">
            <a
              onClick={()=>redirect(1)}
              className="hover:bg-black text-sm font-semibold mt-2 hover:text-white py-1 px-2 text-black rounded-2xl"
            >
              Home
            </a>
            <a
              onClick={()=>redirect(2)}
              className="hover:bg-black text-sm font-semibold mt-2 hover:text-white py-1 px-2 text-black rounded-2xl"
            >
              About Us
            </a>
            <a
              onClick={()=>redirect(3)}
              className="hover:bg-black text-sm font-semibold mt-2 hover:text-white py-1 px-2 text-black rounded-2xl"
            >
              Services
            </a>
            <a
              onClick={()=>redirect(4)}
              className="hover:bg-black text-sm font-semibold mt-2 hover:text-white py-1 px-2 text-black rounded-2xl"
            >
              Portfolio
            </a>
            <a
              onClick={()=>redirect(5)}
              className="hover:bg-black text-sm font-semibold mt-2 hover:text-white py-1 px-2 text-black rounded-2xl"
            >
              Team
            </a>
            <a
              onClick={()=>redirect(6)}
              className="hover:bg-black text-sm font-semibold mt-2 hover:text-white py-1 px-2 text-black rounded-2xl"
            >
              Contact
            </a>
          </div>
          <a
            href="#"
            className="bg-black text-xs text-white px-3 mt-2 py-1 rounded-full hover:bg-zinc-700 lg:block md:hidden"
          >
            Get Started
          </a>

          {/* Hamburger Menu Icon */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-black"
          >
            <i
              className={`fa-solid ${isMenuOpen ? "fa-xmark" : "fa-bars"}`}
            ></i>
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden flex flex-col items-center space-y-4">
            <a
              onClick={()=>redirect(1)}
              className="hover:bg-black text-sm font-semibold hover:text-white py-2 px-4 text-black rounded-2xl"
            >
              Home
            </a>
            <a
              onClick={()=>redirect(2)}
              className="hover:bg-black text-sm font-semibold hover:text-white py-2 px-4 text-black rounded-2xl"
            >
              About Us
            </a>
            <a
              onClick={()=>redirect(3)}
              className="hover:bg-black text-sm font-semibold hover:text-white py-2 px-4 text-black rounded-2xl"
            >
              Services
            </a>
            <a
              onClick={()=>redirect(4)}
              className="hover:bg-black text-sm font-semibold hover:text-white py-2 px-4 text-black rounded-2xl"
            >
              Portfolio
            </a>
            <a
              onClick={()=>redirect(5)}
              className="hover:bg-black text-sm font-semibold hover:text-white py-2 px-4 text-black rounded-2xl"
            >
              Team
            </a>
            <a
              onClick={()=>redirect(6)}
              className="hover:bg-black text-sm font-semibold hover:text-white py-2 px-4 text-black rounded-2xl"
            >
              Contact
            </a>
          </div>
        )}

        {/* Get Started Button */}
      </div>
    </>
  );
}

export default Header;
