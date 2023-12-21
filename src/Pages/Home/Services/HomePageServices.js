import React, { useEffect, useState } from 'react';
import SingleService from '../../Shared/SingleService/SingleService';
import { Link } from 'react-router-dom';

const HomePageServices = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/services?limit=3')
            .then(res => res.json())
            .then(data => setServices(data[0]))
    }, [])

    console.log(services);

    return (
        <div>
            <div className='mx-5 mt-5 mb-5 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
                {
                    services.map(service => <SingleService service={service} key={service._id}></SingleService>)
                }
            </div>
            <Link to={'/services'} className="btn btn-outline btn-info my-5 font-bold px-20">See All</Link>
        </div>
    );
};

export default HomePageServices;