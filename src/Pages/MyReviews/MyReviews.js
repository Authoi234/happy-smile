import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthContextProvider/AuthContextProvider';
import SingleReviewTableRow from './SingleReviewTableRow';

const MyReviews = () => {
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);
    const email = user.email;

    useEffect(() => {
        fetch(`http://localhost:5000/myreviews/${email}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [email, user])

    return (
        <div>
            {
                reviews.length !== 0 ? <div className="overflow-x-auto my-10">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Service Name</th>
                                <th>Name</th>
                                <th>Image</th>
                                <th>Review</th>
                                <th></th>
                            </tr>
                        </thead>
                        {
                            reviews.map(review => <SingleReviewTableRow review={review} key={review._id}></SingleReviewTableRow>)
                        }
                    </table>
                </div>
                    :
                    <div className='h-3/4'>
                        <h1 className='text-5xl my-28 font-bold text-white'>No reviews were added</h1>
                    </div>
            }
        </div>
    );
};

export default MyReviews;