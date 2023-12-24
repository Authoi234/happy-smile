import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleServiceDetails = () => {
    const service = useLoaderData();
    console.log(service);
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                    Button
                </div>
            </div>
        </div>
    );
};

export default SingleServiceDetails;