import React, { useEffect, useState } from 'react';
import SingleService from '../../Shared/SingleService/SingleService';
import { Link } from 'react-router-dom';
import { IoMdClose } from 'react-icons/io';

const HomePageServices = () => {
    const [services, setServices] = useState([]);
    const [modalImg, setModalImg] = useState('');

    useEffect(() => {
        fetch('https://happy-smile-server-667n33vco-authoi234s-projects.vercel.app/services?limit=3')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    const imgViewModal = (src) => {
        setModalImg(src);
        document.getElementById('my_modal_Img').showModal();
    }

    // console.log(services);

    return (
        <div>
            <div className='mx-5 mt-5 mb-5 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
                {
                    services.map(service => <SingleService service={service} imgViewModal={imgViewModal} key={service._id}></SingleService>)
                }
            </div>
            <dialog id="my_modal_Img" style={{ width: 'auto', height: 'auto' }} className="w-1/2">
                <img style={{ width: '100%', height: '100%' }} src={modalImg} alt="" />
                <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn text-3xl absolute top-0"><IoMdClose></IoMdClose></button>
                </form>
            </dialog>
            <Link to={'/services'} className="btn btn-outline btn-info my-5 font-bold px-20">See All</Link>
        </div>
    );
};

export default HomePageServices;