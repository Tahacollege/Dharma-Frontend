import React from "react";
import ProtfolioHeader from "../components/ProjectDetailsComponent/ProtfolioHeader.jsx"
import AboutProject from "../components/ProjectDetailsComponent/AboutProject.jsx";
import TechnologiesUsed from "../components/ProjectDetailsComponent/TechnologiesUsed.jsx";
import OurContibution from "../components/ProjectDetailsComponent/OurContibution.jsx";
import CompleteUi from "../components/ProjectDetailsComponent/CompleteUI.jsx";
import ClientSay from "../components/ProjectDetailsComponent/ClientSay.jsx";
import Consult from "../components/ProjectDetailsComponent/Consult.jsx";

import logo from "../assets/Jessica_img/Logo.png"
import screenView from "../assets/Jessica_img/jessica_mob.png"
import gallery from "../assets/UrbanStudio_img/gallery.png"
import caseDesign from "../assets/UrbanStudio_img/caseDesign.png"
import blog from "../assets/UrbanStudio_img/designBlog.png"
import resp from "../assets/UrbanStudio_img/responsive.png"
import webview from "../assets/ImageAndIcons/urbanStudioIMG.png"
import AS from "../assets/UrbanStudio_img/AlokSharma.png"



function Jassica (){
    return(<>
    <div className="bg-[#3f5d97] ">
        <ProtfolioHeader
          logo={logo}
          pro_name="Jassica Flat:"
          desc1="Stay, Relax, and Explore  the Mountains"
          desc2="EXPERIENCE FOR Hotel Lovers"
          desc3=" A booking platform as serene as the destination itse"
          sreen_banner={screenView}
          livepr="https://jessica.dharmatechsolutions.com/"
        
        />

        <AboutProject
         head="ABOUT THE PROJECT"
         desc=" Urban Studio is an interior design firm showcasing its portfolio through an engaging website. The platform highlights completed projects, client testimonials, and design philosophies in an elegant format.Jassica Flat is a hotel booking website designed to offer a seamless reservation experience. The platform allows users to explore room categories, amenities, and nearby attractions, all within a beautifully crafted interface"
        img1={gallery}
        img1_name="Interactive Gallery"
        img2={caseDesign}
        img2_name=" Design Case Studies"
        img3={blog}
        img3_name="Design Blog"
        img4={resp}
        img4_name="Responsive Design"
        />

      <TechnologiesUsed  />

      <OurContibution
      problem="“Promotional sales are critical for any e-commerce platform, but they come with their own challenges. The sudden surge in users during these events puts immense pressure on the platform, leading to slow page load times, laggy user interactions, and in some cases, complete crashes. For PetCare, a platform built to cater to pet owners with essential supplies and services, these issues could result in abandoned carts, dissatisfied customers, and lost revenue”"
      solution="“To address these challenges, we engineered a scalable backend architecture specifically designed to adapt to unpredictable traffic conditions while maintaining peak performance and reliability. Recognizing that even a brief delay or system lag during promotional sales could lead to abandoned carts and frustrated users, we focused on creating a solution that would not only handle traffic surges but also provide a seamless, uninterrupted shopping experience for every customer” "
        />

       <CompleteUi
       Ui_img={webview}
       heading=" EXPLORE THE COMPLETE UI DESIGN"
       desc="Take a closer look at the intuitive and user-friendly interface crafted exclusively for PetCare."
       />

       <ClientSay
       client_img={AS}
       client_name="Alok Mishrma"
       client_post="CEO, Petcare"
       client_msg=" Dharma Tech Solution delivered outstanding results on our project.
              The entire team showcased exceptional skills and professionalism,
              ensuring the project was completed on time and beyond
              expectations. Their seamless communication and proactive approach
              made the collaboration effortless. Every challenge was met with
              innovative solutions, and their dedication to quality was evident
              throughout the process. It’s been a pleasure working with such a
              talented and well-managed team. Highly recommended."

       />
<div className="p-2">
       <Consult/>
       </div>

        
      </div>
    </>)
}
export default Jassica;