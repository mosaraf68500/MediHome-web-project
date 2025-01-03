import React from 'react';
import banner from "../../../assets/banner.jpg"

const Banner = () => {
    return (
        <div>
         
        <div class="p-10 lg:mt-20">
          <div class="grid lg:grid-cols-2 grid-cols-1 gap-10">
            
            <div class="space-y-8">
              <h1
                class="lg:text-6xl text-4xl font-bold leading-tight text-gray-900"
              >
                Caring Person <span class="text-[#2563EB]">MediHome</span> Your
                All Illness.
              </h1>
              <p class="lg:text-lg text-[14px] text-gray-800">
                Our hospital is dedicated to providing top-notch healthcare
                services that cater to your needs. With a team of experienced
                doctors, nurses, and staff, we offer a wide range of medical
                services, including diagnostic procedures, surgeries, emergency
                care, and more.
              </p>
              <div>
                <a href="appointmanet.html"
                  ><button
                    class="btn text-lg font-semibold bg-[#2563EB] text-white"
                  >
                    Appontment Now
                  </button></a
                >
              </div>
            </div>
            
            <div>
              <img
                src={banner}
                class="rounded-xl h-[450px] w-full"
                alt=""
              />
            </div>
          </div>
        </div>
      
            
        </div>
    );
};

export default Banner;