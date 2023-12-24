import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleServiceDetails = () => {
    const service = useLoaderData();
    console.log(service);
    return (
        <div className='py-20 bg-no-repeat bg-cover block justify-center items-center' style={{backgroundImage: `url(${service.img})`, backgroundPosition: 'center'}}>
            <div className="card bg-transparent backdrop-blur-sm glass mx-72">
                <figure><img className='w-full' src={service.img} alt="" /></figure>
                <div className="card-body">
                    <h2 className="text-4xl font-bold text-white">{service.name}</h2>
                    <p className='text-2xl text-white'>{service.details}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Learn now!</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleServiceDetails;