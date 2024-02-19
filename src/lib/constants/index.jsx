import {
	HiOutlineViewGrid,
	HiOutlineCube,
	HiOutlineShoppingCart,
	HiOutlineUsers,
	HiOutlineDocumentText,
	HiOutlineAnnotation,
	HiOutlineQuestionMarkCircle,
	HiOutlineCog
} from 'react-icons/hi'
import { FiHome } from "react-icons/fi";
import { FaRegFileAlt } from "react-icons/fa";
import { LuCalendar } from "react-icons/lu";
import { HiOutlineCircleStack } from "react-icons/hi2";
import { PiChartBar } from "react-icons/pi";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";


export const DASHBOARD_SIDEBAR_LINKS = [
	{
		key: 'dashboard',
		label: 'Dashboard',
		path: '/',
		icon: <FiHome />
	},
	{
		key: 'products',
		label: 'File Management',
		path: '/products',
		icon: <FaRegFileAlt />
	},
	{
		key: 'orders',
		label: 'Capacity Building',
		path: '/orders',
		icon: <LuCalendar />
	},
	{
		key: 'customers',
		label: 'Data Repository',
		path: '/customers',
		icon: <HiOutlineCircleStack />
	},
	{
		key: 'transactions',
		label: 'Trainings',
		path: '/transactions',
		icon: <HiOutlineCircleStack />
	},
	{
        key: 'messages',
        label: 'Reports & Insights',
        path: '/messages',
        icon: <PiChartBar />,
        dropdownOptions: [
            {
                key: 'option1',
                label: 'Option 1',
                path: '/reports/option1'
            },
            {
                key: 'option2',
                label: 'Option 2',
                path: '/reports/option2'
            },
            {
                key: 'option3',
                label: 'Option 3',
                path: '/reports/option3'
            }
        ]
    },
	
]

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
	{
		key: 'settings',
		label: 'Settings',
		path: '/settings',
		icon: <HiOutlineCog />
	},
	{
		key: 'support',
		label: 'Help & Support',
		path: '/support',
		icon: <HiOutlineQuestionMarkCircle />
	}
]
