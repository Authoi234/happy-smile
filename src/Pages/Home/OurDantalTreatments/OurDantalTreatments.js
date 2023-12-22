import React from 'react';
import { FaSyringe, FaTeeth } from "react-icons/fa6";

const OurDantalTreatments = () => {
    return (
        <div className="hero min-h-screen bg-gradient-to-t from-slate-800 via-gray-900 to-red-500" style={{clipPath: 'polygon(0 10%, 9% 7%, 19% 4%, 29% 3%, 37% 5%, 49% 7%, 59% 6%, 100% 0, 100% 15%, 100% 100%, 0 100%)'}}>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="https://i.ibb.co/XSZwPwH/download.jpg" alt='' className="rounded-lg shadow-2xl"  data-aos="fade-right"/>
                <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-5'>
                    <div className="flex border border-slate-600 shadow-md shadow-slate-700 p-5" data-aos='flip-right'>
                        <FaSyringe className='text-8xl'></FaSyringe>
                        <div>
                            <h1 className='text-2xl text-white'>Dental Anxiety</h1>
                            <p className='text-xl text-gray-500'>We offer a range of services to help you overcome fear and finally enjoy good oral health.</p>
                        </div>
                    </div>
                    <div className="flex border border-slate-600 shadow-md shadow-slate-700 p-5" data-aos='flip-left'>
                    <FaTeeth  className='text-8xl'></FaTeeth>
                        <div>
                            <h1 className='text-2xl text-white'>Missing Teeth</h1>
                            <p className='text-xl text-gray-500'>We can restore your smile, as well as speaking & eating ability with advanced prosthetics.</p>
                        </div>
                    </div>
                    <div className="flex border border-slate-600 shadow-md shadow-slate-700 p-5" data-aos='flip-right'>
                    <FaSyringe className='text-8xl'></FaSyringe>
                        <div>
                            <h1 className='text-2xl text-white'>Dental Anxiety</h1>
                            <p className='text-xl text-gray-500'>We offer a range of services to help you overcome fear and finally enjoy good oral health.</p>
                        </div>
                    </div>
                    <div className="flex border border-slate-600 shadow-md shadow-slate-700 p-5" data-aos='flip-left'>
                    <FaSyringe className='text-8xl'></FaSyringe>
                        <div>
                            <h1 className='text-2xl text-white'>Dental Anxiety</h1>
                            <p className='text-xl text-gray-500'>We offer a range of services to help you overcome fear and finally enjoy good oral health.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurDantalTreatments;