import React from 'react';

const SingleReview = ({ reviewData, bg }) => {
    const {img, review, name } = reviewData;

    return (
        <div className={`card my-4 flex border p-5 ${bg}`}>
            <div className="avatar flex justify-center items-center">
                <div className="w-16 rounded-full mr-3">
                    <img src={img} alt="Tailwind-CSS-Avatar-component" />
                </div>
                <p className='text-xl text-white font-bold'>{name}</p>
            </div>
            <div className='text-white'>
                <p className='text-base font-semibold'>{review}</p>
            </div>
        </div>
    );
};

export default SingleReview;