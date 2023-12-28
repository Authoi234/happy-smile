import React from 'react';
import { FaAngleDown } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const SingleReviewTableRow = ({ review }) => {
    return (
        <tr>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-circle w-12 h-12">
                            <img src={`https://i.ibb.co/0y1sSV6/360-F-121968922-wmywsff9-Tg-POAn33-Oh-GF5sh02gv4cy8-O.jpg`} alt="Avatar Tailwind CSS Component" />
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
                <div className="avatar mask mask-circle w-12 h-12">
                    <img src={review.img} alt="Avatar Tailwind CSS Component" />
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
                        <button className='btn btn-circle btn-ghost mr-2 text-2xl'><IoClose></IoClose></button>
                    </label>
                    <label>
                        <button className='btn btn-circle btn-ghost text-2xl'><FaEdit></FaEdit></button>
                    </label>
                </div>
            </th>
        </tr>
    );
};

export default SingleReviewTableRow;