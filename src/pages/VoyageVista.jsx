import ProtfolioHeader from "../components/ProjectDetailsComponent/ProtfolioHeader.jsx"
import bg from "../assets/Fantacy_Travelers/fantacy_laptop.png"
import AboutProject from "../components/ProjectDetailsComponent/AboutProject.jsx";
import TechnologiesUsed from "../components/ProjectDetailsComponent/TechnologiesUsed.jsx";
import OurContibution from "../components/ProjectDetailsComponent/OurContibution.jsx";
import CompleteUi from "../components/ProjectDetailsComponent/CompleteUI.jsx";
import ClientSay from "../components/ProjectDetailsComponent/ClientSay.jsx";
import Consult from "../components/ProjectDetailsComponent/Consult.jsx";
import why_1 from "../assets/ImageAndIcons/why_1.png";
import why_2 from "../assets/ImageAndIcons/why_2.png";
import why_3 from "../assets/ImageAndIcons/why_3.png";
import why_4 from "../assets/ImageAndIcons/why_4.png";
import webview from "../assets/Fantacy_Travelers/fantacy_details.png"
import AS from "../assets/UrbanStudio_img/AlokSharma.png"

function VoyageVista(){
    return (
        <div className="bg-[#F15D30]">
            <ProtfolioHeader
          pro_name="Voyage Vista"
          desc1="Discover New Horizons, One Journey at a Time."
          desc2="Embark on Your Journey, Explore the World with Voyage Vista.."
          desc3=" Voyage Vista inspires unforgettable adventures, offering seamless travel planning for explorers seeking new horizons worldwide."
          sreen_banner={bg}
          livepr="https://positive.urbanfusionstudio.com/"
        />

<AboutProject
         head="ABOUT THE PROJECT"
         desc=" 
Voyage Vista inspires unforgettable adventures, offering seamless travel planning and expert guidance for explorers seeking new horizons worldwide. Whether you're planning a relaxing getaway or an adrenaline-packed journey, we provide tailored travel solutions to help you create lasting memories. With a focus on unique destinations, personalized itineraries, and exceptional service, Voyage Vista makes every trip extraordinary"
        img1={why_1}
        img1_name="Interactive Gallery"
        img2={why_2}
        img2_name=" Design Case Studies"
        img3={why_3}
        img3_name="Design Blog"
        img4={why_4}
        img4_name="Responsive Design"
        />

<TechnologiesUsed  />

<OurContibution
      problem="“
Travel websites face several challenges that can impact both the user experience and the business itself. One of the major issues is inconsistent and inaccurate information. With the vast amount of destinations, hotels, and activities listed, keeping data up-to-date can be a challenge. Incorrect pricing, availability, or outdated details about attractions or accommodations can lead to frustration for customers and potential loss of trust.

Another problem is complexity in booking. While booking multiple services like flights, hotels, and excursions together sounds convenient, the process can often be fragmented or confusing on many travel sites. A lack of integration between different service providers can create a disjointed experience for users, making them abandon the site for something more streamlined.

Overwhelming choices can also be a challenge. With numerous options available for every aspect of a trip, travelers often find themselves feeling overwhelmed when trying to make decisions. This can lead to decision fatigue, making it harder for them to book or commit to a trip. Additionally, personalization is an issue—many websites fail to offer tailored recommendations that match the traveler’s interests, making the search process inefficient”"
      solution="“

      To address the challenges faced by travel websites, Voyage Vista can implement several solutions to improve the user experience and overall service. Ensuring that all information on the platform is accurate and up-to-date is crucial. By partnering directly with trusted service providers and regularly refreshing the website’s data, Voyage Vista can ensure that pricing, availability, and details for flights, hotels, and tours are current. Implementing real-time inventory management will also keep users informed and prevent frustration caused by outdated information. Additionally, incorporating user-generated reviews and feedback can provide real-time insights from travelers, making the platform more reliable.

      A seamless booking process is essential to improving customer satisfaction. Voyage Vista can integrate all services—flights, hotels, activities, and transportation—into one cohesive system, allowing travelers to plan their entire trip without having to jump between different websites. By streamlining the checkout process and minimizing the number of steps, users will find booking more intuitive and less time-consuming, reducing the likelihood of abandonment.” "
        />

<CompleteUi
       Ui_img={webview}
       heading=" EXPLORE THE COMPLETE UI DESIGN"
       desc="Take a closer look at the intuitive and user-friendly interface crafted exclusively for Metro Man."
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

<Consult/>
        </div>
    )
}
export default VoyageVista