import React from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Banner from "../Header/Banner/Banner";
import Blood from "../Header/Blood/Blood";
import AboutHospital from "../AboutHospital/AboutHospital";
import LatestNews from "../LatestNews/LatestNews";
import AskQuestion from "../AskQuestion/AskQuestion";
import Contact from "../Contact/Contact";

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

        {/* about hospital */}
        <section>
          <AboutHospital></AboutHospital>
        </section>

        {/* latest news */}
        <section>
          <LatestNews></LatestNews>
        </section>

        {/* ask and question */}
        <AskQuestion></AskQuestion>

        {/* contact */}

        <section><Contact></Contact></section>
      </main>
    </section>
  );
};

export default Home;
