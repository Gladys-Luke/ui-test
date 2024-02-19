import React, { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { HiOutlineBell, HiOutlineSearch, } from 'react-icons/hi'
import { IoIosArrowDropdown } from 'react-icons/io'
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom'
import classNames from 'classnames'
import Profile from '../assets/profile.jpeg'

export default function Header() {
    const navigate = useNavigate()

    return (
        <div className="bg-white relative h-16 px-4 flex items-center border-b border-gray-200 justify-between">
		<div className='absolute right-[1120px] bg-white rounded p-1'>
			<IoIosArrowBack />
		</div>
            <div className="relative pl-[46px]">
                <HiOutlineSearch fontSize={20} className="text-gray-400 absolute top-1/2 left-16 -translate-y-1/2" />
                <input
                    type="text"
                    placeholder="Search"
                    className="text-sm bg-slate-100 focus:outline-none active:outline-none border border-gray-300 w-[22rem] h-[35px] pl-11 pr-4 rounded-full"
                />
            </div>
            <div className="flex items-center gap-5 mr-2">
                <div className="relative">
                    <HiOutlineBell fontSize={34} />
                    <span className="absolute top-0 right-0 inline-flex items-center justify-center px-[5px] py-[3px] -mt-1 -mr-1 text-xs font-bold leading-none text-white bg-red-500 rounded-full">
                        6
                    </span>
                </div>

                <div className="">
                    <img src={Profile} alt="profile-image" className="h-[35px] w-[35px] rounded-full" />{' '}
                    {/* Use the image */}
                </div>
                <div className="flex flex-col">
                    <span className="text-[12px] font-bold">Luna Oliver</span>
                    <span className="text-[12px] font-normal">Admin</span>
                </div>
                <Menu as="div" className="relative">
                    <div>
                        <Menu.Button className="ml-2  flex ">
                            <IoIosArrowDropdown className="text-[20px]" />
                        </Menu.Button>
                    </div>
                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items className="origin-top-right z-10 absolute right-0 mt-2 w-48 rounded-sm shadow-md p-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <Menu.Item>
                                {({ active }) => (
                                    <div
                                        onClick={() => navigate('/profile')}
                                        className={classNames(
                                            active && 'bg-gray-100',
                                            'active:bg-gray-200 rounded-sm px-4 py-2 text-gray-700 cursor-pointer focus:bg-gray-200'
                                        )}
                                    >
                                        Your Profile
                                    </div>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <div
                                        onClick={() => navigate('/settings')}
                                        className={classNames(
                                            active && 'bg-gray-100',
                                            'active:bg-gray-200 rounded-sm px-4 py-2 text-gray-700 cursor-pointer focus:bg-gray-200'
                                        )}
                                    >
                                        Settings
                                    </div>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <div
                                        className={classNames(
                                            active && 'bg-gray-100',
                                            'active:bg-gray-200 rounded-sm px-4 py-2 text-gray-700 cursor-pointer focus:bg-gray-200'
                                        )}
                                    >
                                        Sign out
                                    </div>
                                )}
                            </Menu.Item>
                        </Menu.Items>
                    </Transition>
                </Menu>
            </div>
        </div>
    )
}
