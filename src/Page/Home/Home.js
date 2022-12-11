import React from 'react';
import AboutMe from '../AboutMe/AboutMe';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';
import Project from '../Project/Project';

const Home = () => {
    return (
        <div>
            {/* <NavBar></NavBar> */}
            <Banner></Banner>

            <Project></Project>
            <Contact></Contact>
            {/* <Footer></Footer> */}
        </div>
    );
};

export default Home;