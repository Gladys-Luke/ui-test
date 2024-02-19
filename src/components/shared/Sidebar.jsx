import React, { useState } from 'react'
import Logo from '../assets/logo.png'
import { FiHome } from 'react-icons/fi'
import { FaRegFileAlt } from 'react-icons/fa'
import { LuCalendar } from 'react-icons/lu'
import { HiOutlineCircleStack } from 'react-icons/hi2'
import { PiChartBar } from 'react-icons/pi'
import { BsChevronDown, BsChevronUp } from 'react-icons/bs'
import { IoSettingsOutline } from 'react-icons/io5'
import classNames from 'classnames'
import { NavLink, useLocation } from 'react-router-dom'
import { HiOutlineLogout, HiOutlineQuestionMarkCircle } from 'react-icons/hi'
import { DASHBOARD_SIDEBAR_LINKS, DASHBOARD_SIDEBAR_BOTTOM_LINKS } from '../../lib/constants'

const linkClass = 'flex items-center gap-2 font-light px-3 py-2 hover:no-underline rounded-sm text-base'
const activeLinkClass = 'bg-[#5BB318] text-white'

export default function Sidebar() {
    const [showDropdown, setShowDropdown] = useState(false)
    const [showSettingDropdown, setShowSettingDropdown] = useState(false)
    const { pathname } = useLocation()

    return (
        <div className="bg-neutral-700 w-60 p-3 flex flex-col h-screen overflow-y-auto">
            <div className="flex items-center gap-2 px-1 py-3">
                <img src={Logo} alt="Logo" className=" w-[80%]" />
            </div>
            <hr className="border-white mt-2 mb-5 border-t-[2px]" />
            <div className="pl-4 flex-grow">
                <SidebarSection title="MAIN">
                    <SidebarLink to="/" icon={<FiHome className="text-white text-[18px] " />} label="Dashboard" />
                    <SidebarLink
                        to="/file-management"
                        icon={<FaRegFileAlt className="text-white text-[18px]" />}
                        label="File Management"
                    />
                    <SidebarLink
                        to="/capacity-building"
                        icon={<LuCalendar className="text-white text-[18px]" />}
                        label="Capacity Building"
                    />
                    <SidebarLink
                        to="/data-repository"
                        icon={<HiOutlineCircleStack className="text-white text-[18px]" />}
                        label="Data Repository"
                    />
                    <SidebarLink
                        to="/trainings"
                        icon={<HiOutlineCircleStack className="text-white text-[18px]" />}
                        label="Trainings"
                    />
                    <SidebarDropdown
                        icon={<PiChartBar className="text-white text-[18px]" />}
                        label="Reports and Insights"
                        showDropdown={showDropdown}
                        toggleDropdown={() => setShowDropdown(!showDropdown)}
                    >
                        <SidebarLink to="/reports/trainings" label="Trainings" />
                        <SidebarLink to="/reports/research-reports" label="Research Reports" />
                        <SidebarLink to="/reports/staff-evaluations" label="Staff Evaluations" />
                        <SidebarLink to="/reports/project-developments" label="Projects Developments" />
                    </SidebarDropdown>
                </SidebarSection>

                <hr className="border-white my-5 border-t-[2px]" />

                <SidebarSection title="SETTINGS">
                    <div
                        className="flex items-center gap-4 hover:bg-[#5BB318] hover:px-5 hover:py-2 hover:rounded-lg cursor-pointer"
                        onClick={() => setShowSettingDropdown(!showSettingDropdown)}
                    >
                        <IoSettingsOutline className="text-white text-[18px]" />
                        <p className="text-white  text-[14px]">Settings</p>
                        {showSettingDropdown ? (
                            <BsChevronUp className="text-white" />
                        ) : (
                            <BsChevronDown className="text-white" />
                        )}
                    </div>
                    {showSettingDropdown && (
                        <>
                            <div className="pl-6 relative">
                                <div className="flex items-center gap-4 cursor-pointer">
                                    <p className="text-white  text-[14px] hover:text-gray-400">Trainings</p>
                                </div>
                                <div className="flex items-center gap-4 cursor-pointer">
                                    <p className="text-white  text-[14px] hover:text-gray-400">Research Reports</p>
                                </div>
                                <div className="flex items-center gap-4 cursor-pointer">
                                    <p className="text-white  text-[14px] hover:text-gray-400">Staff Evaluations</p>
                                </div>
                                <div className="flex items-center gap-4 cursor-pointer">
                                    <p className="text-white  text-[14px] hover:text-gray-400">Projects Developments</p>
                                </div>
                            </div>
                        </>
                    )}
                </SidebarSection>
            </div>

            <SidebarSection className="text-[#5BB318]">
                <SidebarLink
                    to="/help"
                    icon={<HiOutlineQuestionMarkCircle className="text-white text-[18px]" />}
                    label="Help"
                />
                <SidebarLink
                    to="/logout"
                    icon={<HiOutlineLogout className="text-[#5BB318] text-[18px]" />}
                    label="Logout Account"
                />
            </SidebarSection>
        </div>
    )
}

function SidebarSection({ title, children }) {
    return (
        <div>
            <h2 className="text-white text-[10px] font-normal mb-4 ">{title}</h2>
            {children}
        </div>
    )
}

function SidebarLink({ to, icon, label }) {
    return (
        <NavLink
            exact
            to={to}
            className={classNames('flex items-center gap-4 cursor-pointer hover:bg-[#5BB318] hover:px-5 hover:py-2 hover:rounded-lg hover:text-white', 'text-white', linkClass)}
            activeClassName={`${activeLinkClass} hover:bg-[#5BB318] hover:px-5 hover:py-2 hover:rounded-lg`}
        >
            <span className="text-xl">{icon}</span>
            <p className="text-[14px] hover:text-gray-400">{label}</p>
        </NavLink>
    )
}

function SidebarDropdown({ icon, label, showDropdown, toggleDropdown, children }) {
    return (
        <div
            className={classNames('flex items-center gap-4 cursor-pointer hover:bg-[#5BB318] hover:px-5 hover:py-2 hover:rounded-lg', { [activeLinkClass]: showDropdown })}
            onClick={toggleDropdown}
        >
            {icon}
            <p className="text-white text-[14px] hover:text-gray-400">{label}</p>
            {showDropdown ? (
                <BsChevronUp className="text-white" />
            ) : (
                <BsChevronDown className="text-white" />
            )}
            {showDropdown && (
                <div className="pl-6 relative">
                    {children}
                </div>
            )}
        </div>
    );
}

