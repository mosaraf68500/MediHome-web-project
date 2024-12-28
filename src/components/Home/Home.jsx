import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <section>
            <header>
                <Header></Header>
            </header>
            <Outlet></Outlet>

            <footer>
                <Footer></Footer>
            </footer>
        </section>

        
       
    );
};

export default Home;