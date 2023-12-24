import React from 'react';

const SmilesSection = () => {
    return (
        <div>
            <div className="p-10 hero mb-5 bg-gradient-to-tl from-slate-800 via-slate-900 to-gray-950" style={{clipPath: 'polygon(0 89%, 10% 94%, 32% 96%, 51% 94%, 71% 91%, 100% 95%, 100% 0,0 0, 0 30%)'}}>
                <div className="hero-content flex-col lg:flex-row">
                    <img src="https://i.ibb.co/GQnfxm7/portrait-young-happy-teen-boy-looking-camera-186202-5737.jpg" className="max-w-sm rounded-full shadow-2xl" alt='A boy is smiling'  data-aos='fade-right' />
                    <div className='text-start'  data-aos='flip-left'>
                        <h1 className="text-6xl font-bold text-white">We Create Beautiful Smiles</h1>
                        <p className="py-6 text-2xl font-semibold leading-9">Dentalia is a modern dental clinic, specialized in advanced diagnostics and treatment of dental and oral disorders. We offer comprehensive services from all fields of dentistry. In addition to high-end dental equipment, all services are provided in a comfortable, luxury environment. New patients are welcomed with a complimentary oral health consultation.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SmilesSection;