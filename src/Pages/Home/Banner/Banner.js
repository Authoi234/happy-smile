import React from 'react';

const Banner = () => {
    const myDate = new Date();

    const month = myDate.getUTCMonth() + 1;
    const date = myDate.getUTCDate();
    const year = myDate.getFullYear();

    return (
        <div className='pt-20 pb-5' style={{ background: 'rgba(57, 57, 57, 0.2)' }}>
            <h1 className="text-5xl font-bold text-white">We Want happy Smile for Children</h1>
            <p className='text-lg text-white py-3'>A happy smile is important for children because it can bring joy and positivity to their lives. <br /> When children have a happy smile, it can make them feel confident and comfortable in <br /> social situations. It also helps them to express their happiness and <br /> emotions to others. However, it is important to take care of their teeth to prevent <br /> cavities. We Work for their smiles be bright and healthy</p>
            <div className="flex justify-start mt-5">
                <div className='animate-pulse px-6 shadow-lg shadow-gray-500 text-white hover:scale-110 hover:shadow-xl hover:shadow-red-400 hover:bg-gradient-to-r from-orange-600 via-orange-400 to-red-600 transition-all bg-orange-500 border-0 p-5'>
                    <h1 className='text-3xl'>{date}</h1>
                    <h1 className='text-2xl'>{year}</h1>
                    <p>Month:{month}</p>
                </div>
            </div>
            <div className="flex justify-end mt-1 animate-pulse">
                <img className='rounded-full w-1/6 animate-bounce' src="https://www.smileprofessionalsofdayton.net/wp-content/uploads/2019/11/toothbrush1.jpg" alt="" />
            </div>
        </div>
    );
};

export default Banner;