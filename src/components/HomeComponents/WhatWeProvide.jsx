import WebImg from "../../assets/ImageAndIcons/web.png";
import EcommerceImg from "../../assets/ImageAndIcons/ecommerce.png";
import AppImg from "../../assets/ImageAndIcons/app.png";
import UiUxImg from "../../assets/ImageAndIcons/uiux.png";
import ERPImg from "../../assets/ImageAndIcons/erp.png";
import CRMImg from "../../assets/ImageAndIcons/crm.png";
function WhatWeProvide(){

return(
    <section className="p-8 ">
            <h2 className="text-lg font-semibold text-[#0040FF] text-center mb-3">
              What We Provide?
            </h2>
            <div className="text-center">
            <h3 className="text-3xl font-bold text-center mb-8">
              Provide Interactive IT Solution 
            </h3>
            <h3 className="text-3xl -mt-5 font-bold text-center mb-8">
            Business Services
            </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
              <div className="bg-[#002699] mx-auto text-white p-6 rounded-lg shadow-md h-auto max-w-xs">
                <div className="flex items-center mb-4">
                  <div className="flex justify-center items-center bg-white rounded-full p-3 ml-auto">
                    <img
                      alt="web-development-icon"
                      src={WebImg}
                      className="w-6 h-6"
                    />
                  </div>
                </div>
                <h4 className="text-3xl font-bold">
                  Web <br /> Development
                </h4>
                <p className="mt-2">
                  We create responsive and interactive websites tailored to
                  client needs, from dynamic CMS-driven websites to customized
                  landing pages.
                </p>
              </div>

              <div className="bg-white mx-auto p-6 rounded-lg shadow-md h-auto max-w-xs">
                <div className="flex items-center mb-4">
                  <div className="flex justify-center  items-center bg-[#002699] rounded-full p-3 ml-auto">
                    <img
                      alt="app-development-icon"
                      src={AppImg}
                      className="w-6 h-6"
                    />
                  </div>
                </div>
                <h4 className="text-3xl font-bold">
                  App <br /> Development
                </h4>
                <p className="mt-2">
                  Dharma Tech Solution builds user-friendly iOS and Android apps
                  that offer seamless performance and unique features tailored
                  for every business.
                </p>
              </div>

              <div className="bg-white mx-auto p-6 rounded-lg shadow-md h-auto max-w-xs">
                <div className="flex items-center mb-4">
                  <div className="flex justify-center items-center bg-[#002699] rounded-full p-3 ml-auto">
                    <img
                      alt="ui-ux-design-icon"
                      src={UiUxImg}
                      className="w-6 h-6"
                    />
                  </div>
                </div>
                <h4 className="text-3xl font-bold">
                  UI/UX <br /> Designing
                </h4>
                <p className="mt-2">
                  We craft intuitive, visually appealing interfaces that enhance
                  user experience and align with business goals, ensuring
                  seamless interactions.
                </p>
              </div>

              <div className="bg-white mx-auto p-6 rounded-lg shadow-md h-auto max-w-xs">
                <div className="flex items-center mb-4">
                  <div className="flex justify-center items-center bg-[#002699] rounded-full p-3 ml-auto">
                    <img
                      alt="erp-development-icon"
                      src={ERPImg}
                      className="w-6 h-6"
                    />
                  </div>
                </div>
                <h4 className="text-3xl font-bold">
                  ERP <br /> Development
                </h4>
                <p className="mt-2">
                  Our ERP systems integrate diverse operations, from sales to
                  logistics, in a single platform, enhancing productivity and
                  operational efficiency.
                </p>
              </div>

              <div className="bg-white mx-auto p-6 rounded-lg shadow-md h-auto max-w-xs">
                <div className="flex items-center mb-4">
                  <div className="flex justify-center items-center bg-[#002699] rounded-full p-3 ml-auto">
                    <img
                      alt="crm-development-icon"
                      src={CRMImg}
                      className="w-6 h-6"
                    />
                  </div>
                </div>
                <h4 className="text-3xl font-bold">
                  CRM <br /> Development
                </h4>
                <p className="mt-2">
                  Customized CRMs that streamline customer management and
                  improve service quality, helping you maintain valuable
                  relationships and improve client satisfaction.
                </p>
              </div>

              <div className="bg-white mx-auto  p-6 rounded-lg shadow-md h-auto max-w-xs">
                <div className="flex items-center mb-4">
                  <div className="flex justify-center items-center bg-[#002699] rounded-full p-3 ml-auto">
                    <img
                      alt="ecommerce-solution-icon"
                      src={EcommerceImg}
                      className="w-6 h-6"
                    />
                  </div>
                </div>
                <h4 className="text-3xl font-bold">E-commerce Solution</h4>
                <p className="mt-2">
                  Our e-commerce solutions support payment gateway integration,
                  inventory tracking, and high-performance architecture, making
                  online selling simple and effective.
                </p>
              </div>
            </div>
          </section>
)
}
export default WhatWeProvide