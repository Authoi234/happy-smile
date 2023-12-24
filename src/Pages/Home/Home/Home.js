import React from 'react';
import Banner from '../Banner/Banner';
import HomePageServices from '../Services/HomePageServices';
import '../../../App.css';
import SmilesSection from '../SmilesSection/SmilesSection';
import OurDantalTreatments from '../OurDantalTreatments/OurDantalTreatments';

const Home = () => {
    return (
        <div>
            <div className='brightness-95 banner-bg-image'>
                <Banner></Banner>
            </div>
            <HomePageServices></HomePageServices>
            <SmilesSection></SmilesSection>
            <OurDantalTreatments></OurDantalTreatments>
        </div>
    );
};

export default Home;