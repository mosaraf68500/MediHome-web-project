import React from 'react';
import google from "../../assets/google.png"
import apple from "../../assets/apple.png"

const Footer = () => {
    return (
        <div>
        <footer
          class="footer footer-center bg-[#111827] text-primary-content p-10"
        >
          <aside>
            <p class="font-bold lg:text-4xl text-2xl text-white">
              Download our Health app
            </p>
            <p class="text-lg font-semibold text-white">
              Stay fit. All day, every day.
            </p>
          </aside>
  
          
          <div class="flex gap-10">
            <div
              class="flex justify-center items-center border border-white p-3 rounded-lg gap-5"
            >
              <div><img src={google} alt="" class="w-12 h-12" /></div>
              <div>
                <p class="text-[14px] text-white">Download on</p>
                <p class="text-lg text-white font-bold">Google Play Store</p>
              </div>
            </div>
  
            <div
              class="flex justify-center items-center border border-white p-3 rounded-lg gap-5"
            >
              <div><img src={apple} alt="" class="w-12 h-12" /></div>
              <div>
                <p class="text-[14px] text-white">Download on</p>
                <p class="text-lg text-white font-bold">Apple Store</p>
              </div>
            </div>
          </div>
          <footer class="footer footer-center text-white text-base-content p-4">
            <aside>
              <p>Copyright © All right reserved by MediHome Hospital Ltd</p>
            </aside>
          </footer>
        </footer>
      </div>
    );
};

export default Footer;