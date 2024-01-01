import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthContextProvider/AuthContextProvider';
import SingleReviewTableRow from './SingleReviewTableRow';
import useSetTitle from '../../customHooks/useSetTitle';

const MyReviews = () => {
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);
    const email = user.email;
    useSetTitle('My Reviews');

    useEffect(() => {
        fetch(`https://happy-smile-server-667n33vco-authoi234s-projects.vercel.app/myreviews/${email}`, {
            headers: {
                jwtauthorization : `Bearer ${localStorage.getItem('happy-smile-token')}`
            }
        })
            .then(res => res.json())
            .then(data => setReviews(data))
            .catch(err => console.log(err))
    }, [email, user])

    // handling updating the review
    const handleUpdate = (event) => {
        event.preventDefault();

        const form = event.target;
        const updatedReview = form.updatedText.value;
        const id = form.id.value;
        fetch(`https://happy-smile-server-667n33vco-authoi234s-projects.vercel.app/myreviews/${id}`, {
            method: 'PATCH',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ review: updatedReview })
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    const remaining = reviews.filter(review => review._id !== id);
                    const updated = reviews.find(review => review._id === id);
                    updated.review = updatedReview;
                    const newReviews = [updated, ...remaining];
                    setReviews(newReviews);
                    document.getElementById('my_modal_reviewUpdate').close();
                }
            })
            .catch(err => console.error(err))
    }

    // handling delete the review
    const handleDelete = (id) => {
        fetch(`https://happy-smile-server-667n33vco-authoi234s-projects.vercel.app/myreviews/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    const remainning = reviews.filter(review => review._id !== id);
                    document.getElementById('my_modal_reviewDeleted').showModal();
                    setReviews(remainning);
                }
            })
    }

    return (
        <div>
            {/* Review deleted modal */}
            <dialog id="my_modal_reviewDeleted" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Successfully Review Deleted.</h3>
                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>

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
                            reviews.map(review => <SingleReviewTableRow review={review} key={review._id} handleDelete={handleDelete} handleUpdate={handleUpdate}></SingleReviewTableRow>)
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