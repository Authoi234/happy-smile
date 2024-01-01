import React from 'react';
import { FaAngleDown } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const SingleReviewTableRow = ({ review, handleDelete, handleUpdate }) => {
    return (
        <tr>
            {/* teeth icon and service name */}
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-circle w-12 h-12">
                            <img src={`https://i.ibb.co/0y1sSV6/360-F-121968922-wmywsff9-Tg-POAn33-Oh-GF5sh02gv4cy8-O.jpg`} alt="" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold text-white text-lg">{review.service}</div>
                        <div className="text-sm opacity-50"></div>
                    </div>
                </div>
            </td>
            {/* users email and name */}
            <td>
                <div className='font-bold text-white text-lg'>{review.name}</div>
                <span className="badge badge-ghost badge-sm">{review.email}</span>
            </td>
            {/* users atavar */}
            <td>
                <div className="avatar mask mask-circle w-14 h-14">
                    <img src={review.img} alt="" />
                </div>
            </td>
            {/* users review */}
            <th>
                <div className="collapse w-48 bg-slate-800">
                    <input type="checkbox" />
                    <div className="collapse-title text-xl font-medium flex items-center">
                        Review <span className='ml-10'><FaAngleDown></FaAngleDown></span>
                    </div>
                    <div className="collapse-content" style={{ wordBreak: 'break-all' }}>
                        <p>{review.review}</p>
                    </div>
                </div>
            </th>
            {/* updpate and delete icon */}
            <th>
                <div className='flex'>
                    <label>
                        <button className='btn btn-circle btn-ghost mr-2 text-2xl' onClick={() => handleDelete(review._id)}><MdDelete></MdDelete></button>
                    </label>
                    <label>
                        <button className='btn btn-circle btn-ghost ml-2 text-2xl' onClick={() => document.getElementById('my_modal_reviewUpdate').showModal()}><FaEdit></FaEdit></button>
                    </label>
                </div>
            </th>

            {/* Review Update Modal */}
            <dialog id="my_modal_reviewUpdate" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Hello!</h3>
                    <p className="py-4">Press ESC key or click the button below to close</p>
                    <div>
                        <form className='flex items-center' onSubmit={handleUpdate}>
                            <textarea className='mx-2' name="updatedText" placeholder='Write Your Review Here' cols="30" rows="4"></textarea>
                            <input type='text' defaultValue={review._id} readOnly className='w-0 h-1' name='id' />
                            <input type='submit' value="Update" className='btn mx-2' />
                        </form>
                        <form method='dialog'><button className='btn my-4'>Cancel</button></form>
                    </div>
                </div>
            </dialog>
        </tr>
    );
};

export default SingleReviewTableRow;