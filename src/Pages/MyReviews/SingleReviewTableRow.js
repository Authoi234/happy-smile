import React, { useContext } from 'react';
import { FaAngleDown } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { AuthContext } from '../../Context/AuthContextProvider/AuthContextProvider';

const SingleReviewTableRow = ({ review, handleDelete }) => {
    return (
        <tr>
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
            <td>
                <div className='font-bold text-white text-lg'>{review.name}</div>
                <span className="badge badge-ghost badge-sm">{review.email}</span>
            </td>
            <td>
                <div className="avatar mask mask-circle w-14 h-14">
                    <img src={review.img} alt="" />
                </div>
            </td>
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
            <th>
                <div className='flex'>
                    <label>
                        <button className='btn btn-circle btn-ghost mr-2 text-2xl' onClick={() => handleDelete(review._id)}><MdDelete></MdDelete></button>
                    </label>
                    <label>
                        <button className='btn btn-circle btn-ghost ml-2 text-2xl'><FaEdit></FaEdit></button>
                    </label>
                </div>
            </th>
        </tr>
    );
};

export default SingleReviewTableRow;