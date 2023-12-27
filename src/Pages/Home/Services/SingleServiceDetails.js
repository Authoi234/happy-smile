import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleServiceDetails = () => {
    const service = useLoaderData();
    const [reviews, setReviews] = useState([]);
    console.log(service);

    fetch(`http://localhost:5000/reviews/${service.name}`)
    .then(res => res.json())
    .then(data => setReviews(data))
    .catch(error => console.log(error))

    return (
        <div className='py-20 bg-no-repeat bg-cover block justify-center items-center' style={{backgroundImage: `url(${service.img})`, backgroundPosition: 'center'}}>
            <div className="card backdrop-blur-md glass mx-80" style={{backgroundColor: 'rgba(0,0,0,0.2)'}}>
                <figure className='text-center'><img className='w-full' src={service.img} alt="" /></figure>
                <div className="card-body text-start">
                    <h2 className="text-5xl font-bold text-white">{service.name}</h2>
                    <p className='text-2xl text-white py-5'>{service.details}</p>
                    <div className='flex'>
                        <h1 className='w-2/3 mask mask-star bg-orange-600 text-white'>5</h1>
                        <h1 className='w-2/3 mask mask-star bg-orange-600 text-white'>S</h1>
                        <h1 className='w-2/3 mask mask-star bg-orange-600 text-white'>T</h1>
                        <h1 className='w-2/3 mask mask-star bg-orange-600 text-white'>A</h1>
                        <h1 className='w-2/3 mask mask-star bg-orange-600 text-white'>R</h1>
                    </div>
                    <p className="text-3xl font-serif text-white pl-4 py-5">Price : <span className="text-orange-600">{service.price}</span></p>
                    <div className="justify-start">
                        {
                            reviews.map(review => <div></div>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleServiceDetails;