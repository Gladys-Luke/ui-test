import React from 'react'
import { format } from 'date-fns'
import { Link } from 'react-router-dom'
import { getOrderStatus } from '../lib/helpers'
import { ImFilter } from 'react-icons/im'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaArrowRotateLeft,  } from 'react-icons/fa6'

const recentOrderData = [
    {
        id: '00001',
        program: 'Children Training',
        customer_id: '23143',
        location: '089 Kutch Green Apt. 448',
        date: '14 Feb 2019',
        type: 'Training',
        current_order_status: 'COMPLETED'
    },
    {
        id: '00002',
        program: 'Children Training',
        customer_id: '96453',
        location: '979 Immanuel Ferry Suite 526',
        date: '14 Feb 2019',
        type: 'Outreach',
        current_order_status: 'PROCESSING'
    },
    {
        id: '00003',
        program: 'Children Training',
        customer_id: '65345',
        location: '8587 Frida ports',
        date: '14 Feb 2019',
        type: 'Capacity Dev',
        current_order_status: 'REJECTED'
    },
    {
        id: '00004',
        program: 'Children Training',
        customer_id: '87832',
        location: '768 Destiny Lake Suite 600',
        date: '14 Feb 2019',
        type: 'Outreach',
        current_order_status: 'COMPLETED'
    },
    {
        id: '00005',
        program: 'Children Training',
        customer_id: '09832',
        location: '042 Mylene Throughway',
        date: '14 Feb 2019',
        type: 'Outreach',
        current_order_status: 'PROCESSING'
    },
    {
        id: '00006',
        program: 'Children Training',
        customer_id: '97632',
        location: '543 Weimann Mountain',
        date: '14 Feb 2019',
        type: 'Capacity Dev',
        current_order_status: 'COMPLETED'
    }
]

export default function RecentOrders() {
    return (
        <div className="flex flex-col flex-1">
            <div className="mt-2 mb-6">
                <span className="text-[28px] font-semibold">Program Insight</span>
            </div>
            <div className="bg-neutral-50  rounded-xl  w-[75%] mb-6">
                <table className="w-full text-gray-700 border-collapse table-auto">
                    <tbody>
                        <tr>
                            <td className="py-3 px-4 border text-[22px] font-bold">
                                <ImFilter />
                            </td>
                            <td className="py-3 px-4 border text-[13px] font-bold">Filter By</td>
                            <td className="py-3 px-4 border">
                                <select className="block w-full py-2 text-[13px] font-bold px-3 bg-transparent rounded-md shadow-sm focus:outline-none ">
                                    <option>14 Feb 2019</option>
                                    <option>Option 2</option>
                                    <option>Option 3</option>
                                </select>
                            </td>
                            <td className="py-3 px-4 border">
                                <select className="block w-full py-2 text-[13px] font-bold px-3 bg-transparent rounded-md shadow-sm focus:outline-none ">
                                    <option>Program</option>
                                    <option>Option 2</option>
                                    <option>Option 3</option>
                                </select>
                            </td>
                            <td className="py-3 px-4 border">
                                <select className="block w-full py-2 text-[13px] font-bold px-3 bg-transparent rounded-md shadow-sm focus:outline-none ">
                                    <option>Location</option>
                                    <option>Option 2</option>
                                    <option>Option 3</option>
                                </select>
                            </td>
                            <td className="py-3 px-4 border  text-rose-600">
                                <div className="flex items-center gap-2">
                                    <FaArrowRotateLeft />
                                    Reset Filter
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="bg-white pb-4 rounded-xl border  flex-1">
                <table className="w-full text-gray-700 ">
                    <thead className="bg-white">
                        <tr>
                            <th className="pl-6">ID</th>
                            <th className="pl-6">PROGRAM</th>
                            <th className="pl-6">LOCATION</th>
                            <th className="pl-6">DATE</th>
                            <th className="pl-6">TYPE</th>
                            <th className="pl-6">STATUS</th>
                        </tr>
                    </thead>
                    <tbody className="font-semibold text-[12px]">
                        {recentOrderData.map((order) => (
                            <tr key={order.id}>
                                <td className="py-5 text-[13px] pl-6">{order.id}</td>
                                <td className="py-5 text-[13px] pl-6">{order.program}</td>
                                <td className="py-5 text-[13px] pl-6">{order.location}</td>
                                <td className="py-5 text-[13px] pl-6">{order.date}</td>
                                <td className="py-5 text-[13px] pl-6">{order.type}</td>
                                <td className="py-5 text-[13px] pl-6">{getOrderStatus(order.current_order_status)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="flex justify-between mt-4">
                <button className="flex items-center gap-1 px-2 py-1 bg-white text-gray-500 text-[13px] border border-gray-300  rounded-md">
                    <IoIosArrowBack />
                    Prev. Date
                </button>
                <button className="flex items-center gap-1 px-2 py-1 bg-white text-gray-500 text-[13px] border border-gray-300   rounded-md">
                    Next Date
                    <IoIosArrowForward />
                </button>
            </div>
        </div>
    )
}
