import React from 'react'
import DashboardStatsGrid from '../components/DashboardStatsGrid'
import RecentOrders from '../components/RecentOrders'

export default function Dashboard() {
	return (
		<div className="flex flex-col gap-4">
			<DashboardStatsGrid />
			<div className="flex w-full">
				<RecentOrders />
			</div>
		</div>
	)
}
