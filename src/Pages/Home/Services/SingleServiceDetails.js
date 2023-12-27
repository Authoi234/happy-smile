import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData, Link } from 'react-router-dom';
import SingleReview from '../../Shared/SingleReview/SingleReview';
import { AuthContext } from '../../../Context/AuthContextProvider/AuthContextProvider';

const SingleServiceDetails = () => {
    const { user } = useContext(AuthContext);
    const serviceDetail = useLoaderData();
    const [reviews, setReviews] = useState([]);
    const [isStack, setIsStack] = useState('stack');
    const [seeAllStyle, setSeeAllStyle] = useState({ display: 'flex' })

    useEffect(() => {
        fetch(`http://localhost:5000/reviews/${serviceDetail._id}`)
            .then(res => res.json())
            .then(data => setReviews(data))
            .catch(error => console.log(error))
    }, [serviceDetail._id, reviews])

    const handleSubmitReview = event => {
        event.preventDefault();
        const form = event.target;

        const review = form.reviewText.value;
        const email = user.email;
        const name = user.displayName;
        const service = serviceDetail.name;
        const img = user.photoURL;
        const serviceId = serviceDetail._id;

        const newReview = {
            name: name,
            img: img,
            review: review,
            service: service,
            email: email,
            serviceId: serviceId
        };

        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newReview)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    document.getElementById('my_modal_1').showModal();
                }
                console.log(data);
            })
            .catch(err => console.error(err))
    }

    const displayHandler = () => {
        setSeeAllStyle({ display: 'none' });
        setIsStack('');
    };

    return (
        <div className='py-20 bg-no-repeat bg-cover block justify-center items-center' style={{ backgroundImage: `url(${serviceDetail.img})`, backgroundPosition: 'center' }}>
            <div className="card backdrop-blur-md glass mx-80" style={{ backgroundColor: 'rgba(0,0,0,0.2)' }}>
                <figure className='text-center'><img className='w-full' src={serviceDetail.img} alt="" /></figure>
                <div className="card-body text-start">
                    <h2 className="text-5xl font-bold text-white">{serviceDetail.name}</h2>
                    <p className='text-2xl text-white py-5'>{serviceDetail.details}</p>
                    <div className='flex'>
                        <h1 className='w-2/3 mask mask-star bg-orange-600 text-white'>5</h1>
                        <h1 className='w-2/3 mask mask-star bg-orange-600 text-white'>S</h1>
                        <h1 className='w-2/3 mask mask-star bg-orange-600 text-white'>T</h1>
                        <h1 className='w-2/3 mask mask-star bg-orange-600 text-white'>A</h1>
                        <h1 className='w-2/3 mask mask-star bg-orange-600 text-white'>R</h1>
                    </div>
                    <p className="text-3xl font-serif text-white pl-4 py-5">Price : <span className="text-orange-600">{serviceDetail.price}</span></p>
                    <hr className='glass h-3' />
                    <h1 className='text-white text-3xl'>Reviews</h1>
                    <div className={`justify-start ${isStack}`}>
                        {
                            reviews.map(review => <SingleReview key={review._id} bg={isStack === 'stack' ? 'bg-slate-700' : ''} reviewData={review}></SingleReview>)
                        }
                    </div>
                    <button className='btn btn-primary text-white' onClick={displayHandler} style={seeAllStyle}>See All</button>
                    {user ? <form onSubmit={handleSubmitReview} className='flex justify-center items-start'>
                        <textarea name="reviewText" cols="58" rows="5.5" placeholder='Write Your Review Here' className='text-center py-3 px-3'></textarea>
                        <input type="submit" className='btn w-40 mx-2' value="Submit"></input>
                    </form>
                        :
                        <div className='text-center'>
                            <h1 className="text-3xl text-white">Please <span className="text-orange-600"><Link to={'/login'}>Login</Link></span> To Add A Review</h1>
                        </div>
                    }
                    <dialog id="my_modal_1" className="modal">
                        <div className="modal-box">
                            <h3 className="font-bold text-center text-lg text-white">Review Successfully Added</h3>
                            <div className="modal-action">
                                <form method="dialog">
                                    <button className="btn">Close</button>
                                </form>
                            </div>
                        </div>
                    </dialog>
                </div>
            </div>
        </div>
    );
};

export default SingleServiceDetails;