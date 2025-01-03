import React from 'react';
import blood from "../../../assets/blood.PNG"

const Blood = () => {
    return (
             
        <div>
          
          <div class="grid p-10 lg:grid-cols-2 grid-cols-1 gap-10">
            
            <div
              class="border flex flex-col justify-center items-center space-y-12 flex-1 bg-[#EFF6FF] rounded-xl"
            >
              <div class="pt-16">
                <a href="blood donation.html">
                  <button
                    class="btn text-xl font-semibold bg-red-600 text-white hover:bg-red-900 transition-colors duration-300 ease-in-out"
                  >
                    Donate Blood
                  </button>
                </a>
              </div>
              <div class="pb-16">
                <a href="blood need.html"
                  ><button
                    class="btn text-xl font-semibold bg-[#2563EB] text-white hover:bg-primary transition-colors duration-300 ease-in-out"
                  >
                    Request Blood
                  </button></a
                >
              </div>
            </div>

           
            <div class="flex-1">
              <img
                src={blood}
                class="rounded-xl h-[450px] w-full"
                alt=""
              />
            </div>
          </div>
        </div>
     

        
    );
};

export default Blood;