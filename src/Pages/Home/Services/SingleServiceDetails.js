import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData, Link } from 'react-router-dom';
import SingleReview from '../../Shared/SingleReview/SingleReview';
import { AuthContext } from '../../../Context/AuthContextProvider/AuthContextProvider';

const SingleServiceDetails = () => {
    const { user } = useContext(AuthContext);
    const service = useLoaderData();
    const [reviews, setReviews] = useState([]);
    const [isStack, setIsStack] = useState('stack');
    const [seeAllStyle, setSeeAllStyle] = useState({ display: 'flex' })
    console.log(service);

    useEffect(() => {
        fetch(`http://localhost:5000/reviews/${service.name}`)
            .then(res => res.json())
            .then(data => setReviews(data))
            .catch(error => console.log(error))
    }, [service.name])

    const displayHandler = () => {
        setSeeAllStyle({ display: 'none' });
        setIsStack('');
    };

    return (
        <div className='py-20 bg-no-repeat bg-cover block justify-center items-center' style={{ backgroundImage: `url(${service.img})`, backgroundPosition: 'center' }}>
            <div className="card backdrop-blur-md glass mx-80" style={{ backgroundColor: 'rgba(0,0,0,0.2)' }}>
                <figure className='text-center'><img className='w-full' src={service.img} alt="" /></figure>
                <div className="card-body text-start">
                    <h2 className="text-5xl font-bold text-white">{service.name}</h2>
                    <p className='text-2xl text-white py-5'>{service.details}</p>
                    <div className='flex'>
                        <h1 className='w-2/3 mask mask-star bg-orange-600 text-white'>5</h1>
                        <h1 className='w-2/3 mask mask-star bg-orange-600 text-white'>S</h1>
                        <h1 className='w-2/3 mask mask-star bg-orange-600 text-white'>T</h1>
                        <h1 className='w-2/3 mask mask-star bg-orange-600 text-white'>A</h1>
                        <h1 className='w-2/3 mask mask-star bg-orange-600 text-white'>R</h1>
                    </div>
                    <p className="text-3xl font-serif text-white pl-4 py-5">Price : <span className="text-orange-600">{service.price}</span></p>
                    <hr className='glass h-3' />
                    <h1 className='text-white text-3xl'>Reviews</h1>
                    <div className={`justify-start ${isStack}`}>
                        {
                            reviews.map(review => <SingleReview key={review._id} bg={isStack === 'stack' ? 'bg-slate-700' : ''} reviewData={review}></SingleReview>)
                        }
                    </div>
                    <button className='btn btn-primary text-white' onClick={displayHandler} style={seeAllStyle}>See All</button>
                    {user ? <div>
                        <textarea name="" id="" cols="60" rows="6"></textarea>
                        <button type="submit" className='btn'>Submit</button>
                    </div> 
                    :
                    <div className='text-center'>
                        <h1 className="text-3xl text-white">Please <span className="text-orange-600"><Link to={'/login'}>Login</Link></span> To Add A Review</h1>
                    </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default SingleServiceDetails;