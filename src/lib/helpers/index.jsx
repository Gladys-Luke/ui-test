export function getOrderStatus(status) {
	switch (status) {
		case 'COMPLETED':
			return (
				<span className="capitalize py-1 px-2 rounded-md font-medium text-xs text-teal-500 bg-teal-100">
					{status.replaceAll('_', ' ').toLowerCase()}
				</span>
			)
		case 'PROCESSING':
			return (
				<span className="capitalize py-1 px-2 rounded-md font-medium text-xs text-purple-800 bg-purple-200">
					{status.replaceAll('_', ' ').toLowerCase()}
				</span>
			)
		case 'REJECTED':
			return (
				<span className="capitalize py-1 px-2 rounded-md font-medium text-xs text-orange-600 bg-pink-200">
					{status.replaceAll('_', ' ').toLowerCase()}
				</span>
			)
		case 'OUT_FOR_DELIVERY':
			return (
				<span className="capitalize py-1 px-2 rounded-md text-xs text-yellow-600 bg-yellow-100">
					{status.replaceAll('_', ' ').toLowerCase()}
				</span>
			)
		case 'DELIVERED':
			return (
				<span className="capitalize py-1 px-2 rounded-md text-xs text-green-600 bg-green-100">
					{status.replaceAll('_', ' ').toLowerCase()}
				</span>
			)
		default:
			return (
				<span className="capitalize py-1 px-2 rounded-md text-xs text-gray-600 bg-gray-100">
					{status.replaceAll('_', ' ').toLowerCase()}
				</span>
			)
	}
}
