import React from 'react';
import useSetTitle from '../../customHooks/useSetTitle';

const AddServices = () => {
    useSetTitle('Add Services')

    // handling service
    const handleAddService = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const img = form.img.value;
        const details = form.details.value;
        const price = form.price.value + ' $';

        const service = {
            name: name,
            details: details,
            img: img,
            price: price,
            createdAt: new Date()
        }

        fetch('https://happy-smile-server-667n33vco-authoi234s-projects.vercel.app/addServices', {
            method: 'POST',
            headers: {
                "content-type" : "application/json",
                jwtauthorization : `Bearer ${localStorage.getItem('happy-smile-token')}`
            },
            body: JSON.stringify(service)
        })
        .then(res => res.json())
        .then(data => {
            if (data.acknowledged) {
                form.reset();
            }
        })
    }

    return (
        <div className=' bg-slate-600'>
            <h1 className='text-5xl font-bold  text-slate-300 py-10'>Please Add A Service</h1>
            <form className='text-center' onSubmit={handleAddService}>
                <input type="text" name='name' placeholder="The Name Of The Service" className="input input-bordered w-2/3 my-2" />
                <input type="text" name='img' placeholder="Image URL Of The Service" className="input input-bordered  w-2/3 my-2" />
                <input type="text" name='details' placeholder="Details Of The Service" className="input input-bordered  w-2/3 my-2" />
                <span className='text-xl flex justify-center items-center'><p className='bg-base-100 flex items-center text-white h-10 px-2'>$</p> <input type="text" name='price' placeholder='Price Of The Service' className="input input-bordered  w-2/3 my-2" /></span>
                <input type="submit" value="Add" className='btn btn-primary btn-outline w-2/3 mt-4 mb-10' />
            </form>
        </div>
    );
};

export default AddServices;