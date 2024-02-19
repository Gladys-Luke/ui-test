import React from 'react'
import { IoBagHandle, IoPieChart, IoPeople, IoCart } from 'react-icons/io5'
import { MdPeopleAlt } from 'react-icons/md'
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaArrowTrendDown } from "react-icons/fa6";
import { RiBox3Fill } from "react-icons/ri";
import { LuLineChart } from "react-icons/lu";
import { IoIosTimer } from "react-icons/io";

export default function DashboardStatsGrid() {
    return (
       <div className=''>
	   <div className='mt-2 mb-6'>
	   <span className='text-[28px] font-semibold'>Dashboard</span>
	   </div>
		 <div className="flex gap-7">
            <BoxWrapper>
                <div>
                    <div className="flex gap-9">
                        <span className="text-sm text-gray-500 font-medium">Program Outreach</span>
                        <div className="rounded-[20px] h-[55px] w-[55px] flex items-center justify-center bg-slate-200">
                            <MdPeopleAlt className="text-3xl text-indigo-400" />
                        </div>
                    </div>
					<div className='flex flex-col gap-4'>
					<span className='text-[25px] font-bold'>43</span>
					<FaArrowTrendUp className='text-teal-500' />
					</div>
                </div>
            </BoxWrapper>
            <BoxWrapper>
                <div>
                    <div className="flex gap-9">
                        <span className="text-sm text-gray-500 font-medium">Individual Trained</span>
                        <div className="rounded-[20px] h-[55px] w-[55px] flex items-center justify-center bg-rose-100">
                            <RiBox3Fill className="text-3xl text-amber-400" />
                        </div>
                    </div>
					<div className='flex flex-col gap-4'>
					<span className='text-[25px] font-bold'>89,000</span>
					<div className='flex items-center gap-2'>
					<FaArrowTrendUp className='text-teal-500' />
					<span className='text-[14px] font-medium text-teal-500'>1.3%</span>
					<span className='text-[14px] text-gray-500 font-medium'>Up from past week</span>
					</div>
					</div>
                </div>
            </BoxWrapper>
            <BoxWrapper>
                <div>
                    <div className="flex">
                        <span className="text-sm text-gray-500 font-medium">Communities Impacted</span>
                        <div className="rounded-[20px] h-[55px] w-[55px] flex items-center justify-center bg-emerald-100">
                            <LuLineChart className="text-3xl text-emerald-400" />
                        </div>
                    </div>
					<div className='flex flex-col gap-4'>
					<span className='text-[25px] font-bold'>100</span>
					<div className='flex items-center gap-2'>
					<FaArrowTrendDown className='text-pink-500' />
					<span className='text-[14px] font-medium text-pink-500'>4.3%</span>
					<span className='text-[14px] text-gray-500 font-medium'>Down from yesterday</span>
					</div>
					</div>
                </div>
            </BoxWrapper>
			<BoxWrapper>
                <div>
                    <div className="flex gap-28">
                        <span className="text-sm text-gray-500 font-medium">Metrics</span>
                        <div className="rounded-[20px] h-[55px] w-[55px] flex items-center justify-center bg-rose-200">
                            <IoIosTimer className="text-3xl text-orange-400" />
                        </div>
                    </div>
					<div className='flex flex-col gap-4'>
					<span className='text-[25px] font-bold'>2,040</span>
					<div className='flex items-center gap-2'>
					<FaArrowTrendUp className='text-teal-500' />
					<span className='text-[14px] font-medium text-teal-500'>1.8%</span>
					<span className='text-[14px] text-gray-500 font-medium'>Up from yesterday</span>
					</div>
					</div>
                </div>
            </BoxWrapper>
        </div>
	   </div>
    )
}

function BoxWrapper({ children }) {
    return <div className="bg-white rounded-2xl p-4 flex-1 shaadow-xl flex items-center">{children}</div>
}
