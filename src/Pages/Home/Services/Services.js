import React, { useEffect, useState } from 'react';
import toolsImg from '../../../images/teeth-dental-medical-equipment-steel-tools-set-realistic-1284-6589-removebg-preview.png';
import SingleService from '../../Shared/SingleService/SingleService';
import useSetTitle from '../../../customHooks/useSetTitle';
import { IoMdClose } from 'react-icons/io';

const Services = () => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [modalImg, setModalImg] = useState('')
    useSetTitle('Services -')

    useEffect(() => {
        setLoading(true);
        fetch(`http://localhost:5000/services`)
            .then(res => res.json())
            .then(data => {
                setServices(data);
                setTimeout(() => {
                    setLoading(false);
                }, 50);
            })
    }, [])

    const imgViewModal = (src) => {
        setModalImg(src);
        document.getElementById('my_modal_Img').showModal();
    }

    // console.log(services);

    return (
        <div className='relative'>
            <h1 className="text-5xl font-bold text-white my-3">Pain Free <span className='text-blue-600'>Dentistry</span></h1>
            {loading ?

                <div className='flex justify-center items-center'>
                    <span className="loading loading-spinner text-info w-40 text-center mt-20 mb-20"></span>
                </div>

                : <section className='mx-5 mt-5 mb-5 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
                    <dialog id="my_modal_Img" style={{ width: 'auto', height: 'auto' }} className="w-1/2">
                        <img style={{ width: '100%', height: '100%' }} src={modalImg} alt="" />
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn text-3xl absolute top-0"><IoMdClose></IoMdClose></button>
                        </form>
                    </dialog>
                    {
                        services.map(service => <SingleService service={service} key={service._id} imgViewModal={imgViewModal}></SingleService>)
                    }
                    <div>
                        <img className='w-1/6 rotate-90 absolute top-0 left-0' src={toolsImg} alt="" />
                    </div>
                </section>}
        </div>
    );
};

export default Services;