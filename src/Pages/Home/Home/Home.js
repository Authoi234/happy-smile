import React from 'react';
import Banner from '../Banner/Banner';
import HomePageServices from '../Services/HomePageServices';
import childSmileImg from '../../../images/Child-smiling.jpg';
import '../../../App.css';

const Home = () => {
    return (
        <div>
            <div className='brightness-95 banner-bg-image'>
                <Banner></Banner>
            </div>
            <HomePageServices></HomePageServices>
        </div>
    );
};

export default Home;