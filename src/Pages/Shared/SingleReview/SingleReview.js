import React from 'react';

const SingleReview = ({ reviewData, bg }) => {
    const {img, review, name } = reviewData;

    return (
        <div className={`card my-4 flex border p-5 ${bg}`}>
            <div className="avatar flex justify-start items-center">
                <div className="w-16 rounded-full mr-3">
                    <img src={img} alt='' />
                </div>
                <p className='text-xl text-white font-bold'>{name}</p>
            </div>
            <div className='text-white'>
                <p className='text-lg font-semibold '>{review}</p>
            </div>
        </div>
    );
};

export default SingleReview;