import ProtfolioHeader from "../components/ProjectDetailsComponent/ProtfolioHeader.jsx"
import bg from "../assets/Male_Fashion/male_fashion_laptop.png"
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
import webview from "../assets/Male_Fashion/male_fashion_details.png"
import AS from "../assets/UrbanStudio_img/AlokSharma.png"

function MetroMan(){
    return (
        <div className="bg-[#9B6B51]">
            <ProtfolioHeader
          pro_name="Metro Man"
          desc1="Redefining Style, One Man at a Time."
          desc2="Unleash Your Style, Own the City."
          desc3=" Metro Man delivers trendy, sophisticated fashion essentials, empowering men to look sharp and confident daily."
          sreen_banner={bg}
          livepr="https://positive.urbanfusionstudio.com/"
        />

<AboutProject
         head="ABOUT THE PROJECT"
         desc=" 
Metro Man delivers trendy, sophisticated fashion essentials, empowering men to look sharp, confident, and effortlessly stylish every day. With a wide range of high-quality pieces, we cater to modern men who value both comfort and style, offering versatile options for any occasion."
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
The male fashion industry faces several challenges that affect both brands and consumers. One major issue is the lack of variety and inclusivity in terms of body types and personal style preferences. Many brands focus only on a narrow range of sizes and styles, leaving a significant portion of the male population underserved. This creates a barrier for men who do not fit traditional size standards or who want to express their individuality through fashion.

Another challenge is the constant evolution of trends, which can make it difficult for brands to stay relevant. Men’s fashion is often seen as slower to adapt compared to women’s fashion, making it tough for some brands to capture attention and maintain customer loyalty in a fast-paced market. Additionally, the rise of fast fashion has led to concerns about sustainability and quality, as many affordable options prioritize trends over long-term durability, leading to a cycle of overconsumption”"
      solution="“
To address the challenges in the male fashion industry,  Metro Man adopted several solutions to cater to a broader and more diverse audience.

First, size inclusivity can be a key focus. Offering a wide range of sizes, including options for plus-size men or those with more athletic builds, can ensure no one is left out. Providing accurate size guides, virtual fitting tools, or even customization options will help men find clothing that fits well and suits their style.

In terms of staying relevant with trends, a website can incorporate a curated collection that blends timeless styles with the latest trends, making it easier for customers to stay updated without constantly having to follow fast-moving trends. Highlighting versatile, high-quality pieces that can be worn year-round would also encourage thoughtful purchasing. Collaborating with influencers or stylists to showcase new collections can help keep the fashion offerings fresh and engaging” "
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
export default MetroMan