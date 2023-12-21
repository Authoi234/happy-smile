import React from 'react';
import Banner from '../Banner/Banner';
import HomePageServices from '../Services/HomePageServices';

const Home = () => {
    return (
        <div>
            <div className='brightness-95' style={{ backgroundImage: `url(https://images.squarespace-cdn.com/content/v1/5ac678af3c3a53092d3ae4e1/1539360440535-CG2I75CFWTK5MY2E1ZL7/Child-smiling.jpg)`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                <Banner></Banner>
            </div>
            <HomePageServices></HomePageServices>
        </div>
    );
};

export default Home;