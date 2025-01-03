import React from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Banner from "../Header/Banner/Banner";
import Blood from "../Header/Blood/Blood";

const Home = () => {
  return (
    <section className="">
      

      <main>
        {/* banner section */}
        <section>
          <Banner></Banner>
        </section>

        {/* blod section */}
        <section className="py-8">
            <Blood></Blood>
        </section>
      </main>

     
    </section>
  );
};

export default Home;
