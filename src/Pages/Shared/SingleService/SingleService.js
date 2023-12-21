import React from 'react';

const SingleService = ({ service }) => {
    console.log(service);
    return (
        <div className="card w-96 bg-base-200 shadow-xl shadow-slate-500 mb-5">
            <figure><img src={service.img} alt="Shoes" /></figure>
            <div className="card-body justify-center">
                <h2 className="text-3xl font-bold font-serif">{service.name}</h2>
                <p>{
                    service.details ? service.details.slice(0, 130) + '....' : ''
                }</p>
                <p className="text-xl text-orange-400">Price: <del>{parseInt(service.price) - 30}$</del> {service.price}</p>
            </div>
        </div>
    );
};

export default SingleService;